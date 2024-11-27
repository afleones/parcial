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
    event.preventDefault(); // Previene el envío del formulario

    // Listas de valores válidos
    const sexosValidos = ["Masculino", "Femenino"];
    const estadosCivilesValidos = ["Soltero", "Casado", "Divorciado", "Viudo", "Unión libre"];

    // Validar campos obligatorios y su tipo
    const campos = [
        { id: 'carrera', regex: /.+/, errorVacio: 'Debes seleccionar una carrera.', errorFormato: '' },
        { id: 'primer_nombre', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, errorVacio: 'El primer nombre es obligatorio.', errorFormato: 'El nombre solo debe contener letras.' },
        { id: 'primer_apellido', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, errorVacio: 'El primer apellido es obligatorio.', errorFormato: 'El apellido solo debe contener letras.' },
        { id: 'segundo_apellido', regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, errorVacio: 'El segundo apellido es obligatorio.', errorFormato: 'El apellido solo debe contener letras.' },
        { id: 'tipo_documento', errorVacio: 'El tipo de documento es obligatorio.' },        
        { id: 'numero_documento', regex: /^[0-9]+$/, errorVacio: 'El número de documento es obligatorio.', errorFormato: 'El número de documento debe contener solo números.' },
        { id: 'fecha_nacimiento', regex: /^\d{4}-\d{2}-\d{2}$/, errorVacio: 'La fecha de nacimiento es obligatoria.', errorFormato: 'La fecha de nacimiento debe estar en el formato YYYY-MM-DD.' },
        { id: 'sexo_biologico', regex: /.+/, errorVacio: 'Debes seleccionar el sexo.', errorFormato: '' },
        { id: 'estado_civil', regex: /.+/, errorVacio: 'Debes seleccionar el estado civil.', errorFormato: '' },
        { id: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorVacio: 'El correo es obligatorio.', errorFormato: 'El correo debe tener un formato válido. EJ: example@email.com' },
        { id: 'celular', regex: /^[0-9]+$/, errorVacio: 'El celular es obligatorio.', errorFormato: 'El celular debe contener solo números.' },
        { id: 'Pais', errorVacio: 'Debes seleccionar un país.' },
        { id: 'ciudad', errorVacio: 'Debes seleccionar una ciudad.' },
        { id: 'direccion', errorVacio: 'La dirección es obligatoria.' }
    ];

    for (let campo of campos) {
        const input = document.getElementById(campo.id);
        const valor = input ? input.value.trim() : ''; // Validar inputs y selects

        if (!valor) {
            Swal.fire({
                icon: 'error',
                title: 'Falta completar',
                text: campo.errorVacio,
            }).then(() => {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    input.focus();
                }, 500);
            });
            return;
        }

        if (campo.regex && !campo.regex.test(valor)) {
            Swal.fire({
                icon: 'error',
                title: 'Formato incorrecto',
                text: campo.errorFormato,
            }).then(() => {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    input.focus();
                }, 500);
            });
            return;
        }
    }

    // Validar grupos de opciones
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
                }, 500);
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
                    inputOtra.focus();
                }, 500);
            });
            return;
        }
    }

    // Guardar datos y generar archivo JSON
    const datos = {
        carrera: document.getElementById('carrera').value,
        primer_nombre: document.getElementById('primer_nombre').value,
        segundo_nombre: document.getElementById('primer_nombre').value ?? '',
        primer_apellido: document.getElementById('primer_apellido').value,
        segundo_apellido: document.getElementById('segundo_apellido').value,
        tipo_documento: document.getElementById('tipo_documento').value,
        numero_documento: document.getElementById('numero_documento').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value ?? '0000000',
        celular: document.getElementById('celular').value,
        sexo_biologico: document.getElementById('sexo_biologico').value,
        estado_civil: document.getElementById('estado_civil').value,
        Pais: document.getElementById('Pais').value,
        ciudad: document.getElementById('ciudad').value,
        direccion: document.getElementById('direccion').value,
        hijos: document.querySelector('input[name="hijos"]:checked').value,
        poblacion: document.querySelector('input[name="Poblacion"]:checked').value,
        discapacidad: document.querySelector('input[name="Discapacidad"]:checked').value,
        otraDiscapacidad: document.getElementById("otraDiscapacidadInput")?.value || '',
        trabajo: document.querySelector('input[name="Trabajo"]:checked').value
    };

    const datosJson = JSON.stringify(datos);
    const blob = new Blob([datosJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'Formulario_de_Inscripción_a_Carrera.json';
    enlace.click();
    URL.revokeObjectURL(url);

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
