document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: 'Aviso importante',
        text: 'Este formulario recopilará datos personales y sensibles. Pulse "Aceptar" para continuar.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false, // No permite cerrar el modal haciendo clic fuera
        allowEscapeKey: false,   // No permite cerrar el modal con la tecla Escape
    }).then((result) => {
        if (result.isConfirmed) {
            // El usuario aceptó, continúa normalmente
            console.log("Usuario aceptó la advertencia.");
        }
    });
});
