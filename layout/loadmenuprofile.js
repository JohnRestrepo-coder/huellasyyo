document.addEventListener('DOMContentLoaded', () => {
  fetch('../layout/menuprofile.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el HTML');
      }
      return response.text();
    })
    .then(htmlContent => {
      document.getElementById('sidebar').innerHTML = htmlContent;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '../styles/global/styleplantillaperfil.css';
      document.head.appendChild(link);
      cargarOpcionesMenu();
    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });
});


const cargarOpcionesMenu = () => {
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  if (usuarioGuardado) {
    const opcionesAdmin = document.querySelectorAll(".admin")
    const opcionesUser = document.querySelectorAll(".usuario")
    const nameUser = document.getElementById("name-user")
    nameUser.innerHTML = usuarioGuardado.nombre;
    if (usuarioGuardado.idTipoUsuario === 1) {
      opcionesAdmin.forEach(boton => boton.classList.add('d-none'));
      opcionesUser.forEach(boton => boton.classList.remove('d-none'));
    } else {
      opcionesAdmin.forEach(boton => boton.classList.remove('d-none'));
      opcionesUser.forEach(boton => boton.classList.add('d-none'));

    }
  }
}