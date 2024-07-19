// Arreglo
const departamentos = [
    {
        nombre: 'J & M INVERSIONES INMOBILIARIAS PERÚ',
        precio: '$130,000',
        area: '87 m²',
        imagen: 'imagenes/dept1.jpg'
    },
    {
        nombre: 'ABRIL GRUPO INMOBILIARIO',
        precio: '$110,000',
        area: '98 m²',
        imagen: 'imagenes/dept2.jpg'
    },
    {
        nombre: 'KREAR INMOBILIARIA SAC',
        precio: '$122,000',
        area: '100 m²',
        imagen: 'imagenes/dept3.jpg'
    },
    {
        nombre: 'J & M INVERSIONES INMOBILIARIAS PERÚ',
        precio: '$180,000',
        area: '250 m²',
        imagen: 'imagenes/dept4.jpg'
    },
    {
        nombre: 'ABRIL GRUPO INMOBILIARIO',
        precio: '$400,000',
        area: '200 m²',
        imagen: 'imagenes/dept5.jpg'
    },
    {
        nombre: 'MC INVERSIONES INMOBILIARIAS SAC -MIRAFLORES',
        precio: '$60,000',
        area: '59 m²',
        imagen: 'imagenes/dept6.jpg'
    },
    {
        nombre: 'J & M INVERSIONES INMOBILIARIAS PERÚ',
        precio: '$200,000',
        area: '130 m²',
        imagen: 'imagenes/dept7.jpg'
    },
    {
        nombre: 'ABRIL GRUPO INMOBILIARIO',
        precio: '$98,000',
        area: '90 m²',
        imagen: 'imagenes/dept8.jpg'
    },
    {
        nombre: 'LIMA MODERNA INMOBILIARIA',
        precio: '$140,000',
        area: '100 m²',
        imagen: 'imagenes/dept9.jpg'
    },
    {
        nombre: 'KREAR INMOBILIARIA SAC',
        precio: '$100,000',
        area: '90 m²',
        imagen: 'imagenes/dept10.jpg'
    },
];

let indiceActual = 0;
const totalDepartamentos = departamentos.length;

// Función para cargar la información del departamento
function cargarDepartamentoActual() {
    const imagenElemento = document.getElementById('imagen');
    const nombreConstructoraElemento = document.getElementById('nombreConstructora');
    const precioDepartamentoElemento = document.getElementById('precioDepartamento');
    const areaDepartamentoElemento = document.getElementById('areaDepartamento');

    const departamentoActual = departamentos[indiceActual];
    imagenElemento.src = departamentoActual.imagen;
    nombreConstructoraElemento.textContent = departamentoActual.nombre;
    precioDepartamentoElemento.textContent = departamentoActual.precio;
    areaDepartamentoElemento.textContent = departamentoActual.area;
}

// Función para que avance al siguiente departamento
function imagenSiguiente() {
    indiceActual++;
    if (indiceActual >= totalDepartamentos) {
        indiceActual = 0;
    }
    cargarDepartamentoActual();
}

// Función para retroceder al departamento anterior
function imagenAnterior() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = totalDepartamentos - 1; // Va al final si está en el inicio
    }
    cargarDepartamentoActual();
}
// Para que cargue la imagen al ingresar a la página
window.onload = cargarDepartamentoActual;
