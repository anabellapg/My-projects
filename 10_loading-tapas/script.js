const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
//intentamos recuperar del localStorage, y si no pues un array vacío


function addItem(ev){
    ev.preventDefault(); 
    //con esto evitamos que la página se recargue automáticamente al hacer submit

    const item={
        text:this.querySelector('[name=item]').value,
        done:false
    }

    items.push(item);
    localStorage.setItem('items', JSON.stringify(items))
    crearLista(items,itemsList);

    /*hacemos esto para que al recargar la pag, la lista se guarde
    pero el segundo argumento tiene que ser un string, así que hay
    que aplicar esos métodos */

    this.reset();
    //eso es un método de los input text que básicamente es el zurücksetzen
}

//en esta función, el primer argumento será la lista de platos a la que le vamos haciendo push
//y el segundo argumento, la <ul> del html que iremos actualizando

function crearLista(plates,platesList){
    platesList.innerHTML=plates.map((plate,i)=>{
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for='item${i}'>${plate.text}</label>
            <span data-index=${i}> 🗑️ </span>
        </li>
        `;
    }).join('')
}

function addTaco(ev){
    if(!ev.target.matches('input')) return;

    let index=ev.target.dataset.index;
    items[index].done=!items[index].done;
    localStorage.setItem('items', JSON.stringify(items))
    crearLista(items,itemsList);
}


function deleteItem(ev){
    if(!ev.target.matches('span')) return;

    let index=ev.target.dataset.index;
    items.splice(index,1)
    
    localStorage.setItem('items', JSON.stringify(items))
    crearLista(items,itemsList);
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',addTaco);
itemsList.addEventListener('click',deleteItem);
//Delegación de eventos: escuchamos un click en algo más grande y luego comprobamos
//si matchea lo que realmente nos interesa

crearLista(items,itemsList);
//esto está aquí para que aunque no hagamos nada (ningún submit), la lista se cargue


//para poner un label a elemento con id='prueba' hay que escribir label for='prueba'