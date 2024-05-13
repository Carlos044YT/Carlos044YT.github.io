var código = "";
function verificarInput() {
    // Obtener el valor del input
    let código = document.getElementById("Contraseña").value;
    // Verificar si el texto cumple con alguna condición
    if (código === "Loquendo3000CreepypastaGTASA") { // Reemplaza "condicion" con tu condición específica
        // Redirigir a otra página HTML
        window.location.href = "Videos.html";
    } else {
        // Si la condición no se cumple, hacer algo más o mostrar un screamer

    }
}

function abrirPagina(event) {
    // Verificar si se presionaron las teclas correctas (Ctrl = 17, Shift = 16, Espacio = 32)
    if (event.ctrlKey && event.shiftKey && event.key === "Enter") {
        // Cambiar la URL a la página externa que deseas abrir
        var url = "index.html";
        // Abrir la página en una nueva pestaña
        window.open(url);
    }
}

// Agregar un event listener para el evento de teclado
document.addEventListener('keydown', abrirPagina);