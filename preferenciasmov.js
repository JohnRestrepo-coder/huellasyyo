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

btn_adelante2.addEventListener("click", function (e) {
    e.preventDefault();
    pagina[1].style.height = "auto";
    formulario.style.height = "auto";
    movPag.style.marginLeft = "-34%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
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

btn_final.addEventListener("click", function (e) {
    e.preventDefault();
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
    // alert("Aquí finaliza el registro de tus preferencias.")
    //Swal.fire("¡Preferencias guardadas con exito!");
    Swal.fire({
        title: '¡Preferencias guardadas con éxito!',
        icon: 'success',
        customClass: {
            popup: 'mi-alerta-personalizada',
            confirmButton: 'ok-personalizado',            
        }        
    });

});

btn_atras1.addEventListener("click", function (e) {
    e.preventDefault();
    pagina[0].style.height = "400px";
    formulario.style.height = "400px";
    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras2.addEventListener("click", function (e) {
    e.preventDefault();
    pagina[1].style.height = "auto";
    formulario.style.height = "auto";
    movPag.style.marginLeft = "-34%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});