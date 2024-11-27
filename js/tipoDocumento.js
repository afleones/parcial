// Opciones para el campo "tipoDocumentos"
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
