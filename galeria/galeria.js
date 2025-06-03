const animales = [
  {
    "id": 1,
    "nombre": "Luna",
    "especie": "Perro",
    "edad": "8 años",
    "raza": "Labrador",
    "color": "Negro",
    "caracter": "Activo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Sana",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Luna1.jpg", "/images/animales/Luna2.jpg", "/images/animales/Luna3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 2,
    "nombre": "Simba",
    "especie": "Gato",
    "edad": "5 años",
    "raza": "Siames",
    "color": "Crema",
    "caracter": "Independiente",
    "compatibleConNinos": false,
    "compatibleConOtrasMascotas": "No",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Vacunas completas",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Simba1.jpg", "/images/animales/Simba2.jpg", "/images/animales/Simba3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 3,
    "nombre": "Rocky",
    "especie": "Perro",
    "edad": "3 años",
    "raza": "Pitbull",
    "color": "Marrón",
    "caracter": "Juguetón",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con perros",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Finca",
    "historialMedico": "Tratamiento para pulgas",
    "cuidadorExperimentado": true,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Avanzado",
    "fotos": ["/images/animales/Rocky1.jpg", "/images/animales/Rocky2.jpg", "/images/animales/Rocky3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 4,
    "nombre": "Canela",
    "especie": "Perro",
    "edad": "7 años",
    "raza": "Criolla",
    "color": "Miel",
    "caracter": "Pasivo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": true,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Sana",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Canela1.jpg", "/images/animales/Canela2.jpg", "/images/animales/Canela3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 5,
    "nombre": "Tom",
    "especie": "Gato",
    "edad": "4 años",
    "raza": "Maine Coon",
    "color": "Gris",
    "caracter": "Tranquilo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con perros",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Alergias leves",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Tom1.jpg", "/images/animales/Tom2.jpg", "/images/animales/Tom3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 6,
    "nombre": "Nala",
    "especie": "Perro",
    "edad": "6 años",
    "raza": "Golden Retriever",
    "color": "Dorado",
    "caracter": "Familiar",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Ambos",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": true,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Sana",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Avanzado",
    "fotos": ["/images/animales/Nala1.jpg", "/images/animales/Nala2.jpg", "/images/animales/Nala3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 7,
    "nombre": "Milo",
    "especie": "Gato",
    "edad": "2 años",
    "raza": "Angora",
    "color": "Blanco",
    "caracter": "Juguetón",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Asma felina controlada",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Milo1.jpg", "/images/animales/Milo2.jpg", "/images/animales/Milo3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 8,
    "nombre": "Zeus",
    "especie": "Perro",
    "edad": "5 años",
    "raza": "Pastor Alemán",
    "color": "Negro y Fuego",
    "caracter": "Activo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con perros",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Finca",
    "historialMedico": "Lesión vieja en la pata trasera",
    "cuidadorExperimentado": true,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Avanzado",
    "fotos": ["/images/animales/Zeus1.jpg", "/images/animales/Zeus2.jpg", "/images/animales/Zeus3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 9,
    "nombre": "Coco",
    "especie": "Gato",
    "edad": "9 años",
    "raza": "Criollo",
    "color": "Naranja",
    "caracter": "Independiente",
    "compatibleConNinos": false,
    "compatibleConOtrasMascotas": "No",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Sano",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Coco1.jpg", "/images/animales/Coco2.jpg", "/images/animales/Coco3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 10,
    "nombre": "Fiona",
    "especie": "Perro",
    "edad": "4 años",
    "raza": "Beagle",
    "color": "Tricolor",
    "caracter": "Juguetón",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Ambos",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Vacunas completas",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Fiona1.jpg", "/images/animales/Fiona2.jpg", "/images/animales/Fiona3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 11,
    "nombre": "Dobby",
    "especie": "Perro",
    "edad": "12 años",
    "raza": "Chihuahua",
    "color": "Beige",
    "caracter": "Tranquilo",
    "compatibleConNinos": false,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Sano",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Dobby1.jpg", "/images/animales/Dobby2.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "pequeño"
  },
  {
    "id": 12,
    "nombre": "Tina",
    "especie": "Gato",
    "edad": "7 años",
    "raza": "Persa",
    "color": "Gris claro",
    "caracter": "Pasivo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con perros",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Problemas respiratorios leves",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Tina1.jpg", "/images/animales/Tina2.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 13,
    "nombre": "Baco",
    "especie": "Perro",
    "edad": "6 años",
    "raza": "Husky Siberiano",
    "color": "Gris y blanco",
    "caracter": "Activo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Ambos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Finca",
    "historialMedico": "Displasia leve",
    "cuidadorExperimentado": true,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Avanzado",
    "fotos": ["/images/animales/Baco1.jpg", "/images/animales/Baco2.jpg", "/images/animales/Baco3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 14,
    "nombre": "Lola",
    "especie": "Gato",
    "edad": "5 años",
    "raza": "Criollo",
    "color": "Blanco y negro",
    "caracter": "Familiar",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Esterilización reciente",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Lola1.jpg", "/images/animales/Lola2.jpg", "/images/animales/Lola3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 15,
    "nombre": "Thor",
    "especie": "Perro",
    "edad": "4 años",
    "raza": "Rottweiler",
    "color": "Negro y fuego",
    "caracter": "Activo",
    "compatibleConNinos": false,
    "compatibleConOtrasMascotas": "No",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": true,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Finca",
    "historialMedico": "Vacunas completas",
    "cuidadorExperimentado": true,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Avanzado",
    "fotos": ["/images/animales/Thor1.jpg", "/images/animales/Thor2.jpg", "/images/animales/Thor3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 16,
    "nombre": "Kiwi",
    "especie": "Gato",
    "edad": "3 años",
    "raza": "Bengalí",
    "color": "Atigrado",
    "caracter": "Juguetón",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con perros",
    "vacunado": true,
    "castrado": false,
    "puedeEstarSolo": false,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Sano",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Kiwi1.jpg", "/images/animales/Kiwi2.jpg", "/images/animales/Kiwi3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 17,
    "nombre": "Toby",
    "especie": "Perro",
    "edad": "10 años",
    "raza": "Poodle",
    "color": "Blanco",
    "caracter": "Tranquilo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Sano",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Toby1.jpg", "/images/animales/Toby2.jpg", "/images/animales/Toby3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 18,
    "nombre": "Arya",
    "especie": "Gato",
    "edad": "2 años",
    "raza": "Esfinge",
    "color": "Rosado claro",
    "caracter": "Independiente",
    "compatibleConNinos": false,
    "compatibleConOtrasMascotas": "No",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Piel sensible, cuidado especial",
    "cuidadorExperimentado": true,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Arya1.jpg", "/images/animales/Arya2.jpg", "/images/animales/Arya3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  },
  {
    "id": 19,
    "nombre": "Bruno",
    "especie": "Perro",
    "edad": "5 años",
    "raza": "Boxer",
    "color": "Marrón",
    "caracter": "Familiar",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Ambos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": false,
    "viajaBienAuto": true,
    "viviendaRecomendada": "Casa",
    "historialMedico": "Alergia alimentaria controlada",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Más de una hora",
    "adiestramiento": "Básico",
    "fotos": ["/images/animales/Bruno1.jpg", "/images/animales/Bruno2.jpg", "/images/animales/Bruno3.jpg"],
    "sexo": "macho",
    "razaCriolla": "",
    "tamaño": "grande"
  },
  {
    "id": 20,
    "nombre": "Misha",
    "especie": "Gato",
    "edad": "8 años",
    "raza": "Himalayo",
    "color": "Blanco con gris",
    "caracter": "Pasivo",
    "compatibleConNinos": true,
    "compatibleConOtrasMascotas": "Con gatos",
    "vacunado": true,
    "castrado": true,
    "puedeEstarSolo": true,
    "viajaBienAuto": false,
    "viviendaRecomendada": "Departamento",
    "historialMedico": "Cuidado ocular regular",
    "cuidadorExperimentado": false,
    "tiempoDedicacion": "Una hora",
    "adiestramiento": "No Aplica",
    "fotos": ["/images/animales/Misha1.jpg", "/images/animales/Misha2.jpg", "/images/animales/Misha3.jpg"],
    "sexo": "hembra",
    "razaCriolla": "",
    "tamaño": "mediano"
  }
];

const adaptarAnimales = (animales) => {
  return animales.map(({
    id,
    nombre,
    sexo,
    especie,
    raza,
    razaCriolla,
    edad,
    tamaño,
    color,
    caracter,
    compatibleConNinos,
    compatibleConOtrasMascotas,
    vacunado,
    castrado,
    puedeEstarSolo,
    viajaBienAuto,
    viviendaRecomendada,
    historialMedico,
    cuidadorExperimentado,
    tiempoDedicacion,
    adiestramiento,
    fotos
  }) => ({
    id, // opcional si quieres mantenerlo
    nombre,
    sexo: sexo.toLowerCase() === 'macho' || sexo.toLowerCase() === 'macho' || sexo.toLowerCase() === 'm' ? 'Macho' : 'Hembra',
    especie,
    raza,
    razaMixta: razaCriolla || "", // aquí lo pones en razaMixta
    edad: edad.replace(/\s*años?/, '').trim(), // quita " años"
    tamano: tamaño ? tamaño.charAt(0).toUpperCase() + tamaño.slice(1) : "", // capitaliza
    color,
    caracter,
    ninos: compatibleConNinos ? "Sí" : "No",
    otrasMascotas: compatibleConOtrasMascotas || "No",
    vacunado,
    castrado,
    soloCasa: puedeEstarSolo,
    viajaAuto: viajaBienAuto,
    vivienda: viviendaRecomendada,
    historial: historialMedico,
    cuidador: cuidadorExperimentado ? "Sí" : "No",
    tiempo: tiempoDedicacion,
    adiestramiento,
    imagen: fotos && fotos.length > 0 ? fotos[0] : "",
    listaImagenes: fotos || []
  }));
};

// Variables globales
let mascotasActualizadas = [];
let paginaActual = 1;
const elementosPorPagina = 6;

function cargarMascotas() {
  const mascotasJson = localStorage.getItem("mascotas");
  if (mascotasJson) {
    mascotasActualizadas = JSON.parse(mascotasJson);
  } else {
    mascotasActualizadas = []; 
  }
}

const agregarTargetas = (mascotasParaMostrar) => {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";

  for (const mascota of mascotasParaMostrar) {
    const link = document.createElement("a");
    link.href = `vista_mascota.html?nombre=${encodeURIComponent(mascota.nombre)}`;
    link.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = mascota.imagen || "../images/testimonio5.jpg";
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


(function () {
  const nuevaMascotas = adaptarAnimales(animales)

  const key = "mascotas";

  const mascotasGuardadas = JSON.parse(localStorage.getItem(key)) || [];

  const yaExiste = (nueva) => {
    return mascotasGuardadas.some(
      (m) =>
        m.nombre === nueva.nombre &&
        m.edad === nueva.edad &&
        m.especie === nueva.especie &&
        m.raza === nueva.raza
    );
  };

  const nuevasSinDuplicados = nuevaMascotas.filter((n) => !yaExiste(n));

  const mascotasActualizadas = [...nuevasSinDuplicados, ...mascotasGuardadas];
  agregarTargetas(mascotasActualizadas)
  localStorage.setItem(key, JSON.stringify(mascotasActualizadas));
})();

window.onload = () => {
  cargarMascotas();
  mostrarPagina(paginaActual);
};

