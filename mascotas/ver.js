const contenedor = document.getElementById('lista-mascotas');
const btnEliminarTodo = document.getElementById('eliminarTodo');
const contenido = document.getElementById("contenido")

document.addEventListener('DOMContentLoaded', async () => {
  try {
     const response = await fetch ("http://localhost:8080/mascota/TraerMascota")
  let mascotas = await response.json() || [];
  renderMascotas(mascotas);
  generarBotonEliminarTodo(mascotas);
    
  } catch (error) {
    console.log(error);    
    
  }
 
});


window.onload = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (!usuariosGuardados) {
    window.location.href = '../index.html';
  }

  if (usuariosGuardados.tipoUsuario != "Admin") {
    window.location.href = '../index.html';
  }

  document.getElementById('contenedorgeneral').classList.add('visible');
}

atras.addEventListener('click', () => {
  sidebar.classList.toggle("ocultar")
  contenido.classList.toggle("ocultar")
});

function renderMascotas(mascotas) {
  contenedor.innerHTML = '';
  if (mascotas.length === 0) {
    contenedor.innerHTML = '<p class="text-center">No hay mascotas registradas.</p>';
    return;
  }

  mascotas.forEach((mascota, index) => {
    const div = document.createElement('div');
    div.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');


    const imagen = mascota.urlImagenMascota || 'https://ninos.kiddle.co/images/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/300px-Labrador_Retriever_%281210559%29.jpg';

    div.innerHTML = `
        <div class="card h-100 tarjeta-custom">
          <img src="${imagen}" class="card-img-top imagen-mascota" alt="Foto de ${mascota.nombre}">
          <div class="card-body">
            <h5 class="card-title titulo-mascota">${mascota.nombre}</h5>
            <p class="card-text texto-mascota">
              <strong>Especie:</strong> ${mascota.especie}<br>
              <strong>Raza:</strong> ${mascota.raza}<br>
              <strong>Edad:</strong> ${mascota.edad} año(s)<br>
              <strong>Tamaño:</strong> ${mascota.tamano}<br>              
              <strong>Carácter:</strong> ${mascota.caracter}<br>              
            </p>
            <button class="btn boton-volver-formulario editar-boton" data-index="${mascota.idMascota}" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
            <!--- <button class="btn eliminar-boton" data-index="${mascota.idMascota}">Eliminar</button> --->
          </div>
        </div>
      `;

    contenedor.appendChild(div);
  });

  document.querySelectorAll('.eliminar-boton').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.dataset.index;

      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará la mascota y no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
          cancelButton: 'cancelar-personalizado',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          mascotas.splice(index, 1);
          localStorage.setItem('mascotas', JSON.stringify(mascotas));
          renderMascotas(mascotas);
          generarBotonEliminarTodo(mascotas)
          Swal.fire({
            title: 'Eliminado',
            text: 'La mascota ha sido eliminada exitosamente.',
            icon: 'success',
            customClass: {
              popup: 'mi-alerta-personalizada',
              confirmButton: 'ok-personalizado',
            }
          });
        }
      });
    });
  });
}

const generarBotonEliminarTodo = (mascotas) => {
  if (btnEliminarTodo) {
    btnEliminarTodo.addEventListener('click', () => {
      if (!mascotas || mascotas.length === 0) {
        Swal.fire({
          title: 'Sin mascotas',
          text: 'No hay mascotas registradas para eliminar.',
          icon: 'info',
          customClass: {
            popup: 'mi-alerta-personalizada',
            confirmButton: 'ok-personalizado',
          }
        });
        return;
      }

      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esto eliminará TODAS las mascotas guardadas. Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar todo',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
          cancelButton: 'cancelar-personalizado',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('mascotas');
          mascotas = [];
          renderMascotas();

          Swal.fire({
            title: 'Eliminado',
            text: 'Todas las mascotas han sido eliminadas.',
            icon: 'success',
            customClass: {
              popup: 'mi-alerta-personalizada',
              confirmButton: 'ok-personalizado',
            }
          });
        }
      });
    });
  }
}

document.addEventListener('click', function (e) {
  const btnEliminar = e.target.closest('.eliminar-imagen');
  if (!btnEliminar) return;

  const container = document.getElementById('imagenes-container');
  if (!container) return;

  const campos = container.querySelectorAll('.position-relative.d-flex');
  const campoActual = btnEliminar.closest('.position-relative.d-flex');
  if (!campoActual) return;

  const input = campoActual.querySelector('input[type="url"]');
  if (!input) return;

  const elementoAnterior = campoActual.previousElementSibling;

  if (campos.length === 1 || campoActual === campos[0]) {
    Swal.fire({
      title: 'No se puede eliminar',
      text: 'Debes mantener al menos una imagen.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    return;
  }

  if (input.value.trim() === "") {
    if (elementoAnterior) elementoAnterior.remove();
    campoActual.remove();
    return;
  }

  Swal.fire({
    title: '¿Eliminar esta imagen?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    customClass: {
      popup: 'mi-alerta-personalizada',
      confirmButton: 'ok-personalizado',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      if (elementoAnterior) elementoAnterior.remove();
      campoActual.remove();
      Swal.fire({
        title: 'Eliminado',
        text: 'El campo de imagen ha sido eliminado.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
});

