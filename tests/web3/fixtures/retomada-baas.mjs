import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { initializeApp, getApps, getApp, deleteApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const fase=process.argv[2];
assert.ok(['gravar','imagem','conferir'].includes(fase));
// A bancada é exclusivamente local e usa dados fictícios conhecidos.
process.env.FIRESTORE_EMULATOR_HOST='127.0.0.1:8080';
process.env.FIREBASE_AUTH_EMULATOR_HOST='127.0.0.1:9099';
if(fase==='gravar') await import('./scripts/preparar-local.mjs');
if(fase!=='gravar') process.env.FIREBASE_STORAGE_EMULATOR_HOST='127.0.0.1:9199';
const app=getApps().length?getApp():initializeApp({projectId:'demo-cafe-aurora-web3',storageBucket:'demo-cafe-aurora-web3.appspot.com'});
const banco=getFirestore(app);
if(fase==='gravar') await banco.doc('atendimento/atual').update({tempoEstimado:47});
assert.equal((await banco.doc('atendimento/atual').get()).data().tempoEstimado,47,'o prazo deve sobreviver à parada');
const operador=await getAuth(app).getUser('operador-exercicio');
assert.equal(operador.email,'operador@example.test');
assert.equal(operador.customClaims.operador,true,'a identidade e a permissão devem sobreviver');
const caminho='imagens/operador-exercicio/retomada.webp';
const imagem=await readFile(new URL('./public/img/cafe-coado.webp',import.meta.url));
if(fase==='imagem') {
 await getStorage(app).bucket('demo-cafe-aurora-web3.appspot.com').file(caminho).save(imagem,{contentType:'image/webp'});
 await banco.doc('produtos/cafe-coado').create({nome:'Café coado',descricao:'Café preparado para conferir a retomada.',imagemCaminho:caminho});
}
if(fase==='conferir') {
 const produto=(await banco.doc('produtos/cafe-coado').get()).data();
 assert.equal(produto.imagemCaminho,caminho,'o produto deve conservar a referência');
 assert.equal(produto.descricao,'Café preparado para conferir a retomada.');
 const [restaurada]=await getStorage(app).bucket('demo-cafe-aurora-web3.appspot.com').file(caminho).download();
 assert.deepEqual(restaurada,imagem,'a imagem precisa voltar com os mesmos bytes');
}
await banco.terminate();await deleteApp(app);
console.log(`PASSOU retomada ${fase}: dados fictícios, identidade e serviços locais conferidos.`);
