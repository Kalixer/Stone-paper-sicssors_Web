var piedra = 1;
var papel = 2;
var tijera = 3;

var seleccion_usuario = document.getElementById("seleccion_usuario");
var boton = document.getElementById("boton");

boton.addEventListener("click", trigger)

var vez = 0;
var usuario;
var maquina;
var numero_r;

function trigger() {
    aleatorio();
    usuario = seleccion_usuario.value;
    maquina = numero_r;

    if(usuario == piedra) {
        switch(maquina){
            case piedra:
                console.log("Empate | Maquina: piedra");
            break;
            case papel:
                console.log("Perdiste | Tú: piedra - Maquina: papel");
            break;
            case tijera:
                console.log("Ganaste | Tú: piedra - Maquina: tijera");
            break;
            default:
                console.log("Error");
        }
    }
    if(usuario == papel) {
        switch(maquina){
            case piedra:
                console.log("Ganaste | Tú: papel - Maquina: piedra");
            break;
            case papel:
                console.log("Empate | Tú: papel - Maquina: papel");
            break;
            case tijera:
                console.log("Perdiste | Tú: papel - Maquina: tijera");
            break;
            default:
                console.log("Error");
        }
    }
    if(usuario == tijera) {
        switch(maquina){
            case piedra:
                console.log("Perdiste | Tú: papel - Maquina: tijera");
            break;
            case papel:
                console.log("Ganaste | Tú: papel - Maquina: piedra");
            break;
            case tijera:
                console.log("Empate | Tú: papel - Maquina: papel");
            break;
            default:
                console.log("Error");
            }

    }

    vez++;
    console.log("Juego N° " + vez);
}


var min = 1;
var max = 3;

function aleatorio() { 
    numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Elección de la máquina: " + numero_r);
}


