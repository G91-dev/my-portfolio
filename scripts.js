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
        }, 500); // Cambia el contenido después de 1 segundo de hover
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


document.getElementById('enviarBtn').addEventListener('click', async function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const consulta = document.getElementById('consulta').value;
  
    // Asegúrate de que los campos no estén vacíos
    if (!nombre || !email || !telefono || !consulta) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Prepara los datos para enviarlos
    const datos = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      consulta: consulta
    };
  
    // Realiza la solicitud fetch a la web app
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxflPBdTJWQU_0k-2x42nLFI89JM_qpGRHmGvez8CMMVgqqiIvy395NWGe1xOXyVzMd/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
  
      const result = await response.json();
  
      // Verifica si la respuesta fue exitosa
      if (result.success) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes limpiar los campos si lo deseas
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('consulta').value = '';
      } else {
        alert('Error al enviar el formulario. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario. Inténtalo nuevamente.');
    }
  });
  
