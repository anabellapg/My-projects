const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('input');
const fullscreen = player.querySelector('.fullscreen');

function Play(){
    video[video.paused?'play':'pause']();
}

function updateButton(){
    toggle.textContent =this.paused ? '►' : '❚ ❚';
}

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip);
}

function rangeUpdate(){
    video[this.name]=this.value;
}

function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub(ev){
    const scrubTime=(ev.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;
}

let isFullScreen = false;
function toggleFullScreen() {
    isFullScreen? document.exitFullscreen(): player.requestFullscreen();
    player.classList.toggle('fullscreen');
    isFullScreen = !isFullScreen;
}

video.addEventListener('click',Play)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)

toggle.addEventListener('click', Play);

skipButtons.forEach(button=>button.addEventListener('click', skip));
ranges.forEach(range=>range.addEventListener('mousemove',rangeUpdate));
ranges.forEach(range=>range.addEventListener('change', rangeUpdate));

let mousedown=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (ev) => mousedown && scrub(ev));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullScreen);
