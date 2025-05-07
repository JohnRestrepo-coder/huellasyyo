document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.form-container');
  const listaMascotas = document.getElementById('listaMascotas');

  const cargarMascotas = () => {
    listaMascotas.innerHTML = '';
    const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];

    mascotasGuardadas.forEach((mascota, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${mascota.nombre}</strong> - ${mascota.especie}, ${mascota.raza}
        <button class="eliminar" data-index="${index}">Eliminar</button>
      `;
      listaMascotas.appendChild(li);
    });
  };

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nuevaMascota = {
      nombre: document.getElementById('nombre').value,
      sexo: formulario.querySelector('input[name="sexo"]:checked')?.value || 'No especificado',
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
      adiestramiento: document.getElementById('adiestramiento').value
    };

    const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];
    mascotasGuardadas.push(nuevaMascota);
    localStorage.setItem('mascotas', JSON.stringify(mascotasGuardadas));

    formulario.reset();
    cargarMascotas();
  });

  listaMascotas.addEventListener('click', function (e) {
    if (e.target.classList.contains('eliminar')) {
      const index = e.target.getAttribute('data-index');
      const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];
      mascotasGuardadas.splice(index, 1);
      localStorage.setItem('mascotas', JSON.stringify(mascotasGuardadas));
      cargarMascotas();
    }
  });

  cargarMascotas();
});
