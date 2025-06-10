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

let max = 3;
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
        movPag.style.marginLeft = "-34%";
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
    movPag.style.marginLeft = "-68%";
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
            dedicacionTiempo: mapTiempo(document.getElementById('tiempo-preferencia').value),
            compatibilidadNinos: document.getElementById('rxninos-preferencia').value === '0',
            compatibilidadMascotas: document.getElementById('rxmascotas-preferencia').value !== '0',
            tipoVivienda: mapVivienda(document.getElementById('vivienda-preferencia').value),
            adiestramientoOfrecido: mapAdiestramiento(document.getElementById('adiestra-preferencia').value),
            viajesEnAuto: document.getElementById('viaje-preferencia').value === '0'
        };

        const mascotaPreferencia = {
            caracterPreferencia: mapCaracter(document.getElementById('caracter-preferencia').value),
            sexoPreferencia: mapSexo(document.getElementById('sexo-preferencia').value),
            especieBuscada: mapEspecie(document.getElementById('especie-preferencia').value),
            edadPreferencia: mapEdad(document.getElementById('edad-preferencia').value),
            tamanoPreferencia: mapTamaño(document.getElementById('tamaño-preferencia').value)
        };

        const jsonFinal = {
            convivencia,
            mascotaPreferencia,
            fechaNacimiento: document.getElementById("FechaNacimiento").value
        };

        JSON.stringify(jsonFinal, null, 2)

        const token = localStorage.getItem("tokenUsuario");
        const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
        const response = await fetch(`https://njejgfaqpr.us-east-1.awsapprunner.com/usuarios/preferencias/${usuarioLogeado.idUsuario}`, {
            method: 'POST',
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
                window.location.href = '../index.html';
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
    movPag.style.marginLeft = "-34%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});


// FUNCIONES DE MAPEO PARA INPUTS
function mapTiempo(value) {
    const map = {
        '0': '1 hora',
        '1': '1 - 3 horas',
        '2': 'Más de 3 horas',
        '3': 'Mayor parte del día'
    };
    return map[value];
}

function mapVivienda(value) {
    return ['Casa', 'Apartamento', 'Finca'][value];
}

function mapAdiestramiento(value) {
    const map = {
        '0': 'Sin adiestramiento',
        '1': 'Adiestramiento básico',
        '2': 'Adiestramiento completo'
    };
    return map[value];
}

function mapCaracter(value) {
    return value === '0' ? 'Activo' : 'Pasivo';
}

function mapSexo(value) {
    return value === '1' ? 'Hembra' : value === '2' ? 'Macho' : 'N/A';
}

function mapEspecie(value) {
    const map = {
        '0': 'Cualquiera',
        '1': 'Gato(a)',
        '2': 'Perro(a)'
    };
    return map[value];
}

function mapEdad(value) {
    const map = {
        '0': 'Cualquiera',
        '1': 'Cachorro(a)',
        '2': 'Joven',
        '3': 'Adulto(a)'
    };
    return map[value];
}

function mapTamaño(value) {
    const map = {
        '0': 'N/A',
        '1': 'Pequeño',
        '2': 'Mediano',
        '3': 'Grande'
    };
    return map[value];
}

