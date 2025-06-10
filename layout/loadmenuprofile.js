const sidebar = document.getElementById("sidebar")
const contenido = document.getElementById("contenido")
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
      navegabilidad();
    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });
});


const cargarOpcionesMenu = () => {
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  console.log(usuarioGuardado);
  
  if (usuarioGuardado) {
    const opcionesAdmin = document.querySelectorAll(".admin")
    const opcionesUser = document.querySelectorAll(".usuario")
    const nameUser = document.getElementById("name-user")
    nameUser.innerHTML = usuarioGuardado.nombreCompleto;
    if (usuarioGuardado.tipoUsuario === "Admin") {
      console.log("Entró");
      
      opcionesAdmin.forEach(boton => boton.classList.remove('d-none'));
      opcionesUser.forEach(boton => boton.classList.add('d-none'));
    } else {
      opcionesAdmin.forEach(boton => boton.classList.add('d-none'));
      opcionesUser.forEach(boton => boton.classList.remove('d-none'));

    }
  }
}

const navegabilidad = () => {
  const enlaces = document.querySelectorAll('.navegar');

  enlaces.forEach(enlace => {
    const urlDestino = new URL(enlace.href);
    const urlActual = new URL(window.location.href);
    if (urlDestino.pathname === urlActual.pathname) {
      enlace.classList.add("active")
    }
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      if (urlDestino.pathname === urlActual.pathname) {
        if (window.innerWidth < 699) {
          sidebar.classList.toggle("ocultar")
          contenido.classList.toggle("ocultar")
        }
      } else {
        window.location.href = enlace.href;
      }
    });
  });
}

