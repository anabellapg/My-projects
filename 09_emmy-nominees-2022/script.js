const sliderImages=document.querySelectorAll('.slide-in');


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

/*esta función debounce existe para que checkSlide no se dispare 100 veces,
porque esto podría darnos fallos de performance,
sino que en este caso sólo se activará cada (wait=20) milisegundos.

Normalmente este tipo de funciones están disponibles en el framework con
el que trabajemos*/

function checkSlide(ev){
    sliderImages.forEach(sliderImage=>{
        const slideInAt=(window.scrollY+window.innerHeight-sliderImage.height/2);
        /*scrollY te dice cuántos px has scrolleado en la página
        innerHeight es la altura de la pag (según el tamaño de tu pantalla).
        Hacemos esto para colocar el eje de coordenadas (por así decirlo)
        en lo más abajo de la pantalla
        
        Y luego a eso le restas la altura de la imagen partido por dos,
        porque queremos que el slide suceda cuando hemos scrolleado hasta
        el punto en que se vea la mitad de la imagen en cuestión*/
        
        const imageBottom=sliderImage.offsetTop+sliderImage.height;
        /*ahora localizamos el punto en que acaba la imagen */

        const isHalfShown=slideInAt>sliderImage.offsetTop;
        const isNotScrolledPast=window.scrollY<imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');   
        } else{
            sliderImage.classList.remove('active'); 
        }
    })
}

window.addEventListener('scroll',debounce(checkSlide))

