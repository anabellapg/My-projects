const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('select');
const options = document.querySelectorAll('input, textarea');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('textarea').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('es'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  //el contenido de voices realmente es un objeto con muchas propiedades
  //y el contenido del this es todo el html del select
  toggle();
}

function toggle(startOver = true) {
  //esto es para que si cambiamos la voz en medio de una frase, esa frase se corte
  /*por defecto, empezará de nuevo con la nueva voz, a menos que pasemos un startOver=false
  (es decir, habiendo pulsado el boton stop)*/
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
/*poblamos el select (que hemos llamado voicesDropdown) con el contenido del speechSynthesis filtrado*/
/*al parecer el voiceschanged se dispara cada vez que cargamos la pagina*/

voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
/*cuando setOption se activa, se actualiza el valor del mensaje y se hace un startOver*/
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

