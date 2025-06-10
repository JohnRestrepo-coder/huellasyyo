async function renderizarMatches() {
  try {
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));
    if (!usuarioLogeado) {
      window.location.href = '../index.html';
      return;
    }

    document.getElementById('contenedorgeneral').classList.add('visible');
    const matchesContainer = document.getElementById("match-list");
    matchesContainer.innerHTML = "";
    const token = localStorage.getItem("tokenUsuario");

    const response = await fetch("https://njejgfaqpr.us-east-1.awsapprunner.com/realizaMatch/buscarMatches/" + usuarioLogeado.idUsuario, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const matches = await response.json();

    matches.forEach(match => {
      const link = `../galeria/vista_mascota.html?nombre=${encodeURIComponent(match.mascota.idMascota)}`;
      const card = document.createElement("div");
      card.classList.add("mb-1");
      card.innerHTML = `
        <div class="card">
          <h5 class="card-title titulo-card text-center">${match.mascota.nombre}</h5>
          <img src="${match.mascota.urlImagenMascota}" class="card-img-top img-card-uniforme" style="height: 150px; object-fit: cover;" alt="${match.mascota.nombre}" />
          <div class="card-body">
            <p class="card-text texto-mini text-center">${match.mascota.edad} años</p>
              <a href="${link}" class="btn btn-cardperfil btn-sm">Ver</a>
              <a class="btn btn-cardperfil btn-sm btn-adoptar" data-mascota-id="${match.mascota.idMascota}" data-mascota-nombre="${match.mascota.nombre}">Adoptar</a>
          </div>
        </div>
      `;
      matchesContainer.appendChild(card);
    });

    // Agregar event listeners a todos los botones de adopción
    document.querySelectorAll('.btn-adoptar').forEach(button => {
      button.addEventListener('click', async (e) => {
        const mascotaId = e.target.getAttribute('data-mascota-id');
        const mascotaNombre = e.target.getAttribute('data-mascota-nombre');
        await iniciarProcesoAdopcion(mascotaId, mascotaNombre);
      });
    });

  } catch (error) {
    console.error('Error al renderizar matches:', error);
  }
}

async function iniciarProcesoAdopcion(mascotaId, mascotaNombre) {
  try {
    const result = await Swal.fire({
      title: '¿Iniciar proceso de adopción?',
      text: `¿Estás seguro que quieres adoptar a ${mascotaNombre}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, adoptar',
      cancelButtonText: 'No, cancelar',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });

    if (result.isConfirmed) {
      await procesarAdopcion(mascotaId, mascotaNombre);
    }
  } catch (error) {
    console.error('Error en el proceso de adopción:', error);
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error al procesar la adopción',
      icon: 'error',

      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
  }
}

async function procesarAdopcion(mascotaId, mascotaNombre) {
  try {
    const token = localStorage.getItem("tokenUsuario");
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));

    const response = await fetch('https://njejgfaqpr.us-east-1.awsapprunner.com/procesoAdopcion/usuario/' + usuarioLogeado.idUsuario + '/mascota/ ' + mascotaId + '/estado/PENDIENTE', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    Swal.fire({
      title: '¡Éxito!',
      text: `Proceso de adopción iniciado para ${mascotaNombre}, un administrador se contactara con ud para seguir con el proceso`,
      icon: 'success',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });

    const datos = {
      name: usuarioLogeado.nombreCompleto,
      time: Date.now(),
      message: 'Quiero adoptar a ' + mascotaNombre,
      title: 'Solicitud de Adopción',
      email: usuarioLogeado.correo
    };

    const serviceID = 'default_service';
    const templateID = 'template_fonq9bj';

    emailjs.send(serviceID, templateID, datos)

    await renderizarMatches();

  } catch (error) {
    console.error('Error al procesar adopción:', error);
    throw error;
  }
}

atras.addEventListener('click', () => {
  sidebar.classList.toggle("ocultar")
  contenido.classList.toggle("ocultar")
});

window.addEventListener('load', async () => {
  await renderizarMatches();
});