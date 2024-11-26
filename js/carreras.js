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
