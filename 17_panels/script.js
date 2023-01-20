const slider=document.querySelector('.items');
let isDown=false;
let startX;
let scrollLeft;

function handleDown(ev) {
  isDown = true;
  slider.classList.add('active');
  startX = ev.pageX;
  scrollLeft = slider.scrollLeft;
}

function handleUp() {
  isDown = false;
  slider.classList.remove('active');
}

function handleLeave() {
  isDown = false;
  slider.classList.remove('active');
}

function handleMove(ev) {
  if (!isDown) return;
  ev.preventDefault(); /*esto es para que el navegador no haga cosas por defecto, como subrayar texto*/

  const x = ev.pageX;
  const walk = (x - startX) * 3; //multiplicamos por 3 para que se mueva más
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleDown);
slider.addEventListener('mouseup', handleUp);
slider.addEventListener('mouseleave', handleLeave);
slider.addEventListener('mousemove',handleMove);


