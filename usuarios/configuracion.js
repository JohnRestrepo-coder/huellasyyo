import Validator from "../utils/validator.js"

const formulario = document.querySelector('form');
const imagen = document.getElementById('imagen');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const confirmarPassword = document.getElementById('confirmarPassword');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordConfirm = document.getElementById('togglePasswordConfirm');
const validator = new Validator();
const editar = document.getElementById("editar")
const campos = document.querySelectorAll('.habilitar-campo');
const guadarBoton = document.getElementById("guardar-cambios")
const atras = document.getElementById("atras")
const sidebar = document.getElementById("sidebar")
const contenido = document.getElementById("contenido")


validator.addField('imagen', [
  { rule: 'required', message: 'La foto de perfil es obligatoria.' }
]);

validator.addField('nombre', [
  { rule: 'required', message: 'El nombre es obligatorio.' },
  { rule: 'onlyLetters', message: 'El nombre solo debe contener letras.' }
]);

validator.addField('telefono', [
  { rule: 'required', message: 'El telefono es obligatorio.' },
  { rule: 'phone', message: 'El telefono debe tener 10 numeros sin letras.' }
]);

validator.addField('correo', [
  { rule: 'required', message: 'El correo es obligatorio.' },
  { rule: 'email', message: 'Correo inválido.' }
]);

validator.addField('password', [
  { rule: 'passwordEmpy', message: 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un símbolo.' }
]);

validator.addField('confirmarPassword', [
  { rule: 'match', params: 'password', message: 'Las contraseñas no coinciden.' }
]);

window.onload = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (!usuariosGuardados) {
    window.location.href = '../index.html';
  }

  document.getElementById('contenedorgeneral').classList.add('visible');
  if (usuariosGuardados.idTipoUsuario !== 1) {
    document.getElementById('eliminarCuenta').classList.add('d-none');
  }
  agregarData()
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validator.validateAll()) return;

  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));

  if (!usuarioLogeado) {
    Swal.fire({
      title: 'Error',
      text: 'No hay un usuario logeado.',
      icon: 'error',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    return;
  }

  const nombreNuevo = nombre.value.trim();
  const telefonoNuevo = telefono.value.trim();
  const correoNuevo = correo.value.trim();
  const passwordNueva = password.value.trim();
  const imagenNueva = imagen.value.trim()

  // Verificar si no hubo cambios
  const sinCambios =
    usuarioLogeado.nombre === nombreNuevo &&
    usuarioLogeado.telefono === telefonoNuevo &&
    usuarioLogeado.correo === correoNuevo &&
    usuarioLogeado.imagenUsuario === imagenNueva &&
    (passwordNueva === '' || usuarioLogeado.password === passwordNueva);

  if (sinCambios) {
    Swal.fire({
      title: 'Sin cambios',
      text: 'No se detectaron cambios en tu perfil.',
      icon: 'info',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    return;
  }

  const correoYaExiste = usuariosGuardados.find(usuario =>
    usuario.correo === correoNuevo && usuario.correo !== usuarioLogeado.correo
  );

  if (correoYaExiste) {
    Swal.fire({
      title: '¡Error al editar el usuario!',
      text: 'El correo electrónico ya está registrado por otro usuario.',
      icon: 'error',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    return;
  }

  const index = usuariosGuardados.findIndex(usuario => usuario.correo === usuarioLogeado.correo);

  if (index !== -1) {
    const nuevaPassword = passwordNueva === ''
      ? usuariosGuardados[index].password
      : passwordNueva;

    usuariosGuardados[index] = {
      ...usuariosGuardados[index],
      nombre: nombreNuevo,
      telefono: telefonoNuevo,
      correo: correoNuevo,
      password: nuevaPassword,
      imagenUsuario: imagenNueva
    };

    // Actualizar en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    localStorage.setItem('usuarioLogeado', JSON.stringify(usuariosGuardados[index]));

    Swal.fire({
      title: '¡Actualización exitosa!',
      text: 'Tu perfil ha sido actualizado.',
      icon: 'success',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        window.location.reload();
      }
    });

  } else {
    Swal.fire({
      title: 'Error',
      text: 'No se pudo encontrar el usuario para actualizar.',
      icon: 'error',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
  }
});




// manejo de visibilidad de password
togglePassword.addEventListener('click', () => {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';

  togglePassword.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});


togglePasswordConfirm.addEventListener('click', () => {
  const isPassword = confirmarPassword.type === 'password';
  confirmarPassword.type = isPassword ? 'text' : 'password';

  togglePasswordConfirm.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});

//manejo boton editar
editar.addEventListener('click', () => cambioEstadoFormulario());

//manejo carga de data por defecto
const agregarData = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  nombre.value = usuariosGuardados.nombre
  telefono.value = usuariosGuardados.telefono
  correo.value = usuariosGuardados.correo
  imagen.value = usuariosGuardados.imagenUsuario
  validator.clearValidation()
}

const cambioEstadoFormulario = () => {
  const editando = campos[0].hasAttribute('disabled');

  campos.forEach(campo => {
    campo.toggleAttribute('disabled');
  });

  if (editando) {
    editar.classList.add('text-danger');
  } else {
    editar.classList.remove('text-danger');
  }

  guadarBoton.classList.toggle('d-none');

  editar.innerHTML = editando
    ? 'Cancelar <i class="fa-solid fa-xmark"></i>'
    : 'Editar <i class="fa-solid fa-pen-to-square"></i>';
  agregarData()
}

document.getElementById('eliminarCuenta').addEventListener('click', () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará tu cuenta permanentemente. ¡No se puede deshacer!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    customClass: {
      popup: 'mi-alerta-personalizada',
      confirmButton: 'ok-personalizado',
      cancelButton: 'cancelar-personalizado',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

      usuarios = usuarios.filter(usuario => usuario.correo !== usuarioLogeado?.correo);

      // Guardamos la nueva lista y eliminamos el usuario logeado
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      localStorage.removeItem('usuarioLogeado');

      Swal.fire({
        title: 'Cuenta eliminada',
        text: 'Tu cuenta ha sido eliminada exitosamente.',
        icon: 'success',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      }).then(() => {
        window.location.reload();
      });
    }
  });
});


atras.addEventListener('click', () => {
  sidebar.classList.toggle("ocultar")
  contenido.classList.toggle("ocultar")
});