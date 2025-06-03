import Validator from "../utils/validator.js"

const formulario = document.querySelector('form');

const validator = new Validator();

validator.addField('email', [
  { rule: 'required', message: 'El correo es obligatorio.' },
  { rule: 'email', message: 'Correo inválido.' }
]);

validator.addField('password', [
  { rule: 'required', message: 'El campo contraseña no puede estar vacio.' },
  { rule: 'minLength', params: 8, message: 'El campo contraseña debe tener por lo menos 8 caracteres.' }
]);

window.onload = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (usuariosGuardados) {
    window.location.href = '../index.html';
  }

  document.getElementById('login-container').classList.add('visible');

}


formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validator.validateAll()) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuariosGuardados.find(usuario => usuario.correo === email);

    if (!usuario) {
      Swal.fire({
        title: 'Correo no registrado',
        text: 'El correo electrónico que ingresaste no está registrado en el sistema.',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Ir a registro',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
          cancelButton: 'cancel-personalizado'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '../auth/registro.html';
        }
      });
      return;
    }

    const usuarioAutenticado = usuariosGuardados.find(usuario => usuario.correo === email && usuario.password === password);

    if (!usuarioAutenticado) {
      Swal.fire({
        title: '¡Error al iniciar sesión!',
        text: 'Correo electrónico o contraseña incorrectos.',
        icon: 'error',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      });
      return;
    }
    localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioAutenticado))
    window.location.href = '../index.html';
  }
});

// manejo de visibilidad de password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  togglePassword.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});