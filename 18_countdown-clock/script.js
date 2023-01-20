let countdown;
const timerDisplay = document.querySelector('h1');
const endTime = document.querySelector('p');
const buttons = document.querySelectorAll('button');

function timer(seconds){
  clearInterval(countdown); //esto evita bugs de superposición de countdowns

  const now=Date.now();
  const then=now+seconds*1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown=setInterval(()=>{
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft<0){
      clearInterval(countdown);
      /*clearInterval cancela la acción reiterativa del setInterval (es como un return)*/
      return;
    }
  displayTimeLeft(secondsLeft);
  },1000);
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;

  timerDisplay.textContent=display;
}

function displayEndTime(timestamp){
  const end=new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `See you at ${hour}:${minutes < 10 ? '0' : ''}${minutes}!`;
}

function startTimer(){
  const seconds=parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button=>button.addEventListener('click',startTimer));

//si una etiqueta html tiene una etiqueta name (como es el caso del formulario),
//podemos llamarla directamente como a continuación:
document.customForm.addEventListener('submit', function (ev){
  ev.preventDefault();
  const mins=this.minutes.value;
  timer(mins*60);
  this.reset;
})

