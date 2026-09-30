const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails
} = require('@firebase/rules-unit-testing');
const {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} = require('firebase/firestore');

let ambiente;

test.before(async () => {
  ambiente = await initializeTestEnvironment({
    projectId: 'demo-mbb-academia',
    firestore: {
      host: '127.0.0.1',
      port: 8080,
      rules: fs.readFileSync(path.resolve(__dirname, '../../firestore.rules'), 'utf8')
    }
  });
});

test.after(async () => {
  await ambiente.cleanup();
});

function perfil(nome, email) {
  return {
    displayName: nome,
    email,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
}

function curso(lastLessonId = 'emb-01-03') {
  return {
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    lastLessonId,
    updatedAt: serverTimestamp()
  };
}

function atividade({ id = 'emb-01-03', type = 'pratica', points = 20, state = 'concluida' } = {}) {
  return {
    activityId: id,
    courseId: 'sistemas-embarcados-iot',
    courseVersion: 1,
    state,
    type,
    points,
    updatedAt: serverTimestamp(),
    ...(state === 'concluida' ? { completedAt: serverTimestamp() } : {})
  };
}

test('usuário autenticado cria o próprio perfil mínimo com o mesmo e-mail do Auth', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  await assertSucceeds(setDoc(doc(db, 'users', 'aluno-a'), perfil('Aluno A', 'a@example.test')));
});

test('perfil não pode declarar outro e-mail', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  await assertFails(setDoc(doc(db, 'users', 'aluno-a'), perfil('Aluno A', 'outro@example.test')));
});

test('usuário B não lê nem altera dados do usuário A', async () => {
  const dbB = ambiente.authenticatedContext('aluno-b', { email: 'b@example.test' }).firestore();
  await assertFails(getDoc(doc(dbB, 'users', 'aluno-a')));
  await assertFails(setDoc(doc(dbB, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot'), curso()));
});

test('curso e atividade reais continuam aceitos', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const cursoRef = doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot');
  const atividadeRef = doc(cursoRef, 'activities', 'emb-01-03');

  await assertSucceeds(setDoc(cursoRef, curso()));
  await assertSucceeds(setDoc(atividadeRef, atividade()));

  const salvo = await getDoc(atividadeRef);
  assert.equal(salvo.id, 'emb-01-03');
  assert.equal(salvo.data().points, 20);
});

test('curso inventado e atividade fora do namespace são rejeitados', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();

  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'curso-inventado'), {
    courseId: 'curso-inventado',
    courseVersion: 1,
    lastLessonId: 'emb-01-03',
    updatedAt: serverTimestamp()
  }));

  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-01-999'),
    atividade({ id: 'emb-01-999' })));
});

test('pontuação adulterada e identidade divergente são rejeitadas', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();

  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-02-01'),
    atividade({ id: 'emb-02-01', type: 'pratica', points: 9999 })));

  await assertFails(setDoc(doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-02-01'), {
    ...atividade({ id: 'emb-02-01' }),
    activityId: 'emb-02-02'
  }));
});

test('atividade concluída não pode voltar para em andamento', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const ref = doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'activities', 'emb-01-03');

  await assertSucceeds(setDoc(ref, atividade()));
  await assertFails(setDoc(ref, atividade({ state: 'em-andamento' })));
});

test('conquista inventada é rejeitada', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const ref = doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot', 'achievements', 'sou-hacker');
  await assertFails(setDoc(ref, { achievementId: 'sou-hacker', unlockedAt: serverTimestamp() }));
});

test('conquista real exige que o pré-requisito esteja concluído', async () => {
  const db = ambiente.authenticatedContext('aluno-a', { email: 'a@example.test' }).firestore();
  const base = doc(db, 'users', 'aluno-a', 'courses', 'sistemas-embarcados-iot');
  const conquistaRef = doc(base, 'achievements', 'primeiro-circuito');

  await assertFails(setDoc(conquistaRef, {
    achievementId: 'primeiro-circuito',
    unlockedAt: serverTimestamp()
  }));

  await assertSucceeds(setDoc(doc(base, 'activities', 'emb-01-03'), atividade()));
  await assertSucceeds(setDoc(conquistaRef, {
    achievementId: 'primeiro-circuito',
    unlockedAt: serverTimestamp()
  }));
});

test('visitante não acessa dados privados', async () => {
  const db = ambiente.unauthenticatedContext().firestore();
  await assertFails(getDoc(doc(db, 'users', 'aluno-a')));
});
