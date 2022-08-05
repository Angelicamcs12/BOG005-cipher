import cipher from './cipher.js';

//Creamos pestañas
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
 });

 
 //Botón y función de cifrar
 document.getElementById("encode").addEventListener("click", encode);

 function encode(){
     let texto = document.getElementById("mensaje").value.toUpperCase();
     let desplazamiento = parseInt (document.getElementById("desplazamiento").value);
     document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
 }
 
 //Botón y función de descifrar
 document.getElementById("decode").addEventListener("click", decode);
 
 function decode(){
     let texto = document.getElementById("mensaje").value.toUpperCase();
     let desplazamiento = parseInt (document.getElementById("desplazamiento").value);
     document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);
 }
 

console.log(cipher);
