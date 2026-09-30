const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('Academia recusa e-mail temporário e mantém cadastro normal funcionando', async () => {
  const criados = [];
  const perfis = [];
  const auth = { currentUser: null, authStateReady: async () => {} };
  const usuario = { uid: 'aluno-a', email: 'aluno@escola.edu.br', displayName: null };

  const appSdk = { initializeApp: () => ({}) };
  const authSdk = {
    getAuth: () => auth,
    onAuthStateChanged: (_auth, callback) => callback(null),
    createUserWithEmailAndPassword: async (_auth, email) => {
      criados.push(email);
      usuario.email = email;
      return { user: usuario };
    },
    updateProfile: async (user, dados) => { user.displayName = dados.displayName; }
  };
  const dbSdk = {
    getFirestore: () => ({}),
    doc: (_db, ...partes) => partes.join('/'),
    setDoc: async (ref, dados) => { perfis.push({ ref, dados }); },
    serverTimestamp: () => 'SERVER_TIMESTAMP'
  };

  const janela = {
    MBB_FIREBASE_CONFIG: {
      apiKey: 'teste',
      projectId: 'academia-teste',
      authDomain: 'academia-teste.firebaseapp.com'
    },
    __sdk: { appSdk, authSdk, dbSdk }
  };

  const codigo = fs.readFileSync(path.resolve(__dirname, '../js/academia-storage.js'), 'utf8')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js')", 'Promise.resolve(window.__sdk.appSdk)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')", 'Promise.resolve(window.__sdk.authSdk)')
    .replaceAll("import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js')", 'Promise.resolve(window.__sdk.dbSdk)');

  vm.runInNewContext(codigo, {
    window: janela,
    localStorage: { getItem: () => null, setItem: () => {} },
    console,
    Date
  });

  const storage = janela.MBBAcademiaStorage;

  await assert.rejects(
    storage.criarConta('Aluno', 'teste@MAILINATOR.COM', 'senha123'),
    { code: 'mbb/email-temporario' }
  );
  await assert.rejects(
    storage.criarConta('Aluno', 'teste@sub.yopmail.com', 'senha123'),
    { code: 'mbb/email-temporario' }
  );
  assert.equal(criados.length, 0);

  await storage.criarConta('Aluno A', ' aluno@escola.edu.br ', 'senha123');
  assert.deepEqual(criados, ['aluno@escola.edu.br']);
  assert.equal(usuario.displayName, 'Aluno A');
  assert.equal(perfis.length, 1);
  assert.equal(perfis[0].ref, 'users/aluno-a');
  assert.equal(perfis[0].dados.email, 'aluno@escola.edu.br');
});
