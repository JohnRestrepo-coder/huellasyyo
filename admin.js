document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.form-container');
  const listaMascotas = document.getElementById('listaMascotas'); 
  const verMascotasBtn = document.getElementById('verMascotasBtn');
  const volverFormularioBtn = document.getElementById('volverFormularioBtn');
  const modal = document.getElementById('exampleModal');
  const seccionMascotas = document.getElementById('seccion-mascotas');
  const contenedorCards = document.getElementById('contenedor-cards');

  const cargarMascotas = () => {
    contenedorCards.innerHTML = ''; 
    const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];

    mascotasGuardadas.forEach((mascota, index) => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card">
          <img src="${mascota.imagen}" class="card-img-top" alt="Mascota">
          <div class="card-body">
            <h5 class="card-title">${mascota.nombre}</h5>
            <p class="card-text">
              <strong>Especie:</strong> ${mascota.especie}<br>
              <strong>Raza:</strong> ${mascota.raza} / ${mascota.razaMixta}<br>
              <strong>Edad:</strong> ${mascota.edad} años<br>
              <strong>Carácter:</strong> ${mascota.caracter}
            </p>
            <button class="btn btn-danger eliminar" data-index="${index}">Eliminar</button>
          </div>
        </div>
      `;

      contenedorCards.appendChild(col);
    });
  };

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nuevaMascota = {
      nombre: document.getElementById('nombre').value,
      sexo: document.getElementById('sexo').value,
      especie: document.getElementById('especie').value,
      raza: document.getElementById('raza').value,
      razaMixta: document.getElementById('raza-mixta').value,
      edad: document.getElementById('edad').value,
      tamano: document.getElementById('tamano').value,
      color: document.getElementById('color').value,
      caracter: document.getElementById('caracter').value,
      ninos: document.getElementById('ninos').value,
      otrasMascotas: document.getElementById('otras-mascotas').value,
      vacunado: formulario.querySelector('input[name="vacunado"]').checked,
      castrado: formulario.querySelector('input[name="castrado"]').checked,
      soloCasa: formulario.querySelector('input[name="solo-casa"]').checked,
      viajaAuto: formulario.querySelector('input[name="viaja-auto"]').checked,
      vivienda: document.getElementById('vivienda').value,
      historial: document.getElementById('historial').value,
      cuidador: document.getElementById('cuidador').value,
      tiempo: document.getElementById('tiempo').value,
      adiestramiento: document.getElementById('adiestramiento').value,
      imagen: document.getElementById('imagen').value
    };

    const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];
    mascotasGuardadas.push(nuevaMascota);
    localStorage.setItem('mascotas', JSON.stringify(mascotasGuardadas));

    formulario.reset();
    cargarMascotas();
  });

 
  contenedorCards.addEventListener('click', function (e) {
    if (e.target.classList.contains('eliminar')) {
      const index = e.target.getAttribute('data-index'); 
      const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];
      
      mascotasGuardadas.splice(index, 1);
      
     
      localStorage.setItem('mascotas', JSON.stringify(mascotasGuardadas));
      
      
      cargarMascotas();
    }
  });

 
  verMascotasBtn.addEventListener("click", () => {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
    seccionMascotas.style.display = "block";
    cargarMascotas();
  });


  volverFormularioBtn.addEventListener("click", () => {
    seccionMascotas.style.display = "none";
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  });

  cargarMascotas();
});
