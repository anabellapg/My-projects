const canvas=document.querySelector('canvas');

const ctx=canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing=false;

let lastX=0;
let lastY=0;
let hue=0;
let direction = true;
ctx.lineWidth = 41;
//(hay que inicializarlas)

function draw(ev){
    if(!isDrawing) return;

    ctx.strokeStyle=`hsl(${hue},100%,75%)`;
    //el tercer parámetro da un color pastel muy bonito

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(ev.offsetX,ev.offsetY);
    ctx.stroke();
    [lastX, lastY] = [ev.offsetX, ev.offsetY];
    hue++;

    if (ctx.lineWidth >= 400 || ctx.lineWidth <= 40) {
        direction = !direction;
      }
    direction? ctx.lineWidth++: ctx.lineWidth--;
}
canvas.addEventListener('mousemove',draw)

canvas.addEventListener('mousedown',(ev)=>{
    isDrawing=true;
    [lastX, lastY] = [ev.offsetX, ev.offsetY];
})

canvas.addEventListener('mouseup',()=>isDrawing=false)
canvas.addEventListener('mouseout',()=>isDrawing=false)
