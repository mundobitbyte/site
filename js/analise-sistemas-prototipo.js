(()=>{
let state={diagnostico:false,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};
let perfil='atendente';
const screens={interno:document.getElementById('interno'),cliente:document.getElementById('cliente')};
const subs=[...document.querySelectorAll('.subscreen')];
const normalize=v=>v.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');
function showRole(role){
  if(role==='cliente'){screens.interno.classList.remove('active');screens.cliente.classList.add('active');renderCliente();}
  else{perfil=role;screens.cliente.classList.remove('active');screens.interno.classList.add('active');renderPermissions();renderInterno();}
  document.querySelectorAll('[data-role]').forEach(b=>b.classList.toggle('secondary',b.dataset.role!==role));
}
function renderPermissions(){
  document.getElementById('perfil-descricao').textContent=perfil==='atendente'?'Atendente abre ordens, consulta andamento e registra a decisão informada pelo cliente.':'Técnico registra diagnóstico e executa o reparo quando a regra permitir.';
  document.querySelectorAll('[data-permission]').forEach(el=>el.classList.toggle('hidden',el.dataset.permission!==perfil));
}
function go(name){subs.forEach(s=>s.classList.add('hidden'));document.getElementById(name==='home'?'interno-home':name).classList.remove('hidden');renderPermissions();renderInterno();}
function statusText(){if(state.finalizado)return 'Pronto para retirada';if(state.reparo)return 'Em reparo';if(state.aprovado)return 'Orçamento aprovado';if(state.recusado)return 'Orçamento recusado';if(state.diagnostico)return 'Aguardando aprovação';return 'Aguardando diagnóstico';}
function statusClass(){if(state.recusado)return 'status danger';if(state.finalizado||state.aprovado)return 'status ok';if(state.reparo)return 'status';return 'status warn';}
function timelineItems(){
  const items=[{t:'Ordem aberta',c:'done'}];
  if(!state.diagnostico){items.push({t:'Aguardando diagnóstico',c:'current'});return items;}
  items.push({t:'Diagnóstico registrado',c:'done'});
  if(state.recusado){items.push({t:'Orçamento recusado',c:'refused'});return items;}
  if(!state.aprovado){items.push({t:'Aguardando decisão do orçamento',c:'current'});return items;}
  items.push({t:'Orçamento aprovado',c:'done'});
  if(state.finalizado){items.push({t:'Reparo concluído',c:'done'},{t:'Liberado para retirada',c:'current'});return items;}
  if(state.reparo){items.push({t:'Reparo iniciado',c:'current'});return items;}
  items.push({t:'Reparo autorizado',c:'current'});return items;
}
function renderInterno(){
  ['home-status','order-status'].forEach(id=>{const el=document.getElementById(id);el.textContent=statusText();el.className=statusClass();});
  document.getElementById('timeline').innerHTML=timelineItems().map(item=>`<div class="step ${item.c}"><strong>${item.t}</strong></div>`).join('');
  document.getElementById('decision-audit').innerHTML=state.decididoPor?`<h3>Registro da decisão</h3><p><strong>Decisão:</strong> ${state.aprovado?'Aprovado':'Recusado'}<br><strong>Registrado por:</strong> ${state.decididoPor}<br><strong>Data/hora:</strong> ${state.decididoEm}</p>`:'';
}
function renderCliente(){
  const st=document.getElementById('cliente-status');st.textContent=statusText();st.className=statusClass();const detalhe=document.getElementById('cliente-detalhe');
  if(!state.diagnostico){detalhe.innerHTML='<p>Seu equipamento foi recebido e aguarda diagnóstico técnico.</p>';return;}
  if(state.recusado){detalhe.innerHTML='<p class="alert error">Orçamento recusado. O reparo não poderá ser iniciado.</p>';return;}
  if(!state.aprovado){detalhe.innerHTML='<p><strong>Diagnóstico:</strong> Fonte de alimentação apresenta falha e precisa ser substituída.</p><p><strong>Orçamento:</strong> R$ 280,00</p><p>O orçamento aguarda sua decisão. Neste escopo, informe sua resposta ao atendimento para que ela seja registrada na ordem.</p>';return;}
  if(state.finalizado){detalhe.innerHTML='<p class="alert success">Serviço concluído. Equipamento liberado para retirada.</p>';return;}
  if(state.reparo){detalhe.innerHTML='<p>Seu orçamento foi aprovado e o equipamento está em reparo.</p>';return;}
  detalhe.innerHTML='<p class="alert success">Orçamento aprovado. O reparo já pode ser iniciado pela assistência.</p>';
}
function showClientQuery(){document.getElementById('cliente-consulta').classList.remove('hidden');document.getElementById('cliente-resultado').classList.add('hidden');document.getElementById('consulta-msg').innerHTML='';}
function showClientResult(){document.getElementById('cliente-consulta').classList.add('hidden');document.getElementById('cliente-resultado').classList.remove('hidden');renderCliente();}
function registerDecision(approved){
  state.aprovado=approved;state.recusado=!approved;state.reparo=false;state.finalizado=false;state.decididoPor='Atendente demonstrativo';state.decididoEm=new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date());
  go('ordem');document.getElementById('ordem-msg').innerHTML=`<p class="alert ${approved?'success':'error'}">Decisão registrada com autor e data/hora: orçamento ${approved?'aprovado':'recusado'}.</p>`;
}
function challengeReady(n){return [...document.querySelectorAll(`[data-validation-field="${n}"]`)].every(el=>el.value.trim().length>0);}
function updateValidationAvailability(n){const check=document.querySelector(`[data-validation-check="${n}"]`);const ready=challengeReady(n);check.disabled=!ready;if(!ready)check.checked=false;updateValidation();}
function updateValidation(){const checks=[...document.querySelectorAll('[data-validation-check]')];const done=checks.filter(c=>c.checked&&!c.disabled).length;document.getElementById('validation-progress').textContent=`${done} de ${checks.length} desafios analisados`;checks.forEach(c=>document.querySelector(`[data-challenge="${c.dataset.validationCheck}"]`)?.classList.toggle('done',c.checked&&!c.disabled));document.getElementById('validation-summary').classList.toggle('hidden',done!==checks.length);}
document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>showRole(b.dataset.role));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
document.getElementById('criar-os').onclick=()=>{document.getElementById('nova-msg').innerHTML='<p class="alert success">OS #1043 criada e vinculada ao cliente e ao equipamento. Nesta demonstração, continuaremos usando a OS #1042 para testar o fluxo completo.</p>';};
document.getElementById('salvar-diag').onclick=()=>{state.diagnostico=true;state.aprovado=false;state.recusado=false;state.reparo=false;state.finalizado=false;state.decididoPor='';state.decididoEm='';go('ordem');document.getElementById('ordem-msg').innerHTML='<p class="alert success">Diagnóstico registrado. O orçamento aguarda decisão do cliente.</p>';};
document.getElementById('registrar-decisao').onclick=()=>{const msg=document.getElementById('ordem-msg');if(!state.diagnostico){msg.innerHTML='<p class="alert error">Primeiro é necessário existir diagnóstico e orçamento.</p>';return;}go('decisao');};
document.getElementById('aprovar').onclick=()=>registerDecision(true);document.getElementById('recusar').onclick=()=>registerDecision(false);
document.getElementById('tentar-reparo').onclick=()=>{const msg=document.getElementById('ordem-msg');if(!state.diagnostico){msg.innerHTML='<p class="alert error">Primeiro registre o diagnóstico técnico.</p>';return;}if(!state.aprovado){msg.innerHTML=`<p class="alert error">RN01 aplicada: o reparo não pode começar porque o orçamento está ${state.recusado?'recusado':'pendente de aprovação'}.</p>`;return;}state.reparo=true;go('reparo');};
document.getElementById('concluir-reparo').onclick=()=>{state.reparo=true;state.finalizado=true;go('ordem');document.getElementById('ordem-msg').innerHTML='<p class="alert success">Reparo concluído. A ordem está pronta para retirada.</p>';};
document.getElementById('consultar').onclick=()=>{const os=document.getElementById('cliente-os').value.trim(),conf=normalize(document.getElementById('cliente-confirmacao').value);if(os!=='1042'||conf!=='ana souza'){document.getElementById('consulta-msg').innerHTML='<p class="alert error">Não foi possível localizar a ordem com os dados informados.</p>';return;}showClientResult();};
document.getElementById('nova-consulta').onclick=showClientQuery;
document.getElementById('reset').onclick=()=>{state={diagnostico:false,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};document.getElementById('ordem-msg').innerHTML='';document.getElementById('nova-msg').innerHTML='';showClientQuery();showRole('atendente');go('home');};
document.querySelectorAll('[data-prepare]').forEach(button=>button.onclick=()=>{const tipo=button.dataset.prepare;if(tipo==='clarity'){showRole('cliente');showClientQuery();document.getElementById('cliente-os').value='1042';document.getElementById('cliente-confirmacao').value='';}else if(tipo==='decision'){state={diagnostico:true,aprovado:false,recusado:false,reparo:false,finalizado:false,decididoPor:'',decididoEm:''};showRole('atendente');go('decisao');}else if(tipo==='roles'){showRole('atendente');go('home');}document.querySelector('.rolebar')?.scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelectorAll('[data-validation-field]').forEach(field=>field.addEventListener('input',()=>updateValidationAvailability(field.dataset.validationField)));
document.querySelectorAll('[data-validation-check]').forEach(c=>c.addEventListener('change',updateValidation));
renderPermissions();renderInterno();['1','2','3'].forEach(updateValidationAvailability);updateValidation();
})();