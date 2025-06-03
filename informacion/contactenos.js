import Validator from "../utils/validator.js"

//codigo para hacer que la imagen se muestre de forma random.  Revisarlo con los compañeros si les gusta la funcion

const mascotas = [
  { imagen: "../images/perro1.png", historia: "Soy Max. Vivía amarrado en un patio olvidado. Me rescataron y descubrí que la vida puede ser bonita. " },
  { imagen: "../images/gato2.png", historia: "Soy Miso. Me encontraron solo en un parque, temblando de miedo. Hoy solo busco un hogar donde confiar de nuevo." },
  { imagen: "../images/gato1.png", historia: "Me llamo Luna. Nací en una bodega abandonada, esquivando peligros. Ahora sueño con dormir tranquila en tu sofá." },
  { imagen: "../images/perro2.png", historia: "Me dicen Coco. Pasé meses debajo de un puente. Hoy busco una familia que me vea como parte de su historia. " },
  { imagen: "../images/perro3.png", historia: "Soy Rocky. Vagaba por la carretera, sin rumbo ni dueño. Ahora quiero caminar a tu lado todos los días. " },
  { imagen: "../images/perroygato.png", historia: "Somos Lía y Dante. Nos encontramos en la calle y nunca nos separamos. Si nos adoptas juntos, tendrás dos corazones agradecidos. " },
  { imagen: "../images/quienes-somos.png", historia: "Rescatamos animales que lo han perdido todo y les damos una segunda oportunidad. Aquí, tú puedes ser el final feliz que esperan. " }

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



const form = document.getElementById('contacto');
const validator = new Validator();

validator.addField('nombre', [
  { rule: 'required', message: 'El nombre es obligatorio.' },
  { rule: 'onlyLetters', message: 'El nombre solo debe contener letras.' }
]);

validator.addField('telefono', [
  { rule: 'required', message: 'El telefono es obligatorio.' },
  { rule: 'phone', message: 'El telefono debe tener 10 numeros.' }
]);

validator.addField('correo', [
  { rule: 'required', message: 'El correo es obligatorio.' },
  { rule: 'email', message: 'Correo inválido.' }
]);

validator.addField('mensaje', [
  { rule: 'required', message: 'El mensaje es obligatorio.' },
  { rule: 'minLength', params: 5, message: 'El mensaje debe tener por lo menos 5 caracteres.' }
]);


form.addEventListener('submit', (e) => enviarFormularo(e));

const enviarFormularo = async (e) => {
  e.preventDefault();
  if (validator.validateAll()) {
    const status = document.getElementById("mensaje-saludo");
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = '¡Gracias por contactarnos! Te responderemos pronto 🐾';
        status.style.color = 'green';
        form.reset();
        validator.clearValidation()
      } else {
        status.textContent = 'Ups, algo salió mal. Inténtalo nuevamente.';
        status.style.color = 'red';
      }
    } catch (error) {
      status.textContent = 'No se pudo enviar el mensaje. Intenta más tarde.';
      status.style.color = 'red';
    }
  }
}
