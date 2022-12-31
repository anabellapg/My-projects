const books = ['Niebla', 'Fortunata y Jacinta', 'La madre de Frankenstein', 'El hereje', 'Miau', 'Luces de bohemia', 
'El arbol de la ciencia', 'Los renglones torcidos de dios', 'Malena es un nombre de tango', 'Nada',
'Los girasoles ciegos', 'Historia de una escalera', 'La colmena'];
let lista=document.querySelector('#books')

function articulos(libro) {
    return libro.replace(/^(El |La |Los |Las )/, '')
    .replace(/^[A-z]/,$1=>$1.toUpperCase()).trim();
  }

sortedBooks=books.sort((a, b) => articulos(a) > articulos(b) ? 1 : -1);

lista.innerHTML=sortedBooks.map(libro=>`<li>${libro}</li>`).join('');

