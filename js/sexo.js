// Opciones para el campo "sexo_biológico"
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
