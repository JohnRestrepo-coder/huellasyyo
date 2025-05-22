import Validator from "./validator.js"

const formulario = document.querySelector('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const confirmarPassword = document.getElementById('confirmarPassword');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordConfirm = document.getElementById('togglePasswordConfirm');
const validator = new Validator();

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
  { rule: 'required', message: 'El campo contraseña no puede estar vacio.' },
  { rule: 'password', message: 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un símbolo.' }
]);

validator.addField('confirmarPassword', [
  { rule: 'required', message: 'El campo confirmacion contraseña es obligatorio.' },
  { rule: 'match', params: 'password', message: 'Las contraseñas no coinciden.' }
]);

window.onload = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (usuariosGuardados) {
    window.location.href = 'inicio.html';
  }

  document.getElementById('login-container').classList.add('visible');

}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validator.validateAll()) {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioRegistrado = usuariosGuardados.find(usuario => usuario.correo === correo.value.trim())

    if (usuarioRegistrado) {
      Swal.fire({
        title: '¡Error al crear el usuario!',
        text: 'El correo electronico ya esta registrado en el sistema.',
        icon: 'error',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      });
      return;
    }

    const nuevoUsuario = { nombre: nombre.value.trim(), telefono: telefono.value.trim(), correo: correo.value.trim(), password: password.value, idTipoUsuario: 1, preferencias: [], imagenUsuario: "https://firebasestorage.googleapis.com/v0/b/dwb-archivos.appspot.com/o/Sin%20perfil.webp?alt=media&token=410bb694-4db7-4bc6-a218-f8fae38b7faf" };

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Tus datos han sido guardados.',
      icon: 'success',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    formulario.reset();
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

