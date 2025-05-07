document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista-mascotas');
    const btnEliminarTodo = document.getElementById('eliminar-todo');
    let mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];
  
    function renderMascotas() {
      contenedor.innerHTML = '';
  
      if (mascotas.length === 0) {
        contenedor.innerHTML = '<p>No hay mascotas registradas.</p>';
        return;
      }
  
      mascotas.forEach((mascota, index) => {
        const div = document.createElement('div');
        div.classList.add('tarjeta-mascota');
  
        div.innerHTML = `
          <h2>${mascota.nombre}</h2>
          <p><strong>Especie:</strong> ${mascota.especie}</p>
          <p><strong>Raza:</strong> ${mascota.raza}</p>
          <p><strong>Edad:</strong> ${mascota.edad} año(s)</p>
          <p><strong>Tamaño:</strong> ${mascota.tamano}</p>
          <p><strong>Color:</strong> ${mascota.color}</p>
          <p><strong>Carácter:</strong> ${mascota.caracter}</p>
          <p><strong>Compatible con niños:</strong> ${mascota.ninos}</p>
          <p><strong>Compatible con otras mascotas:</strong> ${mascota.otrasMascotas}</p>
          <p><strong>Vacunado:</strong> ${mascota.vacunado ? 'Sí' : 'No'}</p>
          <p><strong>Castrado:</strong> ${mascota.castrado ? 'Sí' : 'No'}</p>
          <p><strong>Historial médico:</strong> ${mascota.historial}</p>
          <button class="eliminar" data-index="${index}">Eliminar</button>
          <hr>
        `;
  
        contenedor.appendChild(div);
      });
  
      
      document.querySelectorAll('.eliminar').forEach(btn => {
        btn.addEventListener('click', e => {
          const index = e.target.dataset.index;
          mascotas.splice(index, 1);
          localStorage.setItem('mascotas', JSON.stringify(mascotas));
          renderMascotas(); 
        });
      });
    }
  
   
    if (btnEliminarTodo) {
      btnEliminarTodo.addEventListener('click', () => {
        localStorage.removeItem('mascotas');
        mascotas = [];
        renderMascotas();
      });
    }
  
    renderMascotas();
  });
  