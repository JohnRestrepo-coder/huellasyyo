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
    "fotos": ["/images/animales/Dobby1.jpg", "/images/animales/Dobby2.jpg", "/images/animales/Dobby3.jpg"],
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
    "fotos": ["/images/animales/Tina1.jpg", "/images/animales/Tina2.jpg", "/images/animales/Tina3.jpg"],
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

/* let index = 0;
let excluidos = [];

function mostrarAnimal(i) {
  const animal = animales[i];

  // Corrige los IDs que usas en el HTML
  document.getElementById("btnRaza").textContent = animal.raza;
  document.getElementById("btnColor").textContent = animal.color;
  document.getElementById("btnCaracter").textContent = animal.caracter;
  document.getElementById("nombreAnimal").textContent = animal.nombre;
  document.getElementById("edadAnimal").textContent = animal.edad;

  const carrusel = document.getElementById("carousel-inner");
  const indicadores = document.getElementById("carousel-indicators");
  carrusel.innerHTML = "";
  indicadores.innerHTML = "";

  animal.fotos.forEach((foto, idx) => {
    const activo = idx === 0 ? "active" : "";
    carrusel.innerHTML += `
      <div class="carousel-item ${activo}">
        <img src="${foto}" class="d-block mx-auto img-fluid" style="max-height: 300px" />
      </div>
    `;
    indicadores.innerHTML += `
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${idx}" 
        class="${activo}" aria-label="Slide ${idx + 1}"></button>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarAnimal(index);

  // Botón retroceder
  document.querySelector(".bi-rewind-circle-fill").closest("button").addEventListener("click", () => {
    let anterior = index;
    do {
      anterior = (anterior - 1 + animales.length) % animales.length;
    } while (excluidos.includes(anterior) && anterior !== index);

    if (!excluidos.includes(anterior)) {
      index = anterior;
      mostrarAnimal(index);
    }
  });

  // Botón dislike
  document.querySelector(".bi-emoji-neutral-fill").closest("button").addEventListener("click", () => {
    excluidos.push(index);

    if (excluidos.length === animales.length) {
      alert("Ya no hay más mascotas para mostrar.");
      return;
    }

    let siguiente = index;
    do {
      siguiente = (siguiente + 1) % animales.length;
    } while (excluidos.includes(siguiente));

    index = siguiente;
    mostrarAnimal(index);
  });

  // Botón like (siguiente)
  document.querySelector(".bi-heart-fill").closest("button").addEventListener("click", () => {
    let siguiente = index;
    do {
      siguiente = (siguiente + 1) % animales.length;
    } while (excluidos.includes(siguiente) && siguiente !== index);

    if (!excluidos.includes(siguiente)) {
      index = siguiente;
      mostrarAnimal(index);
    }
  });
}); */

// ✅ Script unificado para manejar: like, matches, exclusiones, navegación

let index = 0;
let excluidos = [];
const matches = [];
const porPagina = 6;
let paginaActual = 0;

function mostrarAnimal(i) {
  const animal = animales[i];
  if (!animal) return;

  // 🐾 Columna central
  document.getElementById("btnRaza").textContent = animal.raza;
  document.getElementById("btnColor").textContent = animal.color;
  document.getElementById("btnCaracter").textContent = animal.caracter;
  document.getElementById("nombreAnimal").textContent = animal.nombre;
  document.getElementById("edadAnimal").textContent = animal.edad;

  const carrusel = document.getElementById("carousel-inner");
  const indicadores = document.getElementById("carousel-indicators");
  carrusel.innerHTML = "";
  indicadores.innerHTML = "";

  animal.fotos.forEach((foto, idx) => {
    const activo = idx === 0 ? "active" : "";
    carrusel.innerHTML += `
      <div class="carousel-item ${activo}">
        <img src="${foto}" class="d-block mx-auto img-fluid" style="max-height: 300px" />
      </div>
    `;
    indicadores.innerHTML += `
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${idx}" 
        class="${activo}" aria-label="Slide ${idx + 1}"></button>
    `;
  });

  // 🐾 Columna derecha - Información detallada
  document.getElementById("infoNombre").textContent = animal.nombre;
  document.getElementById("infoEspecie").textContent = animal.especie;
  document.getElementById("infoRaza").textContent = animal.raza;
  document.getElementById("infoSexo").textContent = animal.sexo;
  document.getElementById("infoEdad").textContent = animal.edad;
  document.getElementById("infoRazaCriolla").textContent = animal.razaCriolla;
  document.getElementById("infoColor").textContent = animal.color;
  document.getElementById("infoCaracter").textContent = animal.caracter;
  document.getElementById("infoNinos").textContent = animal.compatibleConNinos ? "Sí" : "No";
  document.getElementById("infoMascotas").textContent = animal.compatibleConOtrasMascotas;
  document.getElementById("infoVivienda").textContent = animal.viviendaRecomendada;
  document.getElementById("infoHistorial").textContent = animal.historialMedico;
  document.getElementById("infoCuidador").textContent = animal.cuidadorExperimentado ? "Sí" : "No";
  document.getElementById("infoDedicacion").textContent = animal.tiempoDedicacion;
  document.getElementById("infoAdiestramiento").textContent = animal.adiestramiento;

  const extras = [
    { valor: animal.vacunado, texto: "✅ Vacunado" },
    { valor: animal.castrado, texto: "✅ Castrado" },
    { valor: animal.puedeEstarSolo, texto: "✅ Se puede dejar solo en casa" },
    { valor: animal.viajaBienAuto, texto: "✅ Viaja bien en auto" }
  ];
  const extrasLista = document.getElementById("infoExtras");
  extrasLista.innerHTML = "";
  extras.forEach(extra => {
    if (extra.valor) {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = extra.texto;
      extrasLista.appendChild(li);
    }
  });
}

function renderizarMatches() {
  const matchesContainer = document.getElementById("match-list");
  matchesContainer.innerHTML = "";
  const inicio = paginaActual * porPagina;
  const fin = inicio + porPagina;
  const pagina = matches.slice(inicio, fin);

  pagina.forEach(match => {
    const card = document.createElement("div");
    card.classList.add("mb-1");
    card.innerHTML = `
      <div class="card">
        <h5 class="card-title titulo-card text-center">${match.nombre}</h5>
        <img src="${match.imagen}" class="card-img-top img-card-uniforme" alt="${match.nombre}" />
        <div class="card-body">
          <p class="card-text texto-mini text-center">${match.descripcion}</p>
          <a href="#" class="btn btn-cardperfil btn-primary btn-sm d-flex justify-content-center">Ver</a>
        </div>
      </div>
    `;
    matchesContainer.appendChild(card);
  });
}

function handleLike() {
  const animalActual = animales[index];
  if (!animalActual) return;

  const yaExiste = matches.some(m => m.nombre === animalActual.nombre);
  if (yaExiste) {
    alert(`¡Ya agregaste a ${animalActual.nombre} a tus matches!`);
  } else {
    matches.push({
      nombre: animalActual.nombre,
      descripcion: `${animalActual.caracter} - ${animalActual.edad}`,
      imagen: animalActual.fotos[0],
    });
    excluidos.push(index);
    paginaActual = Math.floor(matches.length / porPagina);
    renderizarMatches();
  }

  if (excluidos.length === animales.length) {
    alert("🎉 ¡Ya has visto y guardado todas las mascotas disponibles!");
    return;
  }

  let siguiente = index;
  do {
    siguiente = (siguiente + 1) % animales.length;
  } while (excluidos.includes(siguiente));

  index = siguiente;
  mostrarAnimal(index);
}

function handleDislike() {
  excluidos.push(index);

  if (excluidos.length === animales.length) {
    alert("Ya no hay más mascotas para mostrar.");
    return;
  }

  let siguiente = index;
  do {
    siguiente = (siguiente + 1) % animales.length;
  } while (excluidos.includes(siguiente));

  index = siguiente;
  mostrarAnimal(index);
}

function handleRetroceder() {
  let anterior = index;
  do {
    anterior = (anterior - 1 + animales.length) % animales.length;
  } while (excluidos.includes(anterior) && anterior !== index);

  index = anterior;
  mostrarAnimal(index);
}

function setupPaginacion() {
  document.getElementById("btn-atras").addEventListener("click", () => {
    if (paginaActual > 0) {
      paginaActual--;
      renderizarMatches();
    }
  });
  document.getElementById("btn-inicio").addEventListener("click", () => {
    paginaActual = 0;
    renderizarMatches();
  });
  document.getElementById("btn-adelante").addEventListener("click", () => {
    const totalPaginas = Math.ceil(matches.length / porPagina);
    if (paginaActual < totalPaginas - 1) {
      paginaActual++;
      renderizarMatches();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarAnimal(index);
  renderizarMatches();
  setupPaginacion();

  document.querySelector(".bi-heart-fill").closest("button").addEventListener("click", handleLike);
  document.querySelector(".bi-emoji-neutral-fill").closest("button").addEventListener("click", handleDislike);
  document.querySelector(".bi-rewind-circle-fill").closest("button").addEventListener("click", handleRetroceder);
});













