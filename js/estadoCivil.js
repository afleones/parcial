// Opciones para el campo "estado_civil"
const opcionesEstadoCivil = [
    { value: "soltero", text: "Soltero/a" },
    { value: "casado", text: "Casado/a" },
    { value: "divorciado", text: "Divorciado/a" },
    { value: "viudo", text: "Viudo/a" }
];

// Llenar dinámicamente el select
const estadoCivilSelect = document.getElementById("estado_civil");

opcionesEstadoCivil.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    estadoCivilSelect.appendChild(optionElement);
});
