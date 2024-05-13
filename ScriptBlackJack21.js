var dealerSum = 0; //Contador para saber el valor de la varaja del dealer.
var tuSum = 0; //Contador para saber el valor de tu varaja.

var dealerAceCont = 0; //Sirve para llevar un contador el cuál sirva en el caso de 'A' para que valga 11 o 1, ejemplo
var tuAceCont = 0; //Tú tienes una baraja con 'A', 2, esto quedaría como 11 + 2, pero al darle a apostar más y te sale una 'K' ejemplo (A,2,K = 11+2+10) la 'A' se transforme a 1 para que no exedas del 21

var esconder;
var baraja;

var puedeApostar = true; //Permite al jugador seguir apostando minentras tuSum <=21
var dobleApostar = true;
var plantarse2 = true;

var botonApostar;
var botonDoblar;
var botonPlantarse;

window.onload = function () {
    armarBaraja();
    mezclarBaraja();
    iniciarJuego();
}

function armarBaraja() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    baraja = [];


    //Se forman las barajas
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            baraja.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D Y obtengamos las 52 cartas
        }
        // console.log(baraja);
    }
}

function mezclarBaraja() {
    for (let i = 0; i < baraja.length; i++) {
        let random = Math.floor(Math.random() * baraja.length); //Math.random nos dará un número del (0-1) y lo multiplicará * 52 dándonos => (0-51.9999) 
        let temp = baraja[i];
        baraja[i] = baraja[random];
        baraja[random] = temp;
    }
    // console.log(baraja);
}

function iniciarJuego() {
    for (let i = 0; i < 2; i++) {
        let Imgcarta = document.createElement('img');
        let carta = baraja.pop();
        Imgcarta.src = "cardset-trumps/" + carta + ".jpeg";
        tuSum += obtenerValor(carta);
        tuAceCont += checarAce(carta);
        document.getElementById("your-cards").append(Imgcarta);
    }
    // console.log(tuSum);

    document.getElementById("Apostar").addEventListener("click", Apostar);
    document.getElementById("Plantarse").addEventListener("click", Plantarse);
    document.getElementById("Doblar").addEventListener("click", Doblar);

}

function Apostar() {
    if (!puedeApostar) {
        return;
    }
    let Imgcarta = document.createElement('img');
    let carta = baraja.pop();
    Imgcarta.src = "cardset-trumps/" + carta + ".jpeg";
    tuSum += obtenerValor(carta);
    tuAceCont += checarAce(carta);
    document.getElementById("your-cards").append(Imgcarta);

    if (reducirAce(tuSum, tuAceCont) > 21) { //La función determinará los parametros basandose en tu suma y la suma de tu "Ace", ejemplo práctico -> ("A","J,"K) todo esto se verá afectado por 11+10+10, pero gracias a la consideración del Ace será 1+10+10 y no podrás tomar otra carta
        puedeApostar = false;
        dobleApostar = false;
    }
}

function Doblar() {
    esconder = baraja.pop(); //Elimina el último elemento de un arreglo y lo devuelve
    dealerSum += obtenerValor(esconder);
    dealerAceCont += checarAce(esconder);
    // console.log(esconder);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        let Imgcarta = document.createElement('img'); //Crearemos una línea con la tarjeta <img>
        let carta = baraja.pop(); //Obtendremos la carta de la baraja
        Imgcarta.src = "cardset-trumps/" + carta + ".jpeg"; //Insertaremos la referencia de la imagen <img src="cardset-trumps/4-C.jpeg">
        dealerSum += obtenerValor(carta); //Incrementamos la cuenta del dealer
        dealerAceCont += checarAce(carta); //Y la cuenta del "Ace"
        document.getElementById("dealer-cards").append(Imgcarta); //Toma el tag del img y agregamos la carta al div
    }
    // console.log(dealerSum)

    if (!puedeApostar) {
        return;
    }
    let Imgcarta = document.createElement('img');
    let carta = baraja.pop();
    Imgcarta.src = "cardset-trumps/" + carta + ".jpeg";
    tuSum += obtenerValor(carta);
    tuAceCont += checarAce(carta);
    document.getElementById("your-cards").append(Imgcarta);

    dealerSum = reducirAce(dealerSum, dealerAceCont);
    tuSum = reducirAce(tuSum, tuAceCont);

    puedeApostar = false;
    dobleApostar = false;

    document.getElementById("escondida").src = "cardset-trumps/" + esconder + ".jpeg";

    let message = "";
    if (tuSum > 21) { //Esta condición se ejecuta cuando tu tienes más de 21
        message = "Perdiste...";
    } else if (dealerSum > 21) { //Esta condición se ejecuta cuando el repartidor obtiene más de 21
        message = "¡Felicidades! Ganaste por ahora...";
    } else if (tuSum == dealerSum) {
        message = "¡EMPATE! Haz tenido suerte...";
    } else if (tuSum > dealerSum) {
        message = "¡Felicidades! Ganaste por ahora...";
    } else if (tuSum < dealerSum) {
        message = "Perdiste...";
    }

    document.getElementById("dealer-suma").innerText = dealerSum;
    document.getElementById("tu-suma").innerText = tuSum;
    document.getElementById("resultados").innerText = message;
}

function Plantarse() {
    if(!plantarse2){
        return;
    }
    esconder = baraja.pop(); //Elimina el último elemento de un arreglo y lo devuelve
    dealerSum += obtenerValor(esconder);
    dealerAceCont += checarAce(esconder);
    // console.log(esconder);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        let Imgcarta = document.createElement('img'); //Crearemos una línea con la tarjeta <img>
        let carta = baraja.pop(); //Obtendremos la carta de la baraja
        Imgcarta.src = "cardset-trumps/" + carta + ".jpeg"; //Insertaremos la referencia de la imagen <img src="cardset-trumps/4-C.jpeg">
        dealerSum += obtenerValor(carta); //Incrementamos la cuenta del dealer
        dealerAceCont += checarAce(carta); //Y la cuenta del "Ace"
        document.getElementById("dealer-cards").append(Imgcarta); //Toma el tag del img y agregamos la carta al div
    }
    // console.log(dealerSum)

    dealerSum = reducirAce(dealerSum, dealerAceCont);
    tuSum = reducirAce(tuSum, tuAceCont);

    puedeApostar = false;
    dobleApostar = false;
    plantarse2 = false;


    document.getElementById("escondida").src = "cardset-trumps/" + esconder + ".jpeg";

    let message = "";
    if (tuSum > 21) { //Esta condición se ejecuta cuando tu tienes más de 21
        message = "Perdiste...";
    } else if (dealerSum > 21) { //Esta condición se ejecuta cuando el repartidor obtiene más de 21
        message = "¡Felicidades! Ganaste por ahora...";
    } else if (tuSum == dealerSum) {
        message = "¡EMPATE! Haz tenido suerte...";
    } else if (tuSum > dealerSum) {
        message = "¡Felicidades! Ganaste por ahora...";
    } else if (tuSum < dealerSum) {
        message = "Perdiste...";
    }

    document.getElementById("dealer-suma").innerText = dealerSum;
    document.getElementById("tu-suma").innerText = tuSum;
    document.getElementById("resultados").innerText = message;
}

function obtenerValor(carta) {
    let data = carta.split("-"); //Ejemplo "4-C" 4 es el valor C es el tipo, aquí lo separaremos de tal manera que ["4","C"]
    let valor = data[0];

    if (isNaN(valor)) { //Básicamente estámos leyendo "A" "J" "Q" "K"
        if (valor == "A") {
            return 11;
        }
        return 10; // Regresará este valor al comprobar que no es "A" la posición tomada con anterioridad
    }
    return parseInt(valor); //Una vez que se terminen las comparaciones retornaría el "4" 
}

function checarAce(carta) {
    if (carta[0] == "A") {
        return 1;
    }
    return 0;
}

function reducirAce(JugadorSum, JugadorAceCont) {
    while (JugadorSum > 21 && JugadorAceCont > 0) {
        JugadorSum -= 10;
        JugadorAceCont -= 1;
    }
    return JugadorSum;
}

function reiniciar(){
    location.reload();
}