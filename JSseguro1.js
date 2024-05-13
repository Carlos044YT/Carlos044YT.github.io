var código = "";
function verificarInput() {
    // Obtener el valor del input
    let código = document.getElementById("Contraseña").value;
    // Verificar si el texto cumple con alguna condición
    if (código === "Pugussy") window.location.href = "Seguro2.html"; 
    if(código === "I'mNotReal?") window.location.href = "I'mNotReal.html";
    if(código === "NyaUwuJeje") window.location.href = "NyaUwuJeje.html";
    if(código === "Scream") window.location.href = "ItDepends.html";
    if(código === "GetBaited") window.location.href = "BAAAAITEDUMB.html";
}

function abrirPagina(event) {
    // Verificar si se presionaron las teclas correctas (Ctrl = 17, Shift = 16, Espacio = 32)
    if (event.ctrlKey && event.shiftKey && event.keyCode === 32) {
        // Cambiar la URL a la página externa que deseas abrir
        var url = "index.html";
        // Abrir la página en una nueva pestaña
        window.open(url);
    }
}

// Agregar un event listener para el evento de teclado
document.addEventListener('keydown', abrirPagina);

