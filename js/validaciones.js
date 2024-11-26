// Mapa de ciudades por país
const ciudadesPorPais = {
    Argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata", "Mar del Plata", "Salta", "San Juan", "Neuquén", "San Luis"],
    Bolivia: ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Oruro", "Potosí", "Tarija", "Cobija", "Trinidad", "El Alto"],
    Brasil: ["São Paulo", "Río de Janeiro", "Brasilia", "Salvador", "Belo Horizonte", "Curitiba", "Porto Alegre", "Recife", "Fortaleza", "Manaus"],
    Chile: ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco", "Iquique", "Rancagua", "Puerto Montt", "Talca"],
    Colombia: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga", "Pereira", "Cúcuta", "Manizales", "Santa Marta"],
    Ecuador: ["Quito", "Guayaquil", "Cuenca", "Ambato", "Portoviejo", "Loja", "Manta", "Santo Domingo", "Machala", "Esmeraldas"],
    Guyana: ["Georgetown", "Linden", "New Amsterdam", "Anna Regina", "Bartica", "Rose Hall", "Lethem", "Mahdia", "Vreed-en-Hoop", "Corriverton"],
    Paraguay: ["Asunción", "Ciudad del Este", "Encarnación", "Luque", "San Lorenzo", "Fernando de la Mora", "Lambaré", "Capiatá", "Pedro Juan Caballero", "Villa Elisa"],
    Perú: ["Lima", "Arequipa", "Cusco", "Trujillo", "Chiclayo", "Piura", "Iquitos", "Huancayo", "Tacna", "Puno"],
    Surinam: ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Albina", "Groningen", "Onverwacht", "Brokopondo", "Marowijne", "Totness"],
    Uruguay: ["Montevideo", "Salto", "Paysandú", "Maldonado", "Rivera", "Tacuarembó", "Artigas", "Mercedes", "Minas", "Florida"],
    Venezuela: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Ciudad Guayana", "Barcelona", "Maturín", "Cumaná", "Maracay", "Puerto La Cruz"]
};

// Referencias a los elementos del DOM
const carreraSelect = document.getElementById('carrera');
const paisSelect = document.getElementById("Pais");
const ciudadSelect = document.getElementById("ciudad");
const direccionInput = document.getElementById("direccion");

// Llenar el select de países con los nombres de los países
Object.keys(ciudadesPorPais).forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    paisSelect.appendChild(option);
});

// Cambiar las opciones de ciudad según el país seleccionado
paisSelect.addEventListener("change", function () {
    const paisSeleccionado = this.value;

    // Limpiar opciones previas
    ciudadSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';

    // Agregar las ciudades correspondientes al país
    if (ciudadesPorPais[paisSeleccionado]) {
        ciudadesPorPais[paisSeleccionado].forEach(ciudad => {
            const option = document.createElement("option");
            option.value = ciudad;
            option.textContent = ciudad;
            ciudadSelect.appendChild(option);
        });

        // Habilitar el campo de ciudad
        ciudadSelect.disabled = false;
    } else {
        // Deshabilitar ciudad y dirección si no hay un país válido
        ciudadSelect.disabled = true;
        direccionInput.disabled = true;
    }
});

// Habilitar el campo de dirección al seleccionar una ciudad
ciudadSelect.addEventListener("change", function () {
    direccionInput.disabled = !this.value;
});

function guardarForm(event) {
    event.preventDefault();  // Previene el envío del formulario

    // Validación adicional para el select 'carrera'
    if (!carreraSelect.value) {
        Swal.fire({
            icon: 'error',
            title: 'Falta completar',
            text: 'Debes seleccionar una carrera.',
        }).then(() => {
            setTimeout(() => {
                carreraSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
                carreraSelect.focus(); // Focaliza el campo
            }, 500); // Retraso de medio segundo
        });
        return; // Detiene el proceso si no se ha seleccionado un valor
    }

    // Validar campos de texto obligatorios en el mismo orden
    const camposObligatorios = [
        'primer_nombre',
        'primer_apellido',
        'fecha_nacimiento',
        'sexo_biologico',
        'estado_civil',
        'email',
        'telefono',
        'celular'
    ];

    // Recorremos los campos obligatorios
    for (let campoId of camposObligatorios) {
        const campo = document.getElementById(campoId);
        if (!campo.value.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Falta completar',
                text: `El campo ${campoId.replace('_', ' ')} es obligatorio.`,
            }).then(() => {
                setTimeout(() => {
                    campo.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                    campo.focus(); // Focaliza el campo
                }, 500); // Retraso de medio segundo
            });
            return;
        }
    }

    // Validaciones adicionales para los campos obligatorios
    if (!paisSelect.value) {
        Swal.fire({
            icon: 'error',
            title: 'Falta completar',
            text: 'Debes seleccionar un país.',
        }).then(() => {
            setTimeout(() => {
                paisSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
                paisSelect.focus(); // Focaliza el campo
            }, 500); // Retraso de medio segundo
        });
        return;
    }

    if (!ciudadSelect.value && paisSelect.value !== "") {
        Swal.fire({
            icon: 'error',
            title: 'Falta completar',
            text: 'Debes seleccionar una ciudad.',
        }).then(() => {
            setTimeout(() => {
                ciudadSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
                ciudadSelect.focus(); // Focaliza el campo
            }, 500); // Retraso de medio segundo
        });
        return;
    }

    if (!direccionInput.value.trim() && ciudadSelect.value) {
        Swal.fire({
            icon: 'error',
            title: 'Falta completar',
            text: 'Debes especificar la dirección.',
        }).then(() => {
            setTimeout(() => {
                direccionInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                direccionInput.focus(); // Focaliza el campo
            }, 500); // Retraso de medio segundo
        });
        return;
    }

    // Validar cada grupo de opciones
    const grupos = ["hijos", "Poblacion", "Discapacidad", "Trabajo"];
    for (let grupo of grupos) {
        const seleccion = document.querySelector(`input[name="${grupo}"]:checked`);
        if (!seleccion) {
            Swal.fire({
                icon: 'error',
                title: 'Falta completar',
                text: `Debes seleccionar una opción en la sección ${grupo}.`,
            }).then(() => {
                setTimeout(() => {
                    document.querySelector(`input[name="${grupo}"]`).scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500); // Retraso de medio segundo
            });
            return;
        }
    }

    // Validar "Otra discapacidad" si está visible
    const otraDiscapacidadDiv = document.getElementById("otraDiscapacidad");
    if (otraDiscapacidadDiv.style.display === "block") {
        const inputOtra = document.getElementById("otraDiscapacidadInput");
        if (!inputOtra.value.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Falta completar',
                text: 'Debes especificar tu discapacidad en la sección "Otra".',
            }).then(() => {
                setTimeout(() => {
                    inputOtra.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    inputOtra.focus(); // Focaliza el campo
                }, 500); // Retraso de medio segundo
            });
            return;
        }
    }

    // Obtener los datos del formulario
    const datos = {
        carrera: document.getElementById('carrera').value,
        primer_nombre: document.getElementById('primer_nombre').value,
        segundo_nombre: document.getElementById('segundo_nombre').value || '',
        primer_apellido: document.getElementById('primer_apellido').value,
        segundo_apellido: document.getElementById('segundo_apellido').value || '',
        fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
        sexo_biologico: document.getElementById('sexo_biologico').value,
        estado_civil: document.getElementById('estado_civil').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value || '000-0000',
        celular: document.getElementById('celular').value,
        Pais: document.getElementById('Pais').value,
        ciudad: document.getElementById('ciudad').value,
        direccion: document.getElementById('direccion').value || 'No Especificada',
        hijos: document.querySelector('input[name="hijos"]:checked').value,
        poblacion: document.querySelector('input[name="Poblacion"]:checked').value,
        discapacidad: document.querySelector('input[name="Discapacidad"]:checked').value,
        otraDiscapacidad: document.getElementById("otraDiscapacidadInput")?.value || '',
        Trabajo: document.querySelector('input[name="Trabajo"]:checked').value
    };

    // Guardar los datos como JSON
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
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        window.location.href = 'gracias.html';
    });
}

// Llamar a guardarForm() al hacer clic en el botón de enviar
document.getElementById("submit").addEventListener("click", function (e) {
    guardarForm(e);
});
