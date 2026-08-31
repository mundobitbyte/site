(() => {
  'use strict';

  const back=document.querySelector('[data-module-back]');
  const course=document.querySelector('#courseView');
  if(!back||!course)return;

  function syncBack(){
    const inCourse=!course.hidden;
    back.textContent=inCourse?'← Séries':'← Mundo bit Byte';
    back.href=inCourse?'index.html':'../index.html';
    back.setAttribute('aria-label',inCourse?'Voltar para as séries':'Voltar ao Mundo bit Byte');
  }

  syncBack();
  new MutationObserver(syncBack).observe(course,{attributes:true,attributeFilter:['hidden']});
})();
