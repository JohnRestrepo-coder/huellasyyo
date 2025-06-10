import Validator from "../utils/validator.js";

const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const pagina = document.querySelectorAll(".pagina")
const formulario = document.querySelector(".form-princ")

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let cont = 1;

const validator = new Validator();

validator.addField('FechaNacimiento', [
  { rule: 'required', message: 'La fecha de nacimiento es obligatoria.' },
  { rule: 'age18Plus', message: 'Debe ser mayor de 18 años.' },
]);


btn_adelante2.addEventListener("click", function (e) {
  if (validator.validateAll()) {
    e.preventDefault();
    pagina[1].style.height = "500px";
    formulario.style.height = "500px";
    movPag.style.marginLeft = "-100vw";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
  }
});

btn_adelante3.addEventListener("click", function (e) {
  e.preventDefault();
  pagina[2].style.height = "auto";
  formulario.style.height = "auto";
  movPag.style.marginLeft = "-200vw";
  num[cont - 1].classList.add("active");
  progressCheck[cont - 1].classList.add("active");
  progressText[cont - 1].classList.add("active");
  cont += 1;
});

btn_final.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    const convivencia = {
      experiencia: document.getElementById('experiencia-preferencia').value === '1',
      dedicacionTiempo: MapasPreferencias.tiempo.map[document.getElementById('tiempo-preferencia').value],
      compatibilidadNinos: document.getElementById('rxninos-preferencia').value === '0',
      compatibilidadMascotas: document.getElementById('rxmascotas-preferencia').value !== '0',
      tipoVivienda: MapasPreferencias.vivienda.map[document.getElementById('vivienda-preferencia').value],
      adiestramientoOfrecido: MapasPreferencias.adiestramiento.map[document.getElementById('adiestra-preferencia').value],
      viajesEnAuto: document.getElementById('viaje-preferencia').value === '0'
    };

    const mascotaPreferencia = {
      caracterPreferencia: MapasPreferencias.caracter.map[document.getElementById('caracter-preferencia').value],
      sexoPreferencia: MapasPreferencias.sexo.map[document.getElementById('sexo-preferencia').value],
      especieBuscada: MapasPreferencias.especie.map[document.getElementById('especie-preferencia').value],
      edadPreferencia: MapasPreferencias.edad.map[document.getElementById('edad-preferencia').value],
      tamanoPreferencia: MapasPreferencias.tamano.map[document.getElementById('tamaño-preferencia').value]
    };

    const jsonFinal = {
      convivencia,
      mascotaPreferencia,
      fechaNacimiento: document.getElementById("FechaNacimiento").value
    };

    JSON.stringify(jsonFinal, null, 2)

    const token = localStorage.getItem("tokenUsuario");
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
    const response = await fetch(`https://njejgfaqpr.us-east-1.awsapprunner.com/usuarios/${usuarioLogeado.idUsuario}/preferencias`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(jsonFinal, null, 2)
    })

    if (response.ok) {
      num[cont - 1].classList.add("active");
      progressCheck[cont - 1].classList.add("active");
      progressText[cont - 1].classList.add("active");
      cont += 1;
      Swal.fire({
        title: '¡Preferencias guardadas con éxito!',
        icon: 'success',
        timer: 5000,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        customClass: {
          popup: 'mi-alerta-personalizada',
          confirmButton: 'ok-personalizado',
        }
      }).then(() => {
        window.location.reload();
      });
    }

  } catch (error) {
    Swal.fire({
      title: '¡Error al guardar las preferencias!',
      text: 'Por favor, revisa los campos del formulario e intenta nuevamente.',
      icon: 'error',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'mi-alerta-personalizada',
        confirmButton: 'ok-personalizado',
      }
    });
    console.log(error)
  }

});

btn_atras1.addEventListener("click", function (e) {
  e.preventDefault();
  pagina[0].style.height = "200px";
  formulario.style.height = "200px";
  movPag.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras2.addEventListener("click", function (e) {
  e.preventDefault();
  pagina[1].style.height = "500px";
  formulario.style.height = "500px";
  movPag.style.marginLeft = "-100vw";
  num[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  cont -= 1;
});


// llenado de campos con datos de back
function rellenarFormularioPreferencias(convivencia, mascotaPreferencia, fechaNacimiento) {

  // fechaNacimiento
  document.getElementById('FechaNacimiento').value = fechaNacimiento

  // Convivencia
  document.getElementById('experiencia-preferencia').value = convivencia.experiencia ? '1' : '0';
  document.getElementById('tiempo-preferencia').value = MapasPreferencias.tiempo.unmap[convivencia.dedicacionTiempo];
  document.getElementById('rxninos-preferencia').value = convivencia.compatibilidadNinos ? '0' : '1';
  document.getElementById('rxmascotas-preferencia').value = convivencia.compatibilidadMascotas ? '1' : '0';
  document.getElementById('vivienda-preferencia').value = MapasPreferencias.vivienda.unmap[convivencia.tipoVivienda];
  document.getElementById('adiestra-preferencia').value = MapasPreferencias.adiestramiento.unmap[convivencia.adiestramientoOfrecido];
  document.getElementById('viaje-preferencia').value = convivencia.viajesEnAuto ? '0' : '1';

  // Mascota Preferencia
  document.getElementById('caracter-preferencia').value = MapasPreferencias.caracter.unmap[mascotaPreferencia.caracterPreferencia];
  document.getElementById('sexo-preferencia').value = MapasPreferencias.sexo.unmap[mascotaPreferencia.sexoPreferencia];
  document.getElementById('especie-preferencia').value = MapasPreferencias.especie.unmap[mascotaPreferencia.especieBuscada];
  document.getElementById('edad-preferencia').value = MapasPreferencias.edad.unmap[mascotaPreferencia.edadPreferencia];
  document.getElementById('tamaño-preferencia').value = MapasPreferencias.tamano.unmap[mascotaPreferencia.tamanoPreferencia];
}

window.addEventListener('load', async () => {
  await buscarData();
});


const buscarData = async () => {
  try {
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
    if (!usuarioLogeado) {
      window.location.href = '../index.html';
      return
    }

    document.getElementById('contenedorgeneral').classList.add('visible');
    const token = localStorage.getItem("tokenUsuario");
    const response = await fetch(`https://njejgfaqpr.us-east-1.awsapprunner.com/usuarios/traerpreferencias/${usuarioLogeado.idUsuario}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (response.ok) {
      const { convivencia, mascotaPreferencia, fechaNacimiento } = await response.json();
      rellenarFormularioPreferencias(convivencia, mascotaPreferencia, fechaNacimiento)
    }

  } catch (error) {
    console.log(error)
  }
}

// FUNCIONES DE MAPEO PARA INPUTS
const MapasPreferencias = {
  tiempo: {
    map: {
      '0': '1 hora',
      '1': '1 - 3 horas',
      '2': 'Más de 3 horas',
      '3': 'Mayor parte del día'
    },
    unmap: {
      '1 hora': '0',
      '1 - 3 horas': '1',
      'Más de 3 horas': '2',
      'Mayor parte del día': '3'
    }
  },
  vivienda: {
    map: {
      '0': 'Casa',
      '1': 'Apartamento',
      '2': 'Finca'
    },
    unmap: {
      'Casa': '0',
      'Apartamento': '1',
      'Finca': '2'
    }
  },
  adiestramiento: {
    map: {
      '0': 'Sin adiestramiento',
      '1': 'Adiestramiento básico',
      '2': 'Adiestramiento completo'
    },
    unmap: {
      'Sin adiestramiento': '0',
      'Adiestramiento básico': '1',
      'Adiestramiento completo': '2'
    }
  },
  caracter: {
    map: {
      '0': 'Activo',
      '1': 'Pasivo'
    },
    unmap: {
      'Activo': '0',
      'Pasivo': '1'
    }
  },
  sexo: {
    map: {
      '1': 'Hembra',
      '2': 'Macho',
      '0': 'N/A'
    },
    unmap: {
      'Hembra': '1',
      'Macho': '2',
      'N/A': '0'
    }
  },
  especie: {
    map: {
      '0': 'Cualquiera',
      '1': 'Gato(a)',
      '2': 'Perro(a)'
    },
    unmap: {
      'Cualquiera': '0',
      'Gato(a)': '1',
      'Perro(a)': '2'
    }
  },
  edad: {
    map: {
      '0': 'Cualquiera',
      '1': 'Cachorro(a)',
      '2': 'Joven',
      '3': 'Adulto(a)'
    },
    unmap: {
      'Cualquiera': '0',
      'Cachorro(a)': '1',
      'Joven': '2',
      'Adulto(a)': '3'
    }
  },
  tamano: {
    map: {
      '0': 'N/A',
      '1': 'Pequeño',
      '2': 'Mediano',
      '3': 'Grande'
    },
    unmap: {
      'N/A': '0',
      'Pequeño': '1',
      'Mediano': '2',
      'Grande': '3'
    }
  }
};

atras.addEventListener('click', () => {
  sidebar.classList.toggle("ocultar")
  contenido.classList.toggle("ocultar")
});

