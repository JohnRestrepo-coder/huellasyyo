import Validator from "../utils/validator.js";

const formulario = document.querySelector('form');
const validator = new Validator();

validator.addField('email', [
  { rule: 'required', message: 'El correo es obligatorio.' },
  { rule: 'email', message: 'Correo inválido.' }
]);

validator.addField('password', [
  { rule: 'required', message: 'El campo contraseña no puede estar vacío.' },
  { rule: 'minLength', params: 8, message: 'La contraseña debe tener al menos 8 caracteres.' }
]);

window.onload = () => {
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (usuarioGuardado) {
    window.location.href = '../index.html';
  }

  document.getElementById('login-container').classList.add('visible');
};

formulario.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (validator.validateAll()) {
    const correo = document.getElementById('email').value.trim();
    const contrasena = document.getElementById('password').value.trim();

    try {
      const respuesta = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: correo,
          contrasena: contrasena
        })
      });

      if (respuesta.ok) {
        const { usuario, token } = await respuesta.json();
        localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
        localStorage.setItem("tokenUsuario", token);
        const responseData = await buscarDataPreferencia()
        if(responseData || usuario.tipoUsuario === 'Admin'){
          window.location.href = '../index.html';
        } else {
          window.location.href = "../usuarios/preferencias.html"
        }
        
      } else {
        Swal.fire({
          title: '¡Error al iniciar sesión!',
          text: 'Correo electrónico o contraseña incorrectos.',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Swal.fire({
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor. Intenta más tarde.',
        icon: 'error'
      });
    }
  }
});


// Manejo de visibilidad de password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  togglePassword.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});

const buscarDataPreferencia = async () => {
  try {
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
    if (!usuarioLogeado) {
      window.location.href = '../index.html';
      return
    }

    const token = localStorage.getItem("tokenUsuario");
    const response = await fetch(`http://localhost:8080/usuarios/traerpreferencias/${usuarioLogeado.idUsuario}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (response.ok) {
      const { convivencia, mascotaPreferencia, fechaNacimiento } = await response.json();
      if (convivencia === null || mascotaPreferencia == null || fechaNacimiento === null) {
        return false
      }
      else return true
    }

  } catch (error) {
    console.log(error)
    return true
  }
}
