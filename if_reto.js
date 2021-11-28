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

    if(usuario == piedra){
        if(maquina == piedra){
            console.log("Empate | Maquina: piedra");
        }else if(maquina == papel){
            console.log("Perdiste | Tú: piedra - Maquina: papel")
        } else if(maquina == tijera){
            console.log("Ganaste | Tú: piedra - Maquina: tijera")
        }
    }
    if(usuario == papel){
        if(maquina == piedra){
            console.log("Ganaste | Tú: papel - Maquina: piedra")
        }else if(maquina == papel){
            console.log("Empate | Tú: papel - Maquina: papel")
        } else if(maquina == tijera){
            console.log("Perdiste | Tú: papel - Maquina: tijera");
        }
    }
    if(usuario == tijera){
        if(maquina == piedra){
            console.log("Perdiste | Tú: tijera - Maquina: piedra");
        }else if(maquina == papel){
            console.log("Ganaste | Tú: tijera - Maquina: papel")
        } else if(maquina == tijera){
            console.log("Empate | Tú: tijera - Maquina: tijera")
        }
    }

    vez++;
    console.log("Juego N° " + vez);
}


var min = 1;
var max = 3;

function aleatorio() { 
    numero_r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numero_r);
}


