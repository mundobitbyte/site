const steps = [
  {
    id: 'diagnostico',
    menu: '00 Avaliação Diagnóstica',
    title: 'Antes de começar: o que você já sabe?',
    technical: 'Avaliação Diagnóstica',
    objective: 'Identificar apenas os conhecimentos básicos que podem fazer falta nos primeiros conteúdos da 1ª série.',
    available: true,
    content: `
      <div class="hero-box">
        <h3>Descubra o que precisa revisar</h3>
        <p>Faça o teste sem consultar respostas. Se alguma questão estiver difícil, o resultado indicará o assunto que vale revisar antes de seguir.</p>
      </div>

      <div class="concept-box">
        <strong>Não é uma prova para nota.</strong> O objetivo é descobrir quais conhecimentos já estão firmes e quais precisam de uma revisão curta.
      </div>

      <div class="quiz" id="diagnosticQuiz">
        <div class="quiz-item" data-area="Números e operações" data-answer="b">
          <p>1. Quanto vale −6 + 14?</p>
          <label><input type="radio" name="q1" value="a"> −20</label>
          <label><input type="radio" name="q1" value="b"> 8</label>
          <label><input type="radio" name="q1" value="c"> −8</label>
        </div>

        <div class="quiz-item" data-area="Frações" data-answer="c">
          <p>2. Qual fração representa a mesma quantidade que 1/2?</p>
          <label><input type="radio" name="q2" value="a"> 1/4</label>
          <label><input type="radio" name="q2" value="b"> 2/3</label>
          <label><input type="radio" name="q2" value="c"> 2/4</label>
        </div>

        <div class="quiz-item" data-area="Porcentagem" data-answer="b">
          <p>3. Quanto é 20% de R$ 150?</p>
          <label><input type="radio" name="q3" value="a"> R$ 20</label>
          <label><input type="radio" name="q3" value="b"> R$ 30</label>
          <label><input type="radio" name="q3" value="c"> R$ 50</label>
        </div>

        <div class="quiz-item" data-area="Razão e proporção" data-answer="a">
          <p>4. Se 3 cadernos custam R$ 24, quanto custam 6 cadernos pelo mesmo preço unitário?</p>
          <label><input type="radio" name="q4" value="a"> R$ 48</label>
          <label><input type="radio" name="q4" value="b"> R$ 27</label>
          <label><input type="radio" name="q4" value="c"> R$ 72</label>
        </div>

        <div class="quiz-item" data-area="Álgebra" data-answer="c">
          <p>5. Se x = 4, quanto vale 3x + 2?</p>
          <label><input type="radio" name="q5" value="a"> 9</label>
          <label><input type="radio" name="q5" value="b"> 12</label>
          <label><input type="radio" name="q5" value="c"> 14</label>
        </div>

        <div class="quiz-item" data-area="Equação do 1º grau" data-answer="b">
          <p>6. Qual valor de x torna verdadeira a igualdade x + 7 = 12?</p>
          <label><input type="radio" name="q6" value="a"> 19</label>
          <label><input type="radio" name="q6" value="b"> 5</label>
          <label><input type="radio" name="q6" value="c"> 7</label>
        </div>

        <div class="quiz-item" data-area="Plano cartesiano" data-answer="a">
          <p>7. No ponto (3, 2), qual é o valor da coordenada x?</p>
          <label><input type="radio" name="q7" value="a"> 3</label>
          <label><input type="radio" name="q7" value="b"> 2</label>
          <label><input type="radio" name="q7" value="c"> 5</label>
        </div>

        <div class="quiz-item" data-area="Leitura de dados" data-answer="c">
          <p>8. Uma tabela mostra: segunda 12 vendas, terça 18, quarta 15. Em qual dia houve mais vendas?</p>
          <label><input type="radio" name="q8" value="a"> Segunda</label>
          <label><input type="radio" name="q8" value="b"> Quarta</label>
          <label><input type="radio" name="q8" value="c"> Terça</label>
        </div>

        <div class="quiz-item" data-area="Unidades de medida" data-answer="b">
          <p>9. Quantos metros há em 2,5 km?</p>
          <label><input type="radio" name="q9" value="a"> 250 m</label>
          <label><input type="radio" name="q9" value="b"> 2.500 m</label>
          <label><input type="radio" name="q9" value="c"> 25.000 m</label>
        </div>

        <div class="quiz-item" data-area="Geometria básica" data-answer="a">
          <p>10. Qual figura tem três lados?</p>
          <label><input type="radio" name="q10" value="a"> Triângulo</label>
          <label><input type="radio" name="q10" value="b"> Quadrado</label>
          <label><input type="radio" name="q10" value="c"> Pentágono</label>
        </div>

        <div class="quiz-actions">
          <button class="primary" type="button" id="checkDiagnostic">Ver resultado</button>
          <button type="button" id="resetDiagnostic">Refazer</button>
        </div>
        <div class="quiz-result" id="diagnosticResult" aria-live="polite"></div>
      </div>

      <h3>Revisão mínima</h3>
      <div class="two-col">
        <div class="mini-card"><strong>Números e operações</strong>Relembre sinais, quatro operações, frações e decimais.</div>
        <div class="mini-card"><strong>Razão e porcentagem</strong>Relembre comparação entre grandezas, proporções simples e porcentagens básicas.</div>
        <div class="mini-card"><strong>Álgebra</strong>Relembre o uso de letras, substituição de valores e equações simples.</div>
        <div class="mini-card"><strong>Gráficos e medidas</strong>Relembre plano cartesiano, leitura de tabelas, unidades e formas geométricas básicas.</div>
      </div>
    `
  },
  {
    id: 'variacao',
    menu: '01 Quando duas coisas mudam juntas',
    title: 'Quando duas coisas mudam juntas',
    technical: 'Variação entre grandezas — proporcionalidade e não proporcionalidade',
    objective: 'Perceber como duas grandezas podem variar juntas e distinguir uma relação proporcional de uma relação que não é proporcional.',
    available: true,
    content: `
      <div class="hero-box">
        <h3>Comece por uma situação simples</h3>
        <p>Uma caneta custa R$ 7. Se todas custarem o mesmo preço, comprar mais canetas aumenta o valor total de um jeito previsível.</p>
      </div>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Quantidade de canetas</th><th>Valor total</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>R$ 7</td></tr>
            <tr><td>2</td><td>R$ 14</td></tr>
            <tr><td>3</td><td>R$ 21</td></tr>
            <tr><td>4</td><td>R$ 28</td></tr>
          </tbody>
        </table>
      </div>

      <div class="concept-box">
        <strong>O que está acontecendo?</strong> Quando a quantidade dobra, o valor total também dobra. Quando a quantidade triplica, o total também triplica. As duas grandezas mantêm a mesma razão.
      </div>

      <div class="visual-box">
        <h4>Veja a relação no gráfico</h4>
        <svg class="math-graph" viewBox="0 0 560 270" role="img" aria-label="Gráfico em linha reta mostrando quantidade de canetas e valor total, começando na origem">
          <line class="graph-grid" x1="70" y1="210" x2="510" y2="210"/><line class="graph-grid" x1="70" y1="165" x2="510" y2="165"/><line class="graph-grid" x1="70" y1="120" x2="510" y2="120"/><line class="graph-grid" x1="70" y1="75" x2="510" y2="75"/>
          <line class="graph-axis" x1="70" y1="230" x2="510" y2="230"/><line class="graph-axis" x1="70" y1="230" x2="70" y2="35"/>
          <polyline class="graph-line" points="70,230 170,185 270,140 370,95 470,50"/>
          <circle class="graph-point" cx="170" cy="185" r="5"/><circle class="graph-point" cx="270" cy="140" r="5"/><circle class="graph-point" cx="370" cy="95" r="5"/><circle class="graph-point" cx="470" cy="50" r="5"/>
          <text x="485" y="250" font-size="13">quantidade</text><text x="18" y="42" font-size="13">valor</text>
        </svg>
        <p>A reta passa pela origem: com zero canetas, o valor total é zero.</p>
      </div>

      <h3>Agora compare com outra situação</h3>
      <p>Um estacionamento cobra R$ 10 para entrar e mais R$ 5 por hora.</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tempo</th><th>Valor</th></tr></thead>
          <tbody>
            <tr><td>0 h</td><td>R$ 10</td></tr>
            <tr><td>1 h</td><td>R$ 15</td></tr>
            <tr><td>2 h</td><td>R$ 20</td></tr>
            <tr><td>3 h</td><td>R$ 25</td></tr>
          </tbody>
        </table>
      </div>

      <div class="concept-box">
        <strong>Também há uma relação, mas ela não é proporcional.</strong> O preço aumenta R$ 5 por hora, porém existe um valor inicial de R$ 10. Dobrar o número de horas não faz o preço simplesmente dobrar.
      </div>

      <h3>Dê nome às ideias</h3>
      <div class="two-col">
        <div class="mini-card"><strong>Grandeza</strong>Algo que pode ser medido ou contado, como tempo, distância, quantidade, preço ou massa.</div>
        <div class="mini-card"><strong>Variação</strong>A mudança no valor de uma grandeza.</div>
        <div class="mini-card"><strong>Proporcionalidade</strong>Duas grandezas variam mantendo a mesma razão.</div>
        <div class="mini-card"><strong>Não proporcional</strong>As grandezas estão relacionadas, mas não mantêm uma razão constante.</div>
      </div>

      <div class="task-box">
        <h4>Tente você</h4>
        <p>Uma copiadora cobra R$ 0,40 por folha, sem taxa inicial. O valor pago e a quantidade de folhas são proporcionais? Explique usando um exemplo com 10 e 20 folhas.</p>
      </div>

      <div class="ok-box">
        <strong>Essência:</strong> antes de procurar uma fórmula, observe como as grandezas mudam. A tabela e o gráfico ajudam a enxergar se existe proporcionalidade e qual é o padrão da variação.
      </div>
    `
  },
  { id:'algebra', menu:'02 Como transformar um padrão em regra', title:'Como transformar um padrão em uma regra', technical:'Linguagem algébrica — fórmulas e generalização', objective:'', available:false },
  { id:'funcao1', menu:'03 Quando o valor cresce no mesmo ritmo', title:'Quando o valor cresce sempre no mesmo ritmo', technical:'Funções afins, lineares, constantes e identidade', objective:'', available:false },
  { id:'reta', menu:'04 Quanto a reta sobe ou desce?', title:'Quanto a reta sobe ou desce?', technical:'Gráfico do 1º grau, taxa de variação e coeficiente angular', objective:'', available:false },
  { id:'partes', menu:'05 Uma regra para cada situação', title:'Uma regra para cada situação', technical:'Funções definidas por partes', objective:'', available:false },
  { id:'quadratica', menu:'06 Quando o crescimento deixa de ser linear', title:'Quando o crescimento deixa de ser linear', technical:'Função quadrática', objective:'', available:false },
  { id:'parabola', menu:'07 O que a parábola mostra', title:'O que a parábola mostra', technical:'Gráfico e propriedades da função quadrática', objective:'', available:false },
  { id:'quadrado', menu:'08 Quando uma grandeza depende do quadrado', title:'Quando uma grandeza depende do quadrado da outra', technical:'Relação y = ax²', objective:'', available:false },
  { id:'transformacoes', menu:'09 O que muda quando mexemos no gráfico?', title:'O que muda quando mexemos no gráfico?', technical:'Análise e transformação de gráficos', objective:'', available:false },
  { id:'pa', menu:'10 Padrões que avançam passo a passo', title:'Padrões que avançam passo a passo', technical:'Sequências e Progressão Aritmética', objective:'', available:false },
  { id:'tangente', menu:'11 Como medir uma inclinação', title:'Como medir uma inclinação', technical:'Tangente de um ângulo', objective:'', available:false },
  { id:'porcentagem', menu:'12 Quanto é de cada 100?', title:'Quanto é de cada 100?', technical:'Porcentagem, índices, taxas e coeficientes', objective:'', available:false },
  { id:'grandezas', menu:'13 Quando duas medidas formam uma nova grandeza', title:'Quando duas medidas formam uma nova grandeza', technical:'Razões, produtos e unidades compostas', objective:'', available:false },
  { id:'ladrilhamento', menu:'14 Que formas cobrem uma superfície?', title:'Que formas conseguem cobrir uma superfície?', technical:'Ladrilhamento do plano e polígonos', objective:'', available:false },
  { id:'dados', menu:'15 O que os dados mostram?', title:'O que os dados mostram?', technical:'Tabelas, frequências e relação entre variáveis', objective:'', available:false },
  {
    id:'exercicios',
    menu:'99 Exercícios',
    title:'Pratique quanto precisar',
    technical:'99. Exercícios',
    objective:'Gerar novas situações para praticar o conteúdo já disponível.',
    available:true,
    content:`
      <div class="hero-box">
        <h3>Exercícios de variação e proporcionalidade</h3>
        <p>As questões abaixo são geradas a partir de modelos matemáticos verificados. Os valores mudam, mas o raciocínio continua sendo o que você estudou.</p>
      </div>
      <div class="exercise-panel">
        <div class="exercise-question" id="exerciseQuestion"></div>
        <div class="exercise-actions">
          <button class="primary" type="button" id="newExercise">Novo exercício</button>
          <button type="button" id="showExerciseAnswer">Ver resposta</button>
        </div>
        <div class="exercise-answer" id="exerciseAnswer" aria-live="polite"></div>
      </div>
    `
  }
];

const seriesHome = document.getElementById('seriesHome');
const courseView = document.getElementById('courseView');
const menu = document.getElementById('menu');
const lesson = document.getElementById('lesson');
const stepTitle = document.getElementById('stepTitle');
const technicalTitle = document.getElementById('technicalTitle');
const objective = document.getElementById('objective');
let currentStep = 'diagnostico';

function buildMenu(){
  menu.querySelectorAll('.nav-btn').forEach(el => el.remove());
  steps.forEach(step => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-btn';
    button.textContent = step.menu;
    button.dataset.step = step.id;
    if(!step.available){
      button.disabled = true;
      button.title = 'Conteúdo ainda não liberado nesta versão';
    } else {
      button.addEventListener('click', () => showStep(step.id));
    }
    menu.appendChild(button);
  });
}

function showStep(id){
  const step = steps.find(item => item.id === id && item.available);
  if(!step) return;
  currentStep = id;
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.step === id));
  technicalTitle.textContent = step.technical || '';
  stepTitle.textContent = step.title;
  objective.textContent = step.objective || '';
  lesson.innerHTML = step.content || '';
  lesson.scrollTop = 0;
  bindStepEvents(id);
}

function enterCourse(){
  seriesHome.hidden = true;
  courseView.hidden = false;
  buildMenu();
  showStep(currentStep);
}

function leaveCourse(){
  courseView.hidden = true;
  seriesHome.hidden = false;
  window.scrollTo({top:0, behavior:'smooth'});
}

document.querySelector('[data-series="1"]').addEventListener('click', enterCourse);
document.getElementById('backToSeries').addEventListener('click', leaveCourse);

function bindStepEvents(id){
  if(id === 'diagnostico') bindDiagnostic();
  if(id === 'exercicios') bindExerciseGenerator();
}

function bindDiagnostic(){
  const quiz = document.getElementById('diagnosticQuiz');
  const result = document.getElementById('diagnosticResult');
  const checkButton = document.getElementById('checkDiagnostic');
  const resetButton = document.getElementById('resetDiagnostic');
  if(!quiz || !result || !checkButton || !resetButton) return;

  checkButton.addEventListener('click', () => {
    const items = [...quiz.querySelectorAll('.quiz-item')];
    let correct = 0;
    const review = [];
    let unanswered = 0;

    items.forEach(item => {
      const selected = item.querySelector('input:checked');
      if(!selected){
        unanswered++;
        review.push(item.dataset.area);
        return;
      }
      if(selected.value === item.dataset.answer){
        correct++;
      } else {
        review.push(item.dataset.area);
      }
    });

    const uniqueReview = [...new Set(review)];
    let html = `<div class="${correct >= 8 && unanswered === 0 ? 'ok-box' : 'note-box'}"><strong>Resultado: ${correct} de ${items.length}.</strong>`;
    if(unanswered) html += ` Você deixou ${unanswered} questão(ões) sem resposta.`;
    if(uniqueReview.length === 0){
      html += ` Os fundamentos verificados estão firmes. Você pode seguir para o primeiro conteúdo.`;
    } else {
      html += ` Vale revisar: ${uniqueReview.join(', ')}.`;
    }
    html += `</div>`;
    result.innerHTML = html;
  });

  resetButton.addEventListener('click', () => {
    quiz.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    result.innerHTML = '';
    lesson.scrollTop = 0;
  });
}

let exerciseState = null;

function bindExerciseGenerator(){
  const newButton = document.getElementById('newExercise');
  const answerButton = document.getElementById('showExerciseAnswer');
  if(!newButton || !answerButton) return;
  newButton.addEventListener('click', generateExercise);
  answerButton.addEventListener('click', showExerciseAnswer);
  generateExercise();
}

function money(value){
  return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}

function getHistory(){
  try{return JSON.parse(localStorage.getItem('mbbMathExerciseHistory') || '[]')}catch{return []}
}

function saveHistory(history){
  localStorage.setItem('mbbMathExerciseHistory', JSON.stringify(history.slice(-40)));
}

function generateExercise(){
  const templates = [
    () => {
      const unit = [3,4,5,6,7,8,9][Math.floor(Math.random()*7)];
      const qty = [2,3,4,5,6,8,10][Math.floor(Math.random()*7)];
      const key = `p-${unit}-${qty}`;
      return {key, q:`Cada ingresso custa ${money(unit)}. Quanto custam ${qty} ingressos? A relação entre quantidade e valor é proporcional?`, a:`${qty} × ${money(unit)} = ${money(qty*unit)}. Sim. Sem taxa inicial e com preço unitário constante, quantidade e valor são proporcionais.`};
    },
    () => {
      const fixed = [6,8,10,12][Math.floor(Math.random()*4)];
      const rate = [3,4,5,6][Math.floor(Math.random()*4)];
      const hours = [2,3,4,5][Math.floor(Math.random()*4)];
      const key = `n-${fixed}-${rate}-${hours}`;
      return {key, q:`Um serviço cobra ${money(fixed)} de taxa inicial e ${money(rate)} por hora. Quanto custa usar o serviço por ${hours} horas? Essa relação é proporcional?`, a:`${money(fixed)} + ${hours} × ${money(rate)} = ${money(fixed + hours*rate)}. Não é proporcional porque existe uma taxa inicial diferente de zero.`};
    },
    () => {
      const speed = [40,50,60,70,80][Math.floor(Math.random()*5)];
      const time = [2,3,4][Math.floor(Math.random()*3)];
      const key = `v-${speed}-${time}`;
      return {key, q:`Um veículo mantém velocidade constante de ${speed} km/h durante ${time} horas. Qual distância percorre? Nesse modelo simples, distância e tempo são proporcionais?`, a:`${speed} × ${time} = ${speed*time} km. Sim, mantendo a velocidade constante e partindo do instante zero, a distância cresce na mesma proporção do tempo.`};
    }
  ];

  let item;
  const history = getHistory();
  for(let i=0;i<20;i++){
    item = templates[Math.floor(Math.random()*templates.length)]();
    if(!history.includes(item.key)) break;
  }
  history.push(item.key);
  saveHistory(history);
  exerciseState = item;
  document.getElementById('exerciseQuestion').textContent = item.q;
  document.getElementById('exerciseAnswer').innerHTML = '';
}

function showExerciseAnswer(){
  if(!exerciseState) return;
  document.getElementById('exerciseAnswer').innerHTML = `<div class="ok-box"><strong>Resposta:</strong> ${exerciseState.a}</div>`;
}
