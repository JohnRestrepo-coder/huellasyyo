// Variables globales
let mascotasActualizadas = [];
let mascotas = []
let paginaActual = 1;
const elementosPorPagina = 6;

async function cargarMascotas() {
  try {
    const response = await fetch("https://njejgfaqpr.us-east-1.awsapprunner.com/mascota/TraerMascota")
    mascotas = await response.json() || [];
    mascotasActualizadas = mascotas

  } catch (error) {
    console.log(error);

  }
}

const agregarTargetas = (mascotasParaMostrar) => {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";
  if (mascotasParaMostrar.length === 0) {
    document.getElementById("info-empty").classList.remove("d-none")
    return
  }
  document.getElementById("info-empty").classList.add("d-none")


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


function filtrarMascotas(mascotas) {
  const checkedValues = {
    sexo: getCheckedValues(['macho', 'hembra']),
    edad: getCheckedValues(['inicial', 'intermedia', 'mayor']),
    especie: getCheckedValues(['perro', 'gato', 'otro']),
    raza: getCheckedValues([
      'labrador', 'golden', 'bulldog', 'shihtzu', 'pitbull',
      'pastoraleman', 'beagle', 'poodle', 'chihuahua', 'yorkshire', 'criollo'
    ]),
    tamano: getCheckedValues(['pequeno', 'mediano', 'grande']),
    caracter: getCheckedValues(['pasivo', 'activo', 'jugueton']),
  };

  // Filtrado
  const mascotasFiltradas = mascotas.filter((mascota) => {
    return (
      cumpleFiltro(checkedValues.sexo, mascota.sexo.toLowerCase()) &&
      cumpleFiltro(checkedValues.edad, clasificarEdad(mascota.edad)) &&
      cumpleFiltro(checkedValues.especie, mascota.especie.toLowerCase()) &&
      cumpleFiltro(checkedValues.raza, mascota.raza.toLowerCase()) &&
      cumpleFiltro(checkedValues.tamano, mascota.tamano.toLowerCase()) &&
      cumpleFiltro(checkedValues.caracter, mascota.caracter.toLowerCase())
    );
  });

  return mascotasFiltradas;
}

function filtrarMascotasMobil(mascotas) {
  const checkedValues = {
    sexo: getCheckedValues(['mobilemacho', 'mobilehembra']),
    edad: getCheckedValues(['mobileinicial', 'mobileintermedia', 'mobilemayor']),
    especie: getCheckedValues(['mobileperro', 'mobilegato', 'mobileotro']),
    raza: getCheckedValues([
      'mobilelabrador', 'mobilegolden', 'mobilebulldog', 'mobileshihtzu', 'mobilepitbull',
      'mobilepastoraleman', 'mobilebeagle', 'mobilepoodle', 'mobilechihuahua', 'mobileyorkshire', 'mobilecriollo'
    ]),
    tamano: getCheckedValues(['mobilepequeno', 'mobilemediano', 'mobilegrande']),
    caracter: getCheckedValues(['mobilepasivo', 'mobileactivo', 'mobilejugueton']),
  };

  const mascotasFiltradas = mascotas.filter((mascota) => {
    return (
      cumpleFiltro(checkedValues.sexo, 'mobile' + mascota.sexo.toLowerCase()) &&
      cumpleFiltro(checkedValues.edad, 'mobile' + clasificarEdad(mascota.edad)) &&
      cumpleFiltro(checkedValues.especie, 'mobile' + mascota.especie.toLowerCase()) &&
      cumpleFiltro(checkedValues.raza, 'mobile' + mascota.raza.toLowerCase()) &&
      cumpleFiltro(checkedValues.tamano, 'mobile' + mascota.tamano.toLowerCase()) &&
      cumpleFiltro(checkedValues.caracter, 'mobile' + mascota.caracter.toLowerCase())
    );
  });

  return mascotasFiltradas;
}

function getCheckedValues(ids) {
  return ids.filter((id) => {
    const checkbox = document.getElementById(id);
    return checkbox && checkbox.checked;
  });
}

function clasificarEdad(edadStr) {
  const edad = parseInt(edadStr);
  if (edad <= 5) return 'inicial';
  if (edad <= 10) return 'intermedia';
  return 'mayor';
}

function cumpleFiltro(filtros, valor) {
  return filtros.length === 0 || filtros.includes(valor);
}


document.getElementById("aplicar").addEventListener("click", () => {
  mascotasActualizadas = filtrarMascotas(mascotas)
  paginaActual = 1;
  mostrarPagina(paginaActual);
})

document.getElementById("mobilaplicar").addEventListener("click", () => {
  const offcanvasEl = document.getElementById('offcanvasExample');
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
  bsOffcanvas.hide();
  mascotasActualizadas = filtrarMascotasMobil(mascotas)
  paginaActual = 1;
  mostrarPagina(paginaActual);

})
