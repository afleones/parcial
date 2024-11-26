document.getElementById('formInscCar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Mostrar alerta de éxito
    Swal.fire({
        title: 'Formulario enviado',
        text: 'Se ha enviado su formulario correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir a gracias.html cuando el usuario presione "Aceptar"
            window.location.href = 'gracias.html';
        }
    });
});
