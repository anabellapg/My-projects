const triggers=document.querySelectorAll('li');
const background=document.querySelector('.dropdownBackground');
const nav=document.querySelector('nav');

function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  //esto simplemente añade la clase trigger-enter-active 0.15 segundos más tarde
  //lo del contains es simplemente para asegurarnos de que no estamos moviendo el ratón super rápido y causando un bug
  background.classList.add('open');

  //a partir de aquí lo que vamos a hacer es ajustar el tamaño del background al contenido
  //esto es lo mismo que hicimos en lo de taylor swift
  const dropdown=this.querySelector('.dropdown')
  const dropdownCoords=dropdown.getBoundingClientRect();

  //también tenemos que tener en cuenta dónde está el nav, por si luego lo hacemos sticky o le ponemos margen o algo
  const navCoords=nav.getBoundingClientRect();

  background.style.setProperty('width', `${dropdownCoords.width}px`);
  background.style.setProperty('height', `${dropdownCoords.height}px`);
  background.style.setProperty('transform', `translate(${dropdownCoords.left-navCoords.left}px, ${dropdownCoords.top-navCoords.top}px)`);
}

function handleLeave(){
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


