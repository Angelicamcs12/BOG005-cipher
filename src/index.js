import cipher from './cipher.js';

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

//Asignamos un click a todos los li 
 li.forEach(( cadaLi , i )=>{
    li[i].addEventListener('click',()=>{

         //Quitamos la clase activo de li y bloque
        li.forEach( ( cadaLi , i )=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        //Ponemos la clase activo de li y bloque
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
 })


console.log(cipher);
