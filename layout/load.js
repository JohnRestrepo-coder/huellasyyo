import { configurarEventosCerrarSesion, actualizarUIConUsuario } from "./nav.js";

document.addEventListener('DOMContentLoaded', () => {
  fetch('../layout/nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el HTML');
      }
      return response.text();
    })
    .then(htmlContent => {
      document.getElementById('header').innerHTML = htmlContent;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '../styles/layout/nav_style.css';
      document.head.appendChild(link);

      configurarEventosCerrarSesion();
      const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogeado'));
      actualizarUIConUsuario(usuarioGuardado);

    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('../layout/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el HTML');
      }
      return response.text();
    })
    .then(htmlContent => {
      document.getElementById('footer').innerHTML = htmlContent;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = '../styles/layout/footer.css';
      document.head.appendChild(link);
    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });
});