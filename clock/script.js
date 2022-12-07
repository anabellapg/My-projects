
const segundero=document.querySelector('#second');
const minutero=document.querySelector('#min');
const horero=document.querySelector('#hour');


function setDegrees(){
    /*extraigo la hora*/
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();

    /*los transformo en degs, pensando que a un segundo/minuto 
    le corresponden 6 grados, pero a una hora le corresponden 30*/

    /*sumamos 90 para compensar la rotacion del default*/

    const seconds_degrees=seconds*6+90;
    const minutes_degrees=minutes*6+90;
    const hours_degrees=hours*30+90;

    segundero.style.transform=`rotate(${seconds_degrees}deg)`;
    minutero.style.transform=`rotate(${minutes_degrees}deg)`;
    horero.style.transform=`rotate(${hours_degrees}deg)`;
}

setInterval(setDegrees,1000);
/*la funcion setDate se 
ejecutara cada 1000ms=1s*/