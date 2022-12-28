const checkboxes=document.querySelectorAll('input');

let lastChecked;

function handleCheck(ev){

    let inBetween=false;
    //comprobamos si en el evento se está pulsando shift
    //(al parecer esto es una propiedad del evento click)
    //y también si el checkbox actual lo hemos clicado
    //(sin esa condición, sólo sujetando shift se marcan casillas random)

    if (ev.shiftKey){
        checkboxes.forEach(checkbox=>{
            if(checkbox===this || checkbox===lastChecked){
                inBetween=!inBetween;
                //inBetween es como una variable que se enciende con checkbox=this
                // y se apaga con checkbox=lastChecked (o al revés)
            }
            if(inBetween){
                checkbox.checked=this.checked;
            }
        })
    }
    lastChecked=this;
}

checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));