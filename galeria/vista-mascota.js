
const cargaInicial = async() => {
  const params = new URLSearchParams(window.location.search)
  const nombreMascota = params.get("nombre")
  try {
      if (nombreMascota) {
    
     const response = await fetch ("http://localhost:8080/mascota/buscarMascota/" + nombreMascota)
     
  const mascota = await response.json();
  const datosAdicionales = JSON.parse(mascota.otrasCaracteristicas)  


    if (mascota) {
      document.getElementById("nombre-mascota-navegacion").innerHTML = mascota.nombre
      document.getElementById("nombre").textContent = mascota.nombre
      document.getElementById("especie").textContent = mascota.especie
      document.getElementById("raza").textContent = datosAdicionales.razaMixta || mascota.raza
      document.getElementById("edad").textContent = mascota.edad
      document.getElementById("tamano").textContent = mascota.tamano
      document.getElementById("color").textContent = datosAdicionales.color
      document.getElementById("caracter").textContent = mascota.caracter
      document.getElementById("ninos").textContent = datosAdicionales.ninos
      document.getElementById("otrasMascotas").textContent = datosAdicionales.otrasMascotas
      document.getElementById("vacunado").textContent = datosAdicionales.vacunado ? "Sí" : "No"
      document.getElementById("castrado").textContent = datosAdicionales.castrado ? "Sí" : "No"
      document.getElementById("historial").textContent =datosAdicionales.historial

      const carouselInner = document.getElementById("carouselInner");
      const carouselIndicators = document.getElementById("indicadores");
      const imagenesCarrucel = document.getElementById("imagenesCarrucel");



      if (!carouselInner) {
        console.error("Faltan elementos del DOM (carouselInner, imagenesCarrucel o carouselIndicators)");
        return;
      }

      datosAdicionales.listaImagenes.forEach((src, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

        const imgBootstrap = document.createElement("img");
        imgBootstrap.src = src;
        imgBootstrap.className = "d-block w-100";
        imgBootstrap.alt = `Imagen ${index + 1}`;

        carouselItem.appendChild(imgBootstrap);
        carouselInner.appendChild(carouselItem);

        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
        indicator.setAttribute("data-bs-slide-to", index);
        indicator.setAttribute("aria-label", `Slide ${index + 1}`);
        if (index === 0) {
          indicator.className = "active";
          indicator.setAttribute("aria-current", "true");
        }
        carouselIndicators.appendChild(indicator);

        const imagenDiv = document.createElement("div");
        imagenDiv.className = "imagen";

        const imgCustom = document.createElement("img");
        imgCustom.src = src;
        imgCustom.className = "d-block w-100";
        imgCustom.alt = `Imagen ${index + 1}`;

        imagenDiv.appendChild(imgCustom);
        imagenesCarrucel.appendChild(imagenDiv);
      });

    } else {
      document.querySelector(".informacion").innerHTML = "<p>Mascota no encontrada.</p>"
    }
  } else {
    document.querySelector(".informacion").innerHTML = "<p>No se especificó ninguna mascota.</p>"
  }
    
  } catch (error) {
    console.log(error);    
    
  }


}

const mascotasSimilares = async() => {
  try {
    const response = await fetch("http://localhost:8080/mascota/TraerMascota")
    const mascotas = await response.json() || [];
    if (mascotas.length === 0) return

  for (let i = mascotas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mascotas[i], mascotas[j]] = [mascotas[j], mascotas[i]]
  }

  const seleccionadas = mascotas.slice(0, 3)

  const seccion = document.querySelector(".similares")
  seccion.innerHTML = ""

  seleccionadas.forEach((mascota) => {
    const contenedor = document.createElement("a")
    contenedor.href = `vista_mascota.html?nombre=${encodeURIComponent(mascota.idMascota)}`
    contenedor.classList.add("grid-item")

    const imagen = document.createElement("img")
    imagen.src = mascota.urlImagenMascota || "../images/testimonio5.jpg";
    imagen.alt = mascota.nombre
    imagen.classList.add("item-img")

    const nombre = document.createElement("p")
    nombre.textContent = mascota.nombre
    nombre.classList.add("item-nombre")

    contenedor.appendChild(imagen)
    contenedor.appendChild(nombre)
    seccion.appendChild(contenedor)
  })

  } catch (error) {
    console.log(error);

  }
  

  
}

cargaInicial()
mascotasSimilares()