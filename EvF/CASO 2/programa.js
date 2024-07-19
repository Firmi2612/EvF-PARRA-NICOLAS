function cambiarColor() {
    // Valores aleatorios
    var rojo = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);

    // Convertir a formato hexadecimal
    var colorHex = rgbToHex(rojo, verde, azul);

    // Aplicar el color de fondo al cuerpo de la página
    document.body.style.backgroundColor = colorHex;

    // Mostrar el valor del color en formato hexadecimal
    document.getElementById('valorColor').textContent = colorHex;
}

// Convertir RGB a hexadecimal
function rgbToHex(r, g, b) {
    var rojoHex = r.toString(16).padStart(2, '0');
    var verdeHex = g.toString(16).padStart(2, '0');
    var azulHex = b.toString(16).padStart(2, '0');
    return '#' + rojoHex + verdeHex + azulHex;
}
