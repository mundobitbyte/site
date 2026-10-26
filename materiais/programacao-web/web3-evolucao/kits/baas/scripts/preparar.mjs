import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Este arquivo nunca administra um projeto de nuvem.
if (process.env.FIRESTORE_EMULATOR_HOST !== '127.0.0.1:8080' || process.env.FIREBASE_AUTH_EMULATOR_HOST !== '127.0.0.1:9099') throw new Error('Execute com os dois endereços locais indicados na aula.');
initializeApp({projectId:'demo-cafe-aurora-web3'});
const auth=getAuth();
for (const [uid,email,operador] of [['operador-exercicio','operador@example.test',true],['leitor-exercicio','leitor@example.test',false]]) {
  try { await auth.getUser(uid); }
  catch(e) { if(e.code!=='auth/user-not-found')throw e;await auth.createUser({uid,email,password:'senha-ficticia-aurora'}); }
  await auth.setCustomUserClaims(uid,{operador});
}
const banco=getFirestore();
if (!(await banco.doc('atendimento/atual').get()).exists) await banco.doc('atendimento/atual').create({nomeNegocio:'Café Aurora',pedidosAbertos:true,tempoEstimado:30});
console.log('Dados locais preparados sem sobrescrever o atendimento. Contas fictícias: operador@example.test e leitor@example.test; senha de exercício: senha-ficticia-aurora. Não reutilize essa senha fora do emulador.');
