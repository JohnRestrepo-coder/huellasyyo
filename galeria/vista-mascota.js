const cargaInicial = () => {
  const params = new URLSearchParams(window.location.search)
  const nombreMascota = params.get("nombre")

  if (nombreMascota) {
    const key = "mascotas";
    const mascotas = JSON.parse(localStorage.getItem(key)) || []
    const mascota = mascotas.find(m => m.nombre === nombreMascota)

    if (mascota) {
      document.getElementById("nombre").textContent = mascota.nombre
      document.getElementById("especie").textContent = mascota.especie
      document.getElementById("raza").textContent = mascota.razaMixta || mascota.raza
      document.getElementById("edad").textContent = mascota.edad
      document.getElementById("tamano").textContent = mascota.tamano
      document.getElementById("color").textContent = mascota.color
      document.getElementById("caracter").textContent = mascota.caracter
      document.getElementById("ninos").textContent = mascota.ninos
      document.getElementById("otrasMascotas").textContent = mascota.otrasMascotas
      document.getElementById("vacunado").textContent = mascota.vacunado ? "Sí" : "No"
      document.getElementById("castrado").textContent = mascota.castrado ? "Sí" : "No"
      document.getElementById("historial").textContent = mascota.historial
    } else {
      document.querySelector(".informacion").innerHTML = "<p>Mascota no encontrada.</p>"
    }
  } else {
    document.querySelector(".informacion").innerHTML = "<p>No se especificó ninguna mascota.</p>"
  }
}

const mascotasSimilares = () => {
  const key = "mascotas"
  const mascotas = JSON.parse(localStorage.getItem(key)) || []

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
    contenedor.href = `vista_mascota.html?nombre=${encodeURIComponent(mascota.nombre)}`
    contenedor.classList.add("grid-item")

    const imagen = document.createElement("img")
    imagen.src = "../images/testimonio5.jpg"
    imagen.alt = mascota.nombre
    imagen.classList.add("item-img")

    const nombre = document.createElement("p")
    nombre.textContent = mascota.nombre
    nombre.classList.add("item-nombre")

    contenedor.appendChild(imagen)
    contenedor.appendChild(nombre)
    seccion.appendChild(contenedor)
  })
}

cargaInicial()
mascotasSimilares()