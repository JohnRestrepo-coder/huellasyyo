



// Variables globales
let mascotasActualizadas = [];
let paginaActual = 1;
const elementosPorPagina = 6;

async function cargarMascotas() {
  try {
    const response = await fetch("http://localhost:8080/mascota/TraerMascota")
    mascotasActualizadas = await response.json() || [];

  } catch (error) {
    console.log(error);

  }
}

const agregarTargetas = (mascotasParaMostrar) => {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";

  for (const mascota of mascotasParaMostrar) {
    const link = document.createElement("a");
    link.href = `vista_mascota.html?nombre=${encodeURIComponent(mascota.idMascota)}`;
    link.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = mascota.urlImagenMascota || "../images/testimonio5.jpg";
    img.alt = mascota.nombre;
    img.classList.add("item-img");

    const nombre = document.createElement("p");
    nombre.classList.add("item-nombre");
    nombre.textContent = mascota.nombre;

    link.appendChild(img);
    link.appendChild(nombre);
    contenedor.appendChild(link);
  }
};

const renderizarPaginador = () => {
  const paginador = document.getElementById("paginador");
  const totalPaginas = Math.ceil(mascotasActualizadas.length / elementosPorPagina);

  let html = `<ul class="pagination">
    <li class="page-item ${paginaActual === 1 ? "disabled" : ""}">
      <a class="page-link" href="#" aria-label="Previous" data-page="${paginaActual - 1}">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>`;

  for (let i = 1; i <= totalPaginas; i++) {
    html += `<li class="page-item ${paginaActual === i ? "active" : ""}">
      <a class="page-link" href="#" data-page="${i}"><strong>${i}</strong></a>
    </li>`;
  }

  html += `<li class="page-item ${paginaActual === totalPaginas ? "disabled" : ""}">
    <a class="page-link" href="#" aria-label="Next" data-page="${paginaActual + 1}">
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li></ul>`;

  paginador.innerHTML = html;

  const links = paginador.querySelectorAll("a.page-link");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const nuevaPagina = parseInt(e.currentTarget.getAttribute("data-page"));
      const totalPaginas = Math.ceil(mascotasActualizadas.length / elementosPorPagina);

      if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
        paginaActual = nuevaPagina;
        mostrarPagina(paginaActual);
      }
    });
  });
};

const mostrarPagina = (numPagina) => {
  const inicio = (numPagina - 1) * elementosPorPagina;
  const fin = inicio + elementosPorPagina;
  const mascotasParaMostrar = mascotasActualizadas.slice(inicio, fin);

  agregarTargetas(mascotasParaMostrar);
  renderizarPaginador();
};




window.onload = async () => {
  await cargarMascotas();
  mostrarPagina(paginaActual);
};

