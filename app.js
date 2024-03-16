let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del Numero Secreto"

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un Numero del 1 al 10"

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `Aceraste el Numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`, `El numero secreto es menor`);
        } else {
            asignarTextoElemento(`p`, `El numero secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
   document.querySelector(`#valorUsuario`).value = ``;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`, `Ya se sortearon todos los numeros`);
    } else {  
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }  
    }
}

function condicionesIniciales() {
    asignarTextoElemento (`h1`, `Juego del numero secreto!`);
    asignarTextoElemento (`p`, `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){

    limpiarCaja();

    condicionesIniciales();

    document.querySelector(`#reiniciar`).setAttribute(`disable`, `true`);

    numeroSecreto = generarNumeroSecreto();

    intentos = 1;

}

condicionesIniciales();
