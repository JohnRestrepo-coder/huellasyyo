function mostrarOverlayHasMatch() {
  const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))

  if (!usuarioLogeado) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'; // fondo más oscuro
    overlay.style.backdropFilter = 'blur(10px)'; // más blur para mayor difuminado
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '20';
    overlay.style.padding = '1rem';
    overlay.style.marginTop = "86px";

    const section = document.createElement('section');
    section.className = 'has-match mt-3 pb-3';
    section.style.backgroundColor = 'var(--site-color-lila)';
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.textAlign = 'center';
    section.style.padding = '2rem';
    section.style.borderRadius = '1rem';
    section.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    section.style.maxWidth = '400px';
    section.style.color = 'white';

    section.innerHTML = `
      <h2>¿Quieres encontrar tu mascota ideal?</h2>
      <p>Regístrate o inicia sesión y accede a esta gran funcionalidad</p>
      <a href="../auth/login.html"
        class="btn buton-banner text-white d-inline-flex align-items-center gap-2 rounded-pill fs-5 px-4 py-2 shadow-lg"
        style="background-color: var(--site-color-verde); text-decoration:none;">
        <img src="../images/icon_Huella.svg" alt="Icono de huella" class="w-6 h-6" style="width: 24px; height: 24px;" />
        ¡Haz Match!
      </a>
    `;

    overlay.appendChild(section);
    document.querySelector("main").appendChild(overlay);

    // No se cierra con click fuera
  }
}

window.onload = mostrarOverlayHasMatch;
