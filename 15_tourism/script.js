const nav=document.querySelector('#main');
const topOfNav=nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
    //la clase la meto en el body y no en el nav, porque así luego puedo seleccionar los li en el css 
    //dentro de la circunstancia de que el fixed-nav está activado
    document.body.style.paddingTop=nav.offsetHeight+'px';
    //esta última línea es para que el navegador no dé un saltito al pasar el "punto de inflexión"
    //es consecuencia del position:fixed
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop=0;
  }
}
window.addEventListener('scroll', fixNav)

console.log('read!')