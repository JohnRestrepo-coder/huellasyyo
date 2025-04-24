function emailJs(){
    const formulario = document.querySelector(".form");
    const mensaje = document.getElementById("mensaje-saludo");
   
    formulario.addEventListener("submit", async (evento) => {
      evento.preventDefault();
   
      const nombre = evento.target.nombre.value.trim();
      const correo = evento.target.correo.value;
      const mensajeTexto = evento.target.mensaje.value;
   
      const datos = {
        nombre,
        email: correo,
        mensaje: mensajeTexto,
      };
   
      const serviceID = "service_3vlem8t";
      const templateID = "template_5vaq0xk";
   
      try {
        await emailjs.send(serviceID, templateID, datos);
        alert("Gracias por contactarnos");
   
       
        if (nombre) {
          mensaje.textContent = `¡Hola ${nombre}! ⚡ Gracias por enviar tus datos, nos contactaremos pronto contigo.`;
        } else {
          mensaje.textContent = `¡Gracias por tu mensaje! Te responderé pronto.`;
        }
   
       
        formulario.reset();
      } catch (error) {
        console.log("Error al enviar mensaje:", error);
      }
    });
  }
   
  emailJs();
   
   