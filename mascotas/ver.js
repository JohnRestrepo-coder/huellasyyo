document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('lista-mascotas');
  const btnEliminarTodo = document.getElementById('eliminarTodo');
  let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];

  function renderMascotas() {
    contenedor.innerHTML = '';

    if (mascotas.length === 0) {
      contenedor.innerHTML = '<p class="text-center">No hay mascotas registradas.</p>';
      return;
    }

    mascotas.forEach((mascota, index) => {
      const div = document.createElement('div');
      div.classList.add('col-md-4', 'mb-4');

    
      const imagen = mascota.imagen || 'https://ninos.kiddle.co/images/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/300px-Labrador_Retriever_%281210559%29.jpg';

      div.innerHTML = `
        <div class="card h-100 tarjeta-custom">
          <img src="${imagen}" class="card-img-top" alt="Foto de ${mascota.nombre}">
          <div class="card-body">
            <h5 class="card-title titulo-mascota">${mascota.nombre}</h5>
            <p class="card-text texto-mascota">
              <strong>Especie:</strong> ${mascota.especie}<br>
              <strong>Raza:</strong> ${mascota.raza}<br>
              <strong>Edad:</strong> ${mascota.edad} año(s)<br>
              <strong>Tamaño:</strong> ${mascota.tamano}<br>
              <strong>Color:</strong> ${mascota.color}<br>
              <strong>Carácter:</strong> ${mascota.caracter}<br>
              <strong>Niños:</strong> ${mascota.ninos}<br>
              <strong>Otras mascotas:</strong> ${mascota.otrasMascotas}<br>
              <strong>Vacunado:</strong> ${mascota.vacunado ? 'Sí' : 'No'}<br>
              <strong>Castrado:</strong> ${mascota.castrado ? 'Sí' : 'No'}<br>
              <strong>Historial:</strong> ${mascota.historial}
            </p>
            <button class="btn eliminar-boton" data-index="${index}">Eliminar</button>
          </div>
        </div>
      `;

      contenedor.appendChild(div);
    });

    document.querySelectorAll('.eliminar-boton').forEach(btn => {
      btn.addEventListener('click', e => {
        const index = e.target.dataset.index;
        mascotas.splice(index, 1);
        localStorage.setItem('mascotas', JSON.stringify(mascotas));
        renderMascotas();
      });
    });
  }

  if (btnEliminarTodo) {
    btnEliminarTodo.addEventListener('click', () => {
      localStorage.removeItem('mascotas');
      mascotas = [];
      renderMascotas();
    });
  }

  renderMascotas();
});
