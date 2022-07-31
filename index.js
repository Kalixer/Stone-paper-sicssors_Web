const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const s_button = document.getElementById("s_button")
const maquina = document.getElementById("machine")


rock.addEventListener("click", select_rock)
paper.addEventListener("click", select_paper)
scissors.addEventListener("click", select_scissors)
s_button.addEventListener("click", boton)

let numero_r;

const options = {
    rock: 1,
    paper: 2,
    scissors: 3,
}

let user_select = {
    numero: 0,
    lexi: 'Nothing'
};
let machine_select = {
    numero: 0,
    lexi: 'random',
};
let result = 'Nani?';


function select_rock() {
    user_select.numero = options.rock
    user_select.lexi = 'Rock'
    rock.setAttribute('style', 'background-color: green')

    paper.setAttribute('style', 'background-color: gray')
    scissors.setAttribute('style', 'background-color: gray')
}
function select_paper() {
    user_select.numero = options.paper
    user_select.lexi = 'Paper'
    paper.setAttribute('style', 'background-color: green')

    scissors.setAttribute('style', 'background-color: gray')
    rock.setAttribute('style', 'background-color: gray')
}
function select_scissors() {
    user_select.numero = options.scissors
    user_select.lexi = 'Scissors'
    scissors.setAttribute('style', 'background-color: green')

    paper.setAttribute('style', 'background-color: gray')
    rock.setAttribute('style', 'background-color: gray')
}


function boton() {
    maquina.innerHTML =
    `<div class="loader-wrapper">
        <div class="loader">
            <div class="loader loader-inner"></div>
        </div>
    </div>`

    machine_select.numero = aleatorio(1, 3);


    if(user_select.numero == options.rock){
        switch(machine_select.numero){
            case options.rock :
                result = 'Even'
            break
            case options.paper :
                result = 'You Lose'
            break
            case options.scissors :
                result = 'You Win!'
            break
        }
    }
    if(user_select.numero == options.paper){
        switch(machine_select.numero){
            case options.rock :
                result = 'Winner'
            break
            case options.paper :
                result = 'Even'
            break
            case options.scissors :
                result = 'Lose'
            break
        }
    }
    if(user_select.numero == options.scissors){
        switch(machine_select.numero){
            case options.rock :
                result = 'Lose'
            break
            case options.paper :
                result = 'Winner'
            break
            case options.scissors :
                result = 'Even'
            break
        }
    }

    setTimeout(() => {
        maquina.innerHTML = `
        <div class="box" style="background-color:green">${user_select.lexi}</div>
        <div class="box" style="background-color:red">${result}</div>
        <div class="box" style="background-color:grey">${machine_select.lexi}</div>
        `
    }, 3000)
}


function aleatorio(min, max) {
    numero_r = Math.floor(Math.random() * (max - min + 1)) + min;

    if(numero_r == 1){
        machine_select.lexi = 'Rock'
    }
    if(numero_r == 2){
        machine_select.lexi = 'Paper'
    }
    if(numero_r == 3){
        machine_select.lexi = 'Scissors'
    }

    return numero_r;
}




