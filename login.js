const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioAutenticado = usuariosGuardados.find(usuario => usuario.correo === email && usuario.password === password);

  if (usuarioAutenticado) {
    alert("¡Inicio de sesión exitoso!");
    window.location.href = 'inicio.html';
  } else {
    alert("Correo electrónico o contraseña incorrectos.");
  }
});
