

// ✅ Script unificado para manejar: like, matches, exclusiones, navegación

let index = 0;
let excluidos = [];
let animales = [];
const matches = [];
const porPagina = 6;
let paginaActual = 0;

async function cargaPosiblesMatch() {
  try {
    const token = localStorage.getItem("tokenUsuario");
    console.log(token);
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
    const response = await fetch("http://localhost:8080/realizaMatch/posibleMatch/" + usuarioLogeado.idUsuario, {

      headers: {
        'Authorization': `Bearer ${token}`
      }

    })
    animales = await response.json();

  } catch (error) {
    console.log(error);

  }
}

function mostrarAnimal(i) {
  if (animales.length == 0){
    document.getElementById("contenedorNoMatch").classList.remove("d-none");
    document.getElementById("contenedorNoMatch").classList.add("d-block");
    document.getElementById("columnaCentro").classList.add("d-none");
    document.getElementById("columnaDerecha").classList.add("d-none");
    return;
  }
  const animal = animales[i].mascota;
  if (!animal) return;
  const datosAdicionales = JSON.parse(animal.otrasCaracteristicas)

  // 🐾 Columna central
  document.getElementById("btnRaza").textContent = animal.raza;
  document.getElementById("btnColor").textContent = datosAdicionales.color;
  document.getElementById("btnCaracter").textContent = animal.caracter;
  document.getElementById("nombreAnimal").textContent = animal.nombre;
  document.getElementById("edadAnimal").textContent = animal.edad + " años";


  const carrusel = document.getElementById("carousel-inner");
  const indicadores = document.getElementById("carousel-indicators");
  carrusel.innerHTML = "";
  indicadores.innerHTML = "";

  datosAdicionales.listaImagenes.forEach((foto, idx) => {
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

  document.getElementById("infoColor").textContent = datosAdicionales.color;
  document.getElementById("infoCaracter").textContent = animal.caracter;
  document.getElementById("infoNinos").textContent = datosAdicionales.ninos;
  document.getElementById("infoMascotas").textContent = datosAdicionales.otrasMascotas;
  document.getElementById("infoVivienda").textContent = datosAdicionales.vivienda;
  document.getElementById("infoHistorial").textContent = datosAdicionales.historial;
  document.getElementById("infoCuidador").textContent = datosAdicionales.cuidador;
  document.getElementById("infoDedicacion").textContent = datosAdicionales.tiempo;
  document.getElementById("infoAdiestramiento").textContent = datosAdicionales.adiestramiento;

  const extras = [
    { valor: datosAdicionales.vacunado, texto: (datosAdicionales.vacunado ? "✅ " : "❌ ") + "Vacunado" },
    { valor: datosAdicionales.castrado, texto: (datosAdicionales.castrado ? "✅ " : "❌ ") + "Castrado" },
    { valor: datosAdicionales.soloCasa, texto: (datosAdicionales.soloCasa ? "✅ " : "❌ ") + "Puede estar solo" },
    { valor: datosAdicionales.viajaAuto, texto: (datosAdicionales.viajaAuto ? "✅ " : "❌ ") + "Viaja bien en auto" }
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

async function renderizarMatches() {
  try {
    const matchesContainer = document.getElementById("match-list");
  matchesContainer.innerHTML = "";
  const inicio = paginaActual * porPagina;
  const fin = inicio + porPagina;
   const token = localStorage.getItem("tokenUsuario");
    
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
    const response = await fetch("http://localhost:8080/realizaMatch/buscarMatches/" + usuarioLogeado.idUsuario, {

      headers: {
        'Authorization': `Bearer ${token}`
      }

    })
    const matches = await response.json();
  const pagina = matches.slice(inicio, fin);

  pagina.forEach(match => {
    const link = `../galeria/vista_mascota.html?nombre=${encodeURIComponent(match.mascota.idMascota)}`;
    const card = document.createElement("div");
    card.classList.add("mb-1");
    card.innerHTML = `
      <div class="card">
        <h5 class="card-title titulo-card text-center">${match.mascota.nombre}</h5>
        <img src="${match.mascota.urlImagenMascota}" class="card-img-top img-card-uniforme" alt="${match.mascota.nombre}" />
        <div class="card-body">
          <p class="card-text texto-mini text-center">${match.mascota.edad} años</p>
          <a href="${link}" class="btn btn-cardperfil btn-sm d-flex justify-content-center">Ver</a>
        </div>
      </div>
    `;
    matchesContainer.appendChild(card);
  });
    
  } catch (error) {
    
  }
  
}

async function handleLike() {
  const animalActual = animales[index];
  if (!animalActual) return;

  try {
    const token = localStorage.getItem("tokenUsuario");
    const matchMascota = true; // o false
    const response = await fetch(`http://localhost:8080/realizaMatch/reaccion/${animalActual.idRealizaMatch}?matchMascota=${matchMascota}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.ok) {
      Swal.fire({ title: "Match realizado con éxito!", icon: "success" });
    }

    await renderizarMatches();
    await cargaPosiblesMatch();   
    mostrarAnimal(index);
  } catch (error) {
    Swal.fire({ title: "Ha ocurrido un error. Vuelve a intentarlo!", icon: "error" });
  }


}

async function handleDislike() {
  const animalActual = animales[index];
  if (!animalActual) return;

  try {
    const token = localStorage.getItem("tokenUsuario");
    const matchMascota = false; 
    const response = await fetch(`http://localhost:8080/realizaMatch/reaccion/${animalActual.idRealizaMatch}?matchMascota=${matchMascota}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })   

    await renderizarMatches();
    await cargaPosiblesMatch();   
    mostrarAnimal(index);
  } catch (error) {
    Swal.fire({ title: "Ha ocurrido un error. Vuelve a intentarlo!", icon: "error" });
  }
}

function handleRetroceder() {
  let anterior = index;
  do {
    anterior = (anterior - 1 + animales.length) % animales.length;
  } while (excluidos.includes(anterior) && anterior !== index);

  index = anterior;
  mostrarAnimal(index);
}

async function setupPaginacion() {
  document.getElementById("btn-atras").addEventListener("click", async() => {
    if (paginaActual > 0) {
      paginaActual--;
     await renderizarMatches();
    }
  });
  document.getElementById("btn-inicio").addEventListener("click", async() => {
    paginaActual = 0;
    await renderizarMatches();
  });
  document.getElementById("btn-adelante").addEventListener("click", async() => {
    const totalPaginas = Math.ceil(matches.length / porPagina);
    if (paginaActual < totalPaginas - 1) {
      paginaActual++;
      await renderizarMatches();
    }
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await cargaPosiblesMatch();
  mostrarAnimal(index);
  await renderizarMatches();
  await setupPaginacion();

  document.querySelector(".bi-heart-fill").closest("button").addEventListener("click", handleLike);
  document.querySelector(".bi-emoji-neutral-fill").closest("button").addEventListener("click", handleDislike);
  // document.querySelector(".bi-rewind-circle-fill").closest("button").addEventListener("click", handleRetroceder);
});













