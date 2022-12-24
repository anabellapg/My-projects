const endpoint = 'https://my-json-server.typicode.com/anabellapg/My-projects/songs';

const songs=[];

fetch(endpoint)
    .then(blob=>blob.json())
    .then(data => songs.push(...data));

function findMatches(word) {
    return songs.filter(song => {
        const regex = new RegExp(word, 'gi');
        return song.author.match(regex) || song.title.match(regex)
    });
}

function displayMatches(){
    const matchArray=findMatches(this.value,songs)
    const html=matchArray.map(song=>{
        const regex = new RegExp(this.value, 'gi');
        const songName = song.title.replace(regex, `<span class="hl">${this.value}</span>`);
        const authorName = song.author.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${songName}, ${authorName}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML=html;
}

/*Lo del innerHTML. Se va al trozo de html que tiene la etiqueta suggestions y añade lo que retornea 
la constante html (una selección de los li)*/

function Open(){
    suggestions.classList.add('open');
}
function Close(){
    suggestions.classList.remove('open');
}


const input=document.querySelector('.search');
const suggestions=document.querySelector('.suggestions');

input.addEventListener('keyup',displayMatches)
input.addEventListener('click',Open)
input.addEventListener('focusout',Close)