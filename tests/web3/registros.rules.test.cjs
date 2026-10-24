const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {initializeTestEnvironment,assertSucceeds,assertFails}=require('@firebase/rules-unit-testing');
const {doc,setDoc,getDoc,serverTimestamp}=require('firebase/firestore');
let env;
test.before(async()=>{env=await initializeTestEnvironment({projectId:'demo-mbb-web3',firestore:{host:'127.0.0.1',port:8080,rules:fs.readFileSync('meu-mbb/firestore.rules','utf8')}})});
test.after(async()=>{await env.cleanup()});
test('aulas e unidade TypeScript aceitam notas, favorito, conclusão e retomada sem campo novo',async()=>{
  const db=env.authenticatedContext('aluno-a',{email:'a@example.test',email_verified:true}).firestore();
  for(const [id,ancora]of [['web3-comum-balcao','balcao-consulta'],['web3-comum-fonte','mudar-uma-vez'],['web3-typescript-essencial','ts-imports-titulo']]){
    const ref=doc(db,'meuMbb','aluno-a','registros',id);
    await assertSucceeds(setDoc(ref,{conteudoId:id,versaoVista:1,atualizadoEm:serverTimestamp(),ultimoAcesso:serverTimestamp(),ancora,notas:['Minha verificação'],favorito:true}));
    await assertSucceeds(setDoc(ref,{concluido:true,atualizadoEm:serverTimestamp()},{merge:true}));
    const saved=(await getDoc(ref)).data();
    assert.equal(saved.favorito,true);assert.equal(saved.concluido,true);assert.equal(saved.ancora,ancora);assert.deepEqual(saved.notas,['Minha verificação']);
    const other=env.authenticatedContext('aluno-b',{email:'b@example.test',email_verified:true}).firestore();
    await assertFails(getDoc(doc(other,'meuMbb','aluno-a','registros',id)));
  }
});
