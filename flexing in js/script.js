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

/*en la versión original de este ejercicio, el chico
hacía que el font también cambiara de tamaño el font. Pero
no he conseguido replicarlo; hay muchas cosas de su código que
no termino de entender así que he dejado esto así*/


/*aquí estamos usando .toggle mientras que en el day1 usamos .add y .remove. ¿Por qué?
Pues porque en el day1 necesitábamos que la transición creada por la clase nueva desapareciera
automáticamente, aquí no se irá hasta que el evento click no vuelva a suceder*/