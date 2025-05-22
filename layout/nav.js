export function configurarEventosCerrarSesion() {
  const botonesCerrar = document.querySelectorAll('.cerrarSesion');
  botonesCerrar.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('usuarioLogeado');
      window.location.href = 'index.html';
    });
  });
}

export function actualizarUIConUsuario(usuario) {
  const avatar = document.getElementById("avatar-usuario");
  const avatarImagen = document.getElementById("imagen-avatar");
  const opcionCuenta = document.getElementById("opcionCuenta");
  const cerrarSecion = document.getElementById("cerrarSecion");
  const match = document.getElementById("match");
  const inicio = document.querySelectorAll('.inicio');

  if (usuario) {
    avatar?.classList.remove("disponible");
    opcionCuenta?.classList.remove("disponible");
    cerrarSecion?.classList.remove("disponible");
    match?.classList.remove("disponible");
    avatarImagen?.setAttribute("src", usuario.imagenUsuario);

    inicio.forEach(boton => boton.classList.add('disponible'));
  } else {
    avatar?.classList.add("disponible");
    opcionCuenta?.classList.add("disponible");
    cerrarSecion?.classList.add("disponible");
    match?.classList.add("disponible");
    avatarImagen?.setAttribute("src", "");

    inicio.forEach(boton => boton.classList.remove('disponible'));
  }
}
