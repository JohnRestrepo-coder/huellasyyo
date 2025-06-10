import Validator from "../utils/validator.js"

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
  let usuariosSistema = JSON.parse(localStorage.getItem('usuarios'));

  if (!usuariosSistema) {
    const nuevoUsuario = { nombre: "Admin", telefono: 1234567890, correo: "adminhuellas@gmail.com", password: "Kilerwinkmkskl99*", idTipoUsuario: 2, preferencias: [], imagenUsuario: "https://firebasestorage.googleapis.com/v0/b/dwb-archivos.appspot.com/o/Sin%20perfil.webp?alt=media&token=410bb694-4db7-4bc6-a218-f8fae38b7faf" };
    usuariosSistema = [nuevoUsuario]
    localStorage.setItem('usuarios', JSON.stringify(usuariosSistema));
  }
  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (usuariosGuardados) {
    window.location.href = '../index.html';
  }

  document.getElementById('login-container').classList.add('visible');

}

formulario.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (validator.validateAll()) {


    // if (usuarioRegistrado) {
    //   Swal.fire({
    //     title: '¡Error al crear el usuario!',
    //     text: 'El correo electronico ya esta registrado en el sistema.',
    //     icon: 'error',
    //     customClass: {
    //       popup: 'mi-alerta-personalizada',
    //       confirmButton: 'ok-personalizado',
    //     }
    //   });
    //   return;
    // }

    const nuevoUsuario = { nombreCompleto: nombre.value.trim(), telefono: telefono.value.trim(), correo: correo.value.trim(), contrasena: password.value, tipoUsuario: "cliente", urlImagenUsuario: "https://firebasestorage.googleapis.com/v0/b/dwb-archivos.appspot.com/o/Sin%20perfil.webp?alt=media&token=410bb694-4db7-4bc6-a218-f8fae38b7faf", estado: true };
    try {
      const response = await fetch("https://njejgfaqpr.us-east-1.awsapprunner.com/usuarios/crearUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoUsuario)
      });
      if (!response.ok) throw new Error('Error al enviar');
      Swal.fire({
        title: '¡Registro completado!',
        html: `
    <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">
      Te has registrado correctamente.
    </p>
    <p style="font-size: 1rem; color: #666;">
      Ahora puedes iniciar sesión para disfrutar de todas las funcionalidades.
    </p>
  `,
        icon: 'success',
        confirmButtonText: 'Ir al login',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = './login.html';
        }
      });

      formulario.reset();

    } catch (error) {
      console.log(error);

    }

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

