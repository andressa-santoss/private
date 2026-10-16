/* Controle do carrossel */
window.addEventListener('load', () => {
  const track = document.querySelector('.work-track');
  const original = track.querySelector('.work-group');

  const VELOCIDADE = 60; 

  const largura = original.offsetWidth;
  const copiasPorMetade = Math.ceil(window.innerWidth / largura) + 1;

  for (let i = 1; i < copiasPorMetade * 2; i++) {
    const copia = original.cloneNode(true);
    copia.setAttribute('aria-hidden', 'true');
    copia.querySelectorAll('img').forEach(img => img.alt = '');
    track.appendChild(copia);
  }

  const distancia = largura * copiasPorMetade;
  track.style.animationDuration = (distancia / VELOCIDADE) + 's';
});