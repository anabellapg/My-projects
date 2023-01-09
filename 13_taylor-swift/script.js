const triggers=document.querySelectorAll('a');
const highlight=document.createElement('span');

document.body.append(highlight);
/*append añade un elemento al html; en este caso, un span vacío con la propiedad highlight*/

function highlightLink(){
  highlight.classList.add('highlight');
  const linkCoords=this.getBoundingClientRect();
  //este método nos saca un montón de cosas: height, width, top, bottom, left y right del elemento
  highlight.style.width=`${linkCoords.width}px`;
  highlight.style.height=`${linkCoords.height}px`;
  highlight.style.transform =`translate(${linkCoords.left}px, ${linkCoords.top+window.scrollY}px)`;

  //como vemos, tenemos que tener en cuenta el scroll
}

function highlightLinkOut(){
  highlight.classList.remove('highlight');
}

triggers.forEach(a=>a.addEventListener('mouseenter', highlightLink))
triggers.forEach(a=>a.addEventListener('mouseleave', highlightLinkOut))




