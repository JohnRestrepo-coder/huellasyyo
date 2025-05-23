import Validator from "../utils/validator.js";
const validator = new Validator();

validator.addField('nombre', [
  { rule: 'required', message: 'El nombre es obligatorio.' },
  { rule: 'onlyLetters', message: 'El nombre solo debe contener letras.' }
]);

validator.addField('edad', [
  { rule: 'required', message: 'La edad es obligatoria.' },
  { rule: 'number', message: 'La edad debe ser un número.' }
]);


validator.addField('color', [
  { rule: 'required', message: 'El color es obligatorio.' },
  { rule: 'onlyLetters', message: 'El color solo debe contener letras.' }
]);

validator.addField('historial', [
  { rule: 'required', message: 'El historial medico es obligatorio.' }
]);

validator.addField('imagen', [
  { rule: 'required', message: 'Debe ingresar la URL de una imagen.' }
]);

validator.addField('imagen[]', [
  { rule: 'required', message: 'Debe ingresar la URL de una imagen.' },
]);


document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.form-container');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (validator.validateAll()) {
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
        imagen: document.getElementById('imagen').value,
        listaImagenes: obtenerImagenes()
      };

      const mascotasGuardadas = JSON.parse(localStorage.getItem('mascotas')) || [];

      const indexEditar = formulario.getAttribute('data-edit-index');

      if (indexEditar !== null && indexEditar !== '') {
        mascotasGuardadas[indexEditar] = nuevaMascota;
        formulario.removeAttribute('data-edit-index');
      } else {
        mascotasGuardadas.push(nuevaMascota);
      }

      localStorage.setItem('mascotas', JSON.stringify(mascotasGuardadas));
      formulario.reset();

      Swal.fire({
        title: indexEditar !== null && indexEditar !== '' ? '¡Edición exitosa!' : '¡Registro exitoso!',
        text: indexEditar !== null && indexEditar !== '' ? 'La mascota ha sido actualizada correctamente.' : 'La mascota ha sido registrada correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  });
});


document.getElementById('agregarImagen').addEventListener('click', () => {
  const container = document.getElementById('imagenes-container');

  const nuevoCampo = document.createElement('div');
  nuevoCampo.className = 'form-group mb-3';

  nuevoCampo.innerHTML = `
  <label>Imagen adicional:</label>
  <div class="position-relative d-flex align-items-start flex-nowrap gap-1 mb-3">
    <div class="d-flex flex-column flex-grow-1">
      <input type="url" name="imagen[]" class="form-control" placeholder="https://...">
      <div class="invalid-feedback" style="padding-top: .25rem;"></div>
    </div>
    <button type="button" class="btn btn-danger d-flex justify-content-center align-items-center p-1 m-0 eliminar-imagen"
      style="width: 38px; height: 38px;" aria-label="Eliminar imagen">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>`;


  container.appendChild(nuevoCampo);

  const nuevoInput = nuevoCampo.querySelector('input');
  nuevoInput.addEventListener('input', () => validator.validateField('imagen[]'));
  nuevoInput.addEventListener('change', () => validator.validateField('imagen[]'));
});


function obtenerImagenes() {
  const inputs = document.querySelectorAll('input[name="imagen[]"]');
  const urls = [];

  inputs.forEach(input => {
    const valor = input.value.trim();
    if (valor !== '') {
      urls.push(valor);
    }
  });

  return urls;
}

document.getElementById("mostrarModal").addEventListener("click", () => {
  const formulario = document.querySelector('.form-container');
  formulario.reset();
  const container = document.getElementById('imagenes-container');
  container.innerHTML = ""
  validator.clearValidation()

  const nuevoCampo = document.createElement('div');
  nuevoCampo.className = 'form-group mb-3';

  nuevoCampo.innerHTML = `
  <label>Imagen adicional:</label>
  <div class="position-relative d-flex align-items-start flex-nowrap gap-1 mb-3">
    <div class="d-flex flex-column flex-grow-1">
      <input type="url" name="imagen[]" class="form-control" placeholder="https://...">
      <div class="invalid-feedback" style="padding-top: .25rem;"></div>
    </div>
  </div>`;


  container.appendChild(nuevoCampo);

  const nuevoInput = nuevoCampo.querySelector('input');
  nuevoInput.addEventListener('input', () => validator.validateField('imagen[]'));
  nuevoInput.addEventListener('change', () => validator.validateField('imagen[]'));

})


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('editar-boton')) {
    const index = e.target.getAttribute('data-index');
    cargarFormularioParaEdicion(index);
    validator.clearValidation()
  }
});


function cargarFormularioParaEdicion(index) {
  let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
  const mascota = mascotas[index]; // Tu array de mascotas

  // Llenar el formulario con los datos
  document.getElementById('nombre').value = mascota.nombre;
  document.getElementById('sexo').value = mascota.sexo;
  document.getElementById('edad').value = mascota.edad;
  document.getElementById('especie').value = mascota.especie;
  document.getElementById('raza').value = mascota.raza;
  document.getElementById('raza-mixta').value = mascota.razaMixta || "";
  document.getElementById('tamano').value = mascota.tamano;
  document.getElementById('color').value = mascota.color;
  document.getElementById('caracter').value = mascota.caracter;
  document.getElementById('ninos').value = mascota.ninos;
  document.getElementById('tiempo').value = mascota.tiempo;
  document.getElementById('adiestramiento').value = mascota.adiestramiento;
  document.getElementById('otras-mascotas').value = mascota.otrasMascotas;
  document.getElementById('vivienda').value = mascota.vivienda;
  document.getElementById('cuidador').value = mascota.cuidador;
  document.getElementById('historial').value = mascota.historial;
  document.getElementById('imagen').value = mascota.imagen || "";

  // Checkboxes
  document.querySelector('[name="vacunado"]').checked = mascota.vacunado;
  document.querySelector('[name="castrado"]').checked = mascota.castrado;
  document.querySelector('[name="solo-casa"]').checked = mascota.soloCasa;
  document.querySelector('[name="viaja-auto"]').checked = mascota.viajaAuto;

  const imagenesContainer = document.getElementById('imagenes-container');
  imagenesContainer.innerHTML = '';

  if (Array.isArray(mascota.listaImagenes) && mascota.listaImagenes.length > 0) {
    mascota.listaImagenes.forEach((url, i) => {
      const div = document.createElement('div');
      div.classList.add('form-group', 'mb-3');

      div.innerHTML = `
          <label>Imagen adicional:</label>
          <div class="position-relative d-flex align-items-start flex-nowrap gap-1 mb-3">
            <div class="d-flex flex-column flex-grow-1">
              <input type="url" name="imagen[]" class="form-control" placeholder="https://..." value="${url || ''}">
              <div class="invalid-feedback" style="padding-top: .25rem;"></div>
            </div>
            <button type="button" class="btn btn-danger d-flex justify-content-center align-items-center p-1 m-0 eliminar-imagen"
              style="width: 38px; height: 38px;" aria-label="Eliminar imagen">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>`;
      imagenesContainer.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('form-group', 'mb-3');

    div.innerHTML = `
      <label>URL de imagen de la mascota:</label>
      <input type="url" name="imagen[]" class="form-control" placeholder="https://...">
      <div class="invalid-feedback"></div>
    `;

    imagenesContainer.appendChild(div);
  }


  document.getElementById('formulario-mascota').setAttribute('data-edit-index', index);
}

