// Función para obtener los datos del formulario
function obtenerDatos() {
    const carrera = document.getElementById('carrera').value;
    const primer_nombre = document.getElementById('primer_nombre').value;
    const segundo_nombre = document.getElementById('segundo_nombre').value || '';
    const primer_apellido = document.getElementById('primer_apellido').value;
    const segundo_apellido = document.getElementById('segundo_apellido').value || '';
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const sexo_biologico = document.getElementById('sexo_biologico').value;
    const estado_civil = document.getElementById('estado_civil').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value || '000-0000';
    const celular = document.getElementById('celular').value;
    const Pais = document.getElementById('Pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value || 'No Especificada';

    const hijos = document.querySelector('input[name="hijos"]:checked')?.value || 'No Especificada';
    const poblacion = document.querySelector('input[name="Poblacion"]:checked')?.value || 'No Especificada';
    const discapacidad = document.querySelector('input[name="Discapacidad"]:checked')?.value || 'No Especificada';
    const otraDiscapacidad = discapacidad === "Otra" ? document.getElementById('otraDiscapacidadInput').value : 'No Especificada';
    const Trabajo = document.querySelector('input[name="Trabajo"]:checked')?.value || 'No Especificado';

    const datos = {
        carrera, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento,
        sexo_biologico, estado_civil, email, telefono, celular, Pais, ciudad, direccion,
        hijos, poblacion, discapacidad, otraDiscapacidad, Trabajo
    };

    guardarComoJson(datos);
}

// Función para guardar los datos como archivo JSON
function guardarComoJson(datos) {
    const datosJson = JSON.stringify(datos);
    const blob = new Blob([datosJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'Formulario_de_Inscripción_a_Carrera.json';
    enlace.click();

    URL.revokeObjectURL(url);

    // Mostrar alerta y redirigir
    Swal.fire({
        title: '¡Formulario Guardado!',
        text: 'El archivo se ha guardado correctamente. Redirigiendo...',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
    }).then(() => {
        window.location.href = 'gracias.html';
    });
}

// Detectar cuando se envía el formulario
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario
    obtenerDatos(); // Llamar a la función para guardar los datos y mostrar la alerta
});
