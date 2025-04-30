  //codigo para hacer que la imagen se muestre de forma random.  Revisarlo con los compañeros si les gusta la funcion

  const mascotas  = [
    {imagen:"style/imagen/perro1.png", historia: "Soy Max. Vivía amarrado en un patio olvidado. Me rescataron y descubrí que la vida puede ser bonita. "},
    {imagen:"style/imagen/gato2.png",historia: "Soy Miso. Me encontraron solo en un parque, temblando de miedo. Hoy solo busco un hogar donde confiar de nuevo."},
    {imagen:"style/imagen/gato1.png",historia: "Me llamo Luna. Nací en una bodega abandonada, esquivando peligros. Ahora sueño con dormir tranquila en tu sofá."},
    {imagen:"style/imagen/perro2.png",historia: "Me dicen Coco. Pasé meses debajo de un puente. Hoy busco una familia que me vea como parte de su historia. "},
    {imagen:"style/imagen/perro3.png",historia: "Soy Rocky. Vagaba por la carretera, sin rumbo ni dueño. Ahora quiero caminar a tu lado todos los días. "},
    {imagen:"style/imagen/perroygato.png", historia: "Somos Lía y Dante. Nos encontramos en la calle y nunca nos separamos. Si nos adoptas juntos, tendrás dos corazones agradecidos. "},
    {imagen:"style/imagen/quienes-somos.png", historia: "Rescatamos animales que lo han perdido todo y les damos una segunda oportunidad. Aquí, tú puedes ser el final feliz que esperan. "}
  
  ];


  const imgMascota = document.getElementById('mascota-aleatoria');
  const historiaMascota = document.getElementById("historia-mascota");

  function mostrarMascotaAleatoria() {
    const indice = Math.floor(Math.random() * mascotas.length);
    const mascotaSeleccionada = mascotas[indice];
  
    imgMascota.src = mascotaSeleccionada.imagen;
    historiaMascota.textContent = mascotaSeleccionada.historia;
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
  