let jugaUno='-';
let jugaDos='-';
let jugaTres='-';
let banderaUno=1;
let banderaDos=0;
let banderaTres=0;
function arranca() {
    document.getElementById("primeralinea").innerHTML = "====================";
    document.getElementById("segundalinea").innerHTML = "|~~~~~~~~~~~~~~~~~~~|";
    document.getElementById("terceralinea").innerHTML =jugaUno;
    document.getElementById("cuartalinea").innerHTML = "|~~~~~~~~~~~~~~~~~~~|";
    document.getElementById("quintalinea").innerHTML =jugaDos;
    document.getElementById("sextalinea").innerHTML = "|~~~~~~~~~~~~~~~~~~~|";
    document.getElementById("septimalinea").innerHTML =jugaTres;
    document.getElementById("octavalinea").innerHTML = "|~~~~~~~~~~~~~~~~~~~|";
    document.getElementById("novenalinea").innerHTML = "====================";
}

function jugadorUno() {
    if(banderaUno===1) {
        banderaDos=1;
        banderaUno=0
        let auxiliar = Math.ceil(Math.random() * 5);
        if (auxiliar === 1) {
            jugaUno += '-';
        } else if (auxiliar === 2) {
            jugaUno += '--';
        } else if (auxiliar === 3) {
            jugaUno += '---';
        } else if (auxiliar === 4) {
            jugaUno += '----';
        } else if (auxiliar === 5) {
            jugaUno += '-----';
        }
        arranca();
    }else{
        alert("No tiro el jugador anterior");
    }
    if(jugaUno.length>=33){
        alert("Jugador Uno a ganado el juego");
        jugaUno='-';
        jugaDos='-';
        jugaTres='-';
    }
}
function jugadorDos() {
    if(banderaDos===1) {
        banderaTres=1;
        banderaDos=0;
        let auxiliar = Math.ceil(Math.random() * 5);
        if (auxiliar === 1) {
            jugaDos += '-';
        } else if (auxiliar === 2) {
            jugaDos += '--';
        } else if (auxiliar === 3) {
            jugaDos += '---';
        } else if (auxiliar === 4) {
            jugaDos += '----';
        } else if (auxiliar === 5) {
            jugaDos += '-----';
        }
        arranca();
    }else{
        alert("No tiro el jugador anterior");
    }
    if(jugaDos.length>=33){
        alert("Jugador Dos a ganado el juego");
        jugaUno='-';
        jugaDos='-';
        jugaTres='-';
    }
}
function jugadorTres() {
    if(banderaTres===1) {
        banderaTres=0;
        banderaUno=1;
        let auxiliar = Math.ceil(Math.random() * 5);
        if (auxiliar === 1) {
            jugaTres += '-';
        } else if (auxiliar === 2) {
            jugaTres += '--';
        } else if (auxiliar === 3) {
            jugaTres += '---';
        } else if (auxiliar === 4) {
            jugaTres += '----';
        } else if (auxiliar === 5) {
            jugaTres += '-----';
        }
        arranca();
    }else{
        alert("No tiro el jugador anterior");
    }
    if(jugaTres.length>=33){
        alert("Jugador Tres a ganado el juego");
        jugaUno='-';
        jugaDos='-';
        jugaTres='-';
    }
}