const inputs=document.querySelectorAll('input');
/*el querySelectorAll devuelve una cosa llamada NodeList 
que se parece a un array, pero no lo es*/

function Update(){
    const suffix = this.dataset.medida || '';
    /*this.dataset te devuelve todos los atributos "data-" del objeto this*/

    /*ponemos || '' para el caso que trabajemos con color.
    si no lo pusieramos, tendriamos un undefined */

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    /*document.documentElement llama al html (YA ESTA. Seria mas facil que se pudiera hacer html.blablabla)*/

    /*setProperty cambia el valor de una propiedad (variable CSS)*/


}

/*el evento "change" es aplicable a la etiqueta input, y se
activa cuando el usuario cambia el valor del elemento*/
inputs.forEach(input => input.addEventListener('change', Update));
/*el evento mousemove se activa cuando el cursor está pulsado dentro
de un elemento y se mueve*/
inputs.forEach(input => input.addEventListener('mousemove', Update));