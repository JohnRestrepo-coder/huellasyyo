  //codigo para hacer que la imagen se muestre de forma random.  Revisarlo con los compañeros si les gusta la funcion

  const mascotas  = [
    "style/imagen/perro1.png",
    "style/imagen/gato2.png",
    "style/imagen/gato1.png",
    "style/imagen/perro2.png",
    "style/imagen/perro3.png",
    "style/imagen/perroygato.png"
  ];


  const imgMascota = document.getElementById('mascota-aleatoria');

  function mostrarMascotaAleatoria() {
    const indice = Math.floor(Math.random() * mascotas.length);
    imgMascota.src = mascotas[indice];
  }

  window.addEventListener('DOMContentLoaded', mostrarMascotaAleatoria);

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');
    const mensajeSaludo = document.getElementById('mensaje-saludo');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      const datos = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: datos,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          mensajeSaludo.textContent = '¡Gracias por contactarnos! Te responderemos pronto 🐾';
          mensajeSaludo.style.color = 'green';
          form.reset();
        } else {
          mensajeSaludo.textContent = 'Ups, algo salió mal. Inténtalo nuevamente.';
          mensajeSaludo.style.color = 'red';
        }
      })
      .catch(() => {
        mensajeSaludo.textContent = 'No se pudo enviar el mensaje. Intenta más tarde.';
        mensajeSaludo.style.color = 'red';
      });
    });
  });
  

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const mensajeSaludo = document.getElementById("mensaje-saludo");
  
    const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    const patronTelefono = /^[0-9]{7,15}$/;
  
    if (correo && patronCorreo.test(correo)) {
      mensajeSaludo.textContent = "Correo electrónico válido.";
    }
    else if (telefono && patronTelefono.test(telefono)) {
      mensajeSaludo.textContent = "Número de teléfono válido.";
    } else {
      mensajeSaludo.textContent = "Por favor, ingresa un correo electrónico o un teléfono válido.";
    }
  
    if (patronCorreo.test(correo) || patronTelefono.test(telefono)) {
      this.submit();
    }
  });
  