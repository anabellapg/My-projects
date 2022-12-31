const content=document.querySelector('.content');
const text=content.querySelector('h1');
const walk=500;

function shadow(ev){
    const [width,height]=[content.offsetWidth,content.offsetHeight];
    let [x,y]=[ev.offsetX,ev.offsetY];

    if(this!==ev.target){
        x=x+ev.target.offsetLeft;
        y=y+ev.target.offsetTop;
    }

    const xWalk=Math.round((x/width*walk)-(walk/2));
    const yWalk=Math.round((y/height*walk)-(walk/2));

    text.style.textShadow=`${xWalk}px ${yWalk}px 0 red,
    ${-xWalk}px ${-yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
    ${-yWalk}px ${xWalk}px 0 rgba(0,0,255,0.7)`;
}



content.addEventListener('mousemove',shadow)