import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const file = path.join(root, 'js/git-core-canonico.js');
let source = await fs.readFile(file, 'utf8');

const start = source.indexOf('function lessonFooter(id){');
const end = source.indexOf('\n\nwindow.setModule = setModule;', start);
if (start < 0 || end < 0) throw new Error('Não foi possível localizar lessonFooter no core canônico.');

const replacement = `function lessonFooter(id){
  const index = activeSteps.findIndex(item => String(item.id) === String(id));
  const prev = activeSteps[index - 1];
  const next = activeSteps[index + 1];
  const lastLabel = activeModule === 'git' ? 'Parte Git concluída' : activeModule === 'github' ? 'GitHub concluído' : 'Exercícios concluídos';
  return \`
    <div class="lesson-footer">
      <button type="button" \${prev ? \`data-step-nav="\${prev.id}"\` : 'disabled'}>← Anterior</button>
      <button type="button" \${next ? \`data-step-nav="\${next.id}"\` : 'disabled'}>\${next ? 'Próxima →' : lastLabel}</button>
    </div>\`;
}

lesson.addEventListener('click', event => {
  const button = event.target.closest('[data-step-nav]');
  if (!button) return;
  showStep(button.dataset.stepNav);
});`;

source = source.slice(0, start) + replacement + source.slice(end);
await fs.writeFile(file, source, 'utf8');
console.log('Rodapé canônico convertido para navegação por data-step-nav.');
