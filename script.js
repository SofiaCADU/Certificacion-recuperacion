function filtrar(){
    alert("Aplicando filtros...");
}


let contador = 157;

const botonsff = document.getElementById('sff');
const valorContador = document.getElementById('valorc');

botonsff.onclick = function(){
    contador++;
    valorContador.innerHTML = contador;
}

let contador2 = 157;

const botonlpr = document.getElementById('lpr');
const valorC = document.getElementById('v-c');

botonlpr.onclick = function(){
    contador2++;
    valorC.innerHTML = contador2;
}