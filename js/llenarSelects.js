// estado civil
const opcionesEstadoCivil = [
    { value: "soltero", text: "Soltero/a" },
    { value: "casado", text: "Casado/a" },
    { value: "divorciado", text: "Divorciado/a" },
    { value: "viudo", text: "Viudo/a" }
];

const estadoCivilSelect = document.getElementById("estado_civil");

opcionesEstadoCivil.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    estadoCivilSelect.appendChild(optionElement);
});

// carreras
document.addEventListener("DOMContentLoaded", function() {
    const carreras = [
        "administración de empresas",
        "bacteriología",
        "contaduría pública",
        "derecho",
        "enfermería",
        "ingeniería de sistemas",
        "instrumentación quirúrgica | cartagena",
        "licenciatura en educación infantil",
        "medicina",
        "odontología",
        "tecnología en atención prehospitalaria",
        "tecnología en estética y cosmetología",
        "tecnología en mecánica dental",
        "trabajo social"
    ];

    const carreraSelect = document.getElementById("carrera");

    // Llenar el select con las opciones de carreras
    carreras.forEach(carrera => {
        const option = document.createElement("option");
        option.value = carrera;
        option.textContent = carrera;
        carreraSelect.appendChild(option);
    });
});

// sexo biológico
const opcionesSexo = [
    { value: "masculino", text: "Masculino" },
    { value: "femenino", text: "Femenino" }
];

// Llenar dinámicamente el select
const sexoSelect = document.getElementById("sexo_biologico");

opcionesSexo.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    sexoSelect.appendChild(optionElement);
});

// tipo Documentos
const tipoDocumentos = [
    { value: "CC - Cédula de Ciudadanía", text: "CC - Cédula de Ciudadanía" },
    { value: "CE - Cédula de Extranjería", text: "CE - Cédula de Extranjería" },
    { value: "TI - Tarjeta de Identidad", text: "TI - Tarjeta de Identidad" },
    { value: "RC - Registro Civil", text: "RC - Registro Civil" },
    { value: "PEP - Permiso Especial de Permanencia", text: "PEP - Permiso Especial de Permanencia" },
    { value: "PT - Permiso Temporal", text: "PT - Permiso Temporal" },
    { value: "PSP - Pasaporte", text: "PSP - Pasaporte" },
];

// Llenar dinámicamente el select
const tipoDocumentoSelect = document.getElementById("tipo_documento");

tipoDocumentos.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    tipoDocumentoSelect.appendChild(optionElement);
});


