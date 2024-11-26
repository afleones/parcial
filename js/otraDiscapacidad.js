document.querySelectorAll('input[name="Discapacidad"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const otraDiscapacidadDiv = document.getElementById('otraDiscapacidad');
        if (this.value === "Otra") {
            otraDiscapacidadDiv.style.display = 'block';
        } else {
            otraDiscapacidadDiv.style.display = 'none';
        }
    });
});
