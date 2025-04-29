const slider = document.getElementById('slider');
  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Cambiar el slide
      slider.style.transform = 'translateX(-' + (index * 100) + '%)';

      // Actualizar la clase 'active'
      dots.forEach(function(d) {
        d.classList.remove('active');        
      }); 
      dot.classList.add('active');
    });
  });