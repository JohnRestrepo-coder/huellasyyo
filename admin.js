document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.form-container');
  
    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault(); 
  
      const datos = {
        nombre: document.getElementById('nombre').value,
        especie: document.getElementById('especie').value,
        raza: document.getElementById('raza').value,
        color: document.getElementById('color').value,
        caracter: document.getElementById('caracter').value,
        ninos: document.getElementById('ninos').value,
        otrasMascotas: document.getElementById('otras-mascotas').value,
        vacunado: formulario.querySelector('input[name="vacunado"]').checked,
        castrado: formulario.querySelector('input[name="castrado"]').checked,
        soloCasa: formulario.querySelector('input[name="solo-casa"]').checked,
        viajaAuto: formulario.querySelector('input[name="viaja-auto"]').checked,
        vivienda: document.getElementById('vivienda').value,
        historial: document.getElementById('historial').value,
        cuidador: document.getElementById('cuidador').value,
        tiempo: document.getElementById('tiempo').value,
        adiestramiento: document.getElementById('adiestramiento').value
      };
  
      console.log('Datos del formulario:', datos);
    });
  });