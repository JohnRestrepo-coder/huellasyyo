const agregarTargetas = (mascotasActualizadas) => {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";

  for (const mascota of mascotasActualizadas) {
    const link = document.createElement("a");
    link.href = `vista_mascota.html?nombre=${encodeURIComponent(mascota.nombre)}`;
    link.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = "../images/testimonio5.jpg"; 
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


(function () {
  const nuevaMascotas = [
    {
      nombre: "Luna",
      sexo: "Hembra",
      especie: "Perro",
      raza: "Golden Retriever",
      razaMixta: "Criollo-Labrador",
      edad: "3",
      tamano: "Mediano",
      color: "Dorado",
      caracter: "Juguetón",
      ninos: "Sí",
      otrasMascotas: "Con gatos",
      vacunado: true,
      castrado: true,
      soloCasa: false,
      viajaAuto: true,
      vivienda: "Casa",
      historial: "Sana, vacunada, y alegre.",
      cuidador: "No",
      tiempo: "Una hora",
      adiestramiento: "Básico"
    },
    {
      nombre: "Max",
      sexo: "Macho",
      especie: "Perro",
      raza: "Bulldog",
      razaMixta: "Criollo-Bulldog",
      edad: "5",
      tamano: "Grande",
      color: "Blanco",
      caracter: "Pasivo",
      ninos: "No",
      otrasMascotas: "No",
      vacunado: true,
      castrado: true,
      soloCasa: true,
      viajaAuto: false,
      vivienda: "Finca",
      historial: "Tiene historial de alergias.",
      cuidador: "Sí",
      tiempo: "Más de una hora",
      adiestramiento: "Avanzado"
    },
    {
      nombre: "Mia",
      sexo: "Hembra",
      especie: "Gato",
      raza: "Criollo",
      razaMixta: "Criollo-Poodle",
      edad: "2",
      tamano: "Pequeño",
      color: "Negro",
      caracter: "Activo",
      ninos: "Sí",
      otrasMascotas: "Con perros",
      vacunado: false,
      castrado: false,
      soloCasa: true,
      viajaAuto: true,
      vivienda: "Departamento",
      historial: "Requiere vacunación.",
      cuidador: "No",
      tiempo: "Una hora",
      adiestramiento: "No Aplica"
    },
    {
      nombre: "Simba",
      sexo: "Macho",
      especie: "Perro",
      raza: "Pastor Alemán",
      razaMixta: "Criollo-Pastor Alemán",
      edad: "4",
      tamano: "Grande",
      color: "Marrón",
      caracter: "Activo",
      ninos: "Sí",
      otrasMascotas: "Con gatos",
      vacunado: true,
      castrado: false,
      soloCasa: false,
      viajaAuto: true,
      vivienda: "Casa",
      historial: "Sufrió fractura de pata, ya recuperado.",
      cuidador: "Sí",
      tiempo: "Más de una hora",
      adiestramiento: "Básico"
    },
    {
      nombre: "Nina",
      sexo: "Hembra",
      especie: "Perro",
      raza: "Poodle",
      razaMixta: "Criollo-Shih Tzu",
      edad: "1",
      tamano: "Pequeño",
      color: "Blanco",
      caracter: "Juguetón",
      ninos: "Sí",
      otrasMascotas: "Con perros",
      vacunado: true,
      castrado: false,
      soloCasa: false,
      viajaAuto: true,
      vivienda: "Departamento",
      historial: "Muy joven y activa.",
      cuidador: "No",
      tiempo: "Una hora",
      adiestramiento: "Básico"
    },
    {
      nombre: "Rocky",
      sexo: "Macho",
      especie: "Perro",
      raza: "Pitbull",
      razaMixta: "Criollo-Pitbull",
      edad: "6",
      tamano: "Grande",
      color: "Gris",
      caracter: "Pasivo",
      ninos: "No",
      otrasMascotas: "No",
      vacunado: true,
      castrado: true,
      soloCasa: true,
      viajaAuto: false,
      vivienda: "Finca",
      historial: "Entrenado para vigilancia.",
      cuidador: "Sí",
      tiempo: "Más de una hora",
      adiestramiento: "Avanzado"
    },
    {
      nombre: "Toby",
      sexo: "Macho",
      especie: "Perro",
      raza: "Beagle",
      razaMixta: "Criollo-Beagle",
      edad: "2",
      tamano: "Mediano",
      color: "Tricolor",
      caracter: "Activo",
      ninos: "Sí",
      otrasMascotas: "Con gatos",
      vacunado: false,
      castrado: false,
      soloCasa: true,
      viajaAuto: true,
      vivienda: "Casa",
      historial: "Requiere control veterinario anual.",
      cuidador: "No",
      tiempo: "Una hora",
      adiestramiento: "Básico"
    },
    {
      nombre: "Coco",
      sexo: "Hembra",
      especie: "Gato",
      raza: "Criollo",
      razaMixta: "Criollo-Golden Retriever",
      edad: "3",
      tamano: "Pequeño",
      color: "Blanco y negro",
      caracter: "Pasivo",
      ninos: "Sí",
      otrasMascotas: "Con perros",
      vacunado: true,
      castrado: true,
      soloCasa: true,
      viajaAuto: false,
      vivienda: "Departamento",
      historial: "Ha tenido problemas digestivos.",
      cuidador: "No",
      tiempo: "Una hora",
      adiestramiento: "No Aplica"
    }
  ];

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


