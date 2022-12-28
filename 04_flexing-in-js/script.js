const panels=document.querySelectorAll('.panel');

function Open(){
    this.classList.toggle('open');
    /*.toggle sirve para poner y quitar una clase (en este caso,
        la clase es open) */
}

function Active(){
    this.classList.toggle('open-active');
}


panels.forEach(panel => panel.addEventListener('click', Open));
/*que el toggle se active cuando click*/

panels.forEach(panel => panel.addEventListener('transitionend', Active));
/*que cuando termine de realizarse la transición (en este caso, cuando
    termine de ponerse más grande el flex) los p adquieran la clase
    open-active*/


/*aquí estamos usando .toggle mientras que en el yuh-generator usamos .add y .remove. ¿Por qué?
Pues porque en el day1 necesitábamos que la transición creada por la clase nueva desapareciera
automáticamente, aquí no se irá hasta que el evento click no vuelva a suceder*/
