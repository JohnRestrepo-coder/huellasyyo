
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    const correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo);
    const passwordValida = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);

    if (!correoValido) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!passwordValida) {
      alert("La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un símbolo.");
      return;
    }

    if (password !== confirmarPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = { nombre, telefono, correo, password };

    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    alert("¡Registro exitoso! Tus datos han sido guardados.");
    formulario.reset();
  });

