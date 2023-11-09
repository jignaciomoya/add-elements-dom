 // Aquí tu código

 const agregar = document.getElementById('agregar');
 const añadirTexto = document.getElementById('lista');

 agregar.addEventListener('click', function(){
    const textoUno = prompt('Introduzca su elemento:');
    añadirTexto.innerHTML = textoUno;
 })
