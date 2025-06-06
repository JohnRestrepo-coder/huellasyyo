export function configurarEventosCerrarSesion() {
  const botonesCerrar = document.querySelectorAll('.cerrarSesion');
  botonesCerrar.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('usuarioLogeado');
      window.location.href = '../index.html';
    });
  });
}

export function actualizarUIConUsuario(usuario) {
  const avatar = document.getElementById("avatar-usuario");
  const avatarImagen = document.getElementById("imagen-avatar");
  const opcionCuenta = document.getElementById("opcionCuenta");
  const cerrarSecion = document.getElementById("cerrarSecion");
  const inicio = document.querySelectorAll('.inicio');

  if (usuario) {
    avatar?.classList.remove("disponible");
    opcionCuenta?.classList.remove("disponible");
    cerrarSecion?.classList.remove("disponible");
    avatarImagen?.setAttribute("src", usuario.urlImagenUsuario);

    inicio.forEach(boton => boton.classList.add('disponible'));
  } else {
    avatar?.classList.add("disponible");
    opcionCuenta?.classList.add("disponible");
    cerrarSecion?.classList.add("disponible");
    avatarImagen?.setAttribute("src", "");

    inicio.forEach(boton => boton.classList.remove('disponible'));
  }
}
