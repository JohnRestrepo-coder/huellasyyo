document.addEventListener("DOMContentLoaded", function () {
    const tarjetas = document.querySelectorAll(".mascota-card");
  
    tarjetas.forEach((tarjeta) => {
      tarjeta.addEventListener("click", function () {
        if (tarjeta.classList.contains("is-flipped")) {
          tarjeta.classList.remove("is-flipped");
        } else {
          tarjetas.forEach(t => t.classList.remove("is-flipped"));
          tarjeta.classList.add("is-flipped");
        }
      });
    });
  });