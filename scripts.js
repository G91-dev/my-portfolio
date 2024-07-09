window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');  // Corregido el selector del modal
    const btn = document.getElementById('llamar-btn');
    const span = document.getElementsByClassName('close')[0];

    // Cierra el modal al hacer clic en el botón de cerrar
    span.onclick = function() {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    // Cierra el modal al hacer clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    }

    // Abre el modal al hacer clic en el botón
    btn.onclick = function(event) {
        event.preventDefault(); // Evitar comportamiento por defecto del enlace
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }
});




// Función para validar y enviar el formulario por correo electrónico
function enviarFormulario(nombre, email, telefono, consulta) {
    // Aquí deberías implementar el código para enviar el correo electrónico
    // Esta función podría usar servicios de backend como Node.js con nodemailer,
    // o enviar datos a un servicio como Google Sheets y luego procesarlos.

    // Ejemplo de implementación ficticia:
    console.log("Enviando formulario...");
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Teléfono: " + telefono);
    console.log("Consulta: " + consulta);

    // Aquí se podría implementar la lógica para enviar el correo electrónico
    // utilizando una API o servicio adecuado.
}

// Obtener el formulario y el botón de enviar
var contactForm = document.getElementById("contactForm");
var enviarBtn = document.getElementById("enviarBtn");

// Manejar el clic en el botón de enviar
enviarBtn.onclick = function() {
    // Obtener los valores de los campos del formulario
    var nombre = contactForm.elements["nombre"].value;
    var email = contactForm.elements["email"].value;
    var telefono = contactForm.elements["telefono"].value;
    var consulta = contactForm.elements["consulta"].value;

    // Validar que los campos obligatorios estén completos
    if (nombre && consulta && email) {
        // Llamar a la función para enviar el formulario por correo electrónico
        enviarFormulario(nombre, email, telefono, consulta);

        // Limpiar el formulario después de enviar
        contactForm.reset();
        
        // Aquí podrías agregar un mensaje de confirmación o redirección si lo deseas
        alert("¡Formulario enviado correctamente!");
    } else {
        alert("Por favor completa los campos obligatorios: Nombre, Email y Consulta.");
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const qElement = document.getElementById("translate");
    const firmaElement = document.getElementById("firma");

    let hoverTimeout;

    qElement.addEventListener("mouseenter", function() {
        hoverTimeout = setTimeout(function() {
            qElement.style.opacity = '0';
            firmaElement.style.opacity = '0';
            setTimeout(function() {
                qElement.innerHTML = "Kindergarten students have English classes every day, from Monday to Friday. We incorporate the language in an easy, fun, and highly participatory way.";
                firmaElement.innerHTML = "-Miss Silvia Alegre<br>Principal";
                qElement.style.opacity = '1';
                firmaElement.style.opacity = '1';
            }, 1000); // Espera a que la transición de opacidad termine antes de cambiar el contenido
        }, 1000); // Cambia el contenido después de 1 segundo de hover
    });

    qElement.addEventListener("mouseleave", function() {
        clearTimeout(hoverTimeout);
        qElement.style.opacity = '0';
        firmaElement.style.opacity = '0';
        setTimeout(function() {
            qElement.innerHTML = "Los alumnos de inicial tienen clases de inglés todos los días y sin excepciones.<br>Insertamos el idioma de una forma fácil, divertida, dinámica y netamente participativa.";
            firmaElement.innerHTML = "-Miss Silvia Alegre<br>Directora";
            qElement.style.opacity = '1';
            firmaElement.style.opacity = '1';
        }, 1000); // Espera a que la transición de opacidad termine antes de cambiar el contenido de nuevo
    });
});



