import { before,after,test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { initializeTestEnvironment,assertSucceeds,assertFails } from '@firebase/rules-unit-testing';
import { doc,setDoc,getDoc,deleteDoc } from 'firebase/firestore';
import { ref,uploadBytes,deleteObject } from 'firebase/storage';
let ambiente;
const dados={nomeNegocio:'Café Aurora',pedidosAbertos:true,tempoEstimado:30};
before(async()=>{ambiente=await initializeTestEnvironment({projectId:'demo-cafe-aurora-web3',firestore:{rules:await readFile('firestore.rules','utf8')},storage:{rules:await readFile('storage.rules','utf8')}});await ambiente.withSecurityRulesDisabled(c=>setDoc(doc(c.firestore(),'atendimento/atual'),dados));});
after(async()=>{await ambiente?.cleanup();});
test('visitante consulta, mas não escreve; identidade sem papel não autoriza',async()=>{
 const anon=ambiente.unauthenticatedContext().firestore();const leitor=ambiente.authenticatedContext('leitor',{operador:false}).firestore();
 await assertSucceeds(getDoc(doc(anon,'atendimento/atual')));
 for(const b of [anon,leitor])await assertFails(setDoc(doc(b,'atendimento/atual'),dados));
});
test('operador grava somente contrato válido e não apaga atendimento',async()=>{
 const b=ambiente.authenticatedContext('operador',{operador:true}).firestore();const r=doc(b,'atendimento/atual');
 for(const prazo of [null,0,240])await assertSucceeds(setDoc(r,{...dados,tempoEstimado:prazo}));
 for(const prazo of [-1,241,'30'])await assertFails(setDoc(r,{...dados,tempoEstimado:prazo}));
 await assertFails(setDoc(r,{...dados,nomeNegocio:'   '}));await assertFails(setDoc(r,{...dados,segredo:'extra'}));await assertFails(deleteDoc(r));
 await assertFails(getDoc(doc(b,'historico/qualquer')));
});
test('inscrição é escrita pelo dono, nunca listada pelo cliente',async()=>{
 const eu=ambiente.authenticatedContext('eu').firestore();const outro=ambiente.authenticatedContext('outro').firestore();
 await assertSucceeds(setDoc(doc(eu,'inscricoes/eu'),{token:'token-ficticio'}));
 await assertFails(getDoc(doc(eu,'inscricoes/eu')));await assertFails(setDoc(doc(outro,'inscricoes/eu'),{token:'troca'}));
 await assertSucceeds(deleteDoc(doc(eu,'inscricoes/eu')));
});
test('produto só aceita descrição revisada válida e caminho de imagem do operador',async()=>{
 const op=ambiente.authenticatedContext('editor',{operador:true}).firestore();const leitor=ambiente.authenticatedContext('leitor',{operador:false}).firestore();
 const produto={nome:'Café coado',descricao:'Café preparado na hora.',imagemCaminho:'imagens/editor/foto01'};
 await assertSucceeds(setDoc(doc(op,'produtos/cafe-coado'),produto));
 await assertFails(setDoc(doc(leitor,'produtos/cafe-coado'),produto));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,descricao:'curta'}));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,descricao:' '.repeat(15)}));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,nome:'   '}));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,descricao:'x'.repeat(401)}));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,imagemCaminho:'imagens/outro/foto01'}));
 await assertFails(setDoc(doc(op,'produtos/cafe-coado'),{...produto,rascunho:'Não é público.'}));
 await assertSucceeds(getDoc(doc(ambiente.unauthenticatedContext().firestore(),'produtos/cafe-coado')));
});
test('imagem exige operador, dono, formato e limite; sobrescrita é recusada',async()=>{
 const op=ambiente.authenticatedContext('op',{operador:true}).storage();const anon=ambiente.unauthenticatedContext().storage();
 const bytes=new Uint8Array([137,80,78,71]);
 await assertSucceeds(uploadBytes(ref(op,'imagens/op/foto'),bytes,{contentType:'image/png'}));
 await assertFails(uploadBytes(ref(op,'imagens/op/foto'),bytes,{contentType:'image/png'}));
 await assertFails(uploadBytes(ref(anon,'imagens/op/anon'),bytes,{contentType:'image/png'}));
 await assertFails(uploadBytes(ref(op,'imagens/outro/foto'),bytes,{contentType:'image/png'}));
 await assertFails(uploadBytes(ref(op,'imagens/op/texto'),bytes,{contentType:'text/html'}));
 await assertFails(uploadBytes(ref(op,'imagens/op/grande'),new Uint8Array(2*1024*1024+1),{contentType:'image/png'}));
 await assertSucceeds(deleteObject(ref(op,'imagens/op/foto')));
});
