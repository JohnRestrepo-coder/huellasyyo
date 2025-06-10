document.addEventListener("DOMContentLoaded", async function () {

  await cargarMascotas()

  const tarjetas = document.querySelectorAll(".mascota-card");

  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", function () {
      if (tarjeta.classList.contains("is-flipped")) {
        tarjeta.classList.remove("is-flipped");
      } else {
        tarjetas.forEach(t => t.classList.remove("is-flipped"));
        tarjeta.classList.add("is-flipped");
      }
    });
  });
});



async function cargarMascotas() {
  try {
    const response = await fetch("https://njejgfaqpr.us-east-1.awsapprunner.com/mascota/TraerMascotaPortada")
    const mascotasActualizadas = await response.json() || [];
    const contenedor = document.getElementById('contenedor-mascotas').innerHTML = "";
    mascotasActualizadas.forEach(mascota => {
      crearMascotaCard(mascota)
    })

  } catch (error) {
    console.log(error);

  }
}

function crearMascotaCard(mascota) {
  const mascotaCard = document.createElement('div');
  mascotaCard.className = 'mascota-card';

  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner';

  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';

  const img = document.createElement('img');
  img.src = mascota.urlImagenMascota;
  img.alt = 'imagen de ' + mascota.nombre;

  const conocemeText = document.createElement('span');
  conocemeText.className = 'conoceme-text';
  conocemeText.textContent = '¡Conóceme!';

  cardFront.appendChild(img);
  cardFront.appendChild(conocemeText);

  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';

  const nombre = document.createElement('h3');
  nombre.textContent = mascota.nombre;

  const descripcion = document.createElement('p');
  descripcion.textContent = mascota.descripcion;

  cardBack.appendChild(nombre);
  cardBack.appendChild(descripcion);

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  mascotaCard.appendChild(cardInner);

  // Agrega la tarjeta al contenedor deseado
  const contenedor = document.getElementById('contenedor-mascotas');
  contenedor.appendChild(mascotaCard);
}
