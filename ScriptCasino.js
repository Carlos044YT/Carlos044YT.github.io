document.addEventListener('DOMContentLoaded', function () {
    var backgrounds = [
        'Fondos/Fondo2.jpeg', 'Fondos/Fondo3.jpeg', 'Fondos/Fondo4.jpeg',
        'Fondos/Fondo5.jpeg', 'Fondos/Fondo6.jpeg', 'Fondos/Fondo7.jpeg',
        'Fondos/Fondo8.jpeg', 'Fondos/Fondo9.jpeg', 'Fondos/Fondo10.jpeg',
        'Fondos/Fondo11.jpeg', 'Fondos/Fondo12.jpeg', 'Fondos/Fondo13.jpeg',
        'Fondos/Fondo14.jpeg', 'Fondos/Fondo15.jpeg', 'Fondos/Fondo16.jpeg',
        'Fondos/Fondo17.jpeg', 'Fondos/Fondo18.jpeg', 'Fondos/Fondo19.jpeg',
        'Fondos/Fondo20.jpeg', 'Fondos/Fondo21.jpeg', 'Fondos/Fondo22.jpeg',
        'Fondos/Fondo23.jpeg', 'Fondos/Fondo24.jpeg', 'Fondos/Fondo25.jpeg'
    ];
    var currentIndex = 0;

    function changeBackground() {
        // Cambiar el fondo de la página
        document.body.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
        // Incrementar el índice o reiniciarlo al principio si alcanza el final
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Cambiar el fondo cada 5 segundos (5000 milisegundos), modificado para que sea cada 10 segundos (10000 milisegundos)
    setInterval(changeBackground, 10000);
}
);

// Array de nombres de archivos de iconos y fondos
var iconNames = [
    "Íconos/Icon1.jpeg", "Íconos/Icon2.jpeg", "Íconos/Icon3.jpeg", "Íconos/Icon4.jpeg",
    "Íconos/Icon5.jpeg", "Íconos/Icon6.jpeg", "Íconos/Icon7.jpeg", "Íconos/Icon8.jpeg",
    "Íconos/Icon9.jpeg", "Íconos/Icon10.jpeg", "Íconos/Icon11.jpeg", "Íconos/Icon12.jpeg",
    "Íconos/Icon13.jpeg", "Íconos/Icon14.jpeg", "Íconos/Icon15.jpeg", "Íconos/Icon16.jpeg",
    "Íconos/Icon17.jpeg", "Íconos/Icon18.jpeg", "Íconos/Icon19.jpeg", "Íconos/Icon20.jpeg",
    "Íconos/Icon21.jpeg", "Íconos/Icon22.jpeg", "Íconos/Icon23.jpeg", "Íconos/Icon24.jpeg",
    "Íconos/Icon25.jpeg"];

// Índice actual del icono e imágenes
var currentIndex = 0;

// Función para cambiar los íconos 
function changeIcon() {
    var favicon = document.getElementById('favicon'); //Obtiene el Ícono mediante un ID
    // Cambiar el ícono al siguiente en el array
    currentIndex = (currentIndex + 1) % iconNames.length;
    favicon.href = iconNames[currentIndex];
}

// Cambiar el ícono cada 5 minutos (300,000 milisegundos)
//setInterval(changeIcon, 300000);
setInterval(changeIcon, 1000);

//Función para abrir el Black Jack
function OpenBlackJack() {
    window.location.href = 'blackjack.html'; //Hacemos que el boton 1 te abra el archivo denominado 
}

//Función para abrir el Slot Machine
function OpenSlotMachine() {
    window.location.href = 'SlotMachine.html';
}

function abrirPagina(event) {
    // Verificar si se presionaron las teclas correctas (Ctrl = 17, Shift = 16, Espacio = 32)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 32) {
        // Cambiar la URL a la página externa que deseas abrir
        var url = "Seguro1.html";
        // Abrir la página en una nueva pestaña
        window.open(url);
    }
}
// Agregar un event listener para el evento de teclado
document.addEventListener('keydown', abrirPagina);

console.log("MDEwMTAwMDAgMDExMTAxMDEgMDExMDAxMTEgMDExMTAxMDEgMDExMTAwMTEgMDExMTAwMTEgMDExMTEwMDE=");
console.log("MDEwMDExMDAgMDExMDExMTEgMDExMTAwMDEgMDExMTAxMDEgMDExMDAxMDEgMDExMDExMTAgMDExMDAxMDAgMDExMDExMTEgMDAxMTAwMTEgMDAxMTAwMDAgMDAxMTAwMDAgMDAxMTAwMDAgMDEwMDAwMTEgMDExMTAwMTAgMDExMDAxMDEgMDExMDAxMDEgMDExMTAwMDAgMDExMTEwMDEgMDExMTAwMDAgMDExMDAwMDEgMDExMTAwMTEgMDExMTAxMDAgMDExMDAwMDEgMDEwMDAxMTEgMDEwMTAxMDAgMDEwMDAwMDEgMDEwMTAwMTEgMDEwMDAwMDE=");
console.log("MDEwMDEwMDEgMDExMDExMDEgMDEwMDExMTAgMDExMDExMTEgMDExMTAxMDAgMDEwMTAwMTAgMDExMDAxMDEgMDExMDAwMDEgMDExMDExMDAgMDAxMTExMTE=");
console.log("MDEwMDExMTAgMDExMTEwMDEgMDExMDAwMDEgMDEwMTAxMDEgMDExMTAxMTEgMDExMTAxMDEgMDEwMDEwMTAgMDExMDAxMDEgMDExMDEwMTAgMDExMDAxMDEK");
console.log("MDEwMTAwMTEgMDExMDAwMTEgMDExMTAwMTAgMDExMDAxMDEgMDExMDAwMDEgMDExMDExMDEK");
console.log("MDEwMDAxMTEgMDExMDAxMDEgMDExMTAxMDAgMDEwMDAwMTAgMDExMDAwMDEgMDExMDEwMDEgMDExMTAxMDAgMDExMDAxMDEgMDExMDAxMDAK");