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

document.getElementById("3KVideo").addEventListener("click", Open3kVid);
document.getElementById("Doc").addEventListener("click", OpenDoctor);
document.getElementById("Credits").addEventListener("click", OpenCréditos)

function Open3kVid() {
    window.location.href = '3KVideo.html';
}
function OpenDoctor() {
    window.location.href = 'DoctorEstáGrande.html';
}
function OpenCréditos() {
    window.location.href = 'Créditos.html';
}