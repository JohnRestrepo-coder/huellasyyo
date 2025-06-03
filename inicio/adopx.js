const slider = document.getElementById('slider');
const cards = Array.from(document.querySelectorAll('.card'));
const dots = Array.from(document.querySelectorAll('.dot'));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

function debounce(fn, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

window.addEventListener('resize', debounce(verificarPuntoDeCorte, 200));

function verificarPuntoDeCorte() {
  const ancho = window.innerWidth;

  slider.innerHTML = '';

  let tarjetasPorSlide;
  let dotsToShow;

  if (ancho < 700) {
    tarjetasPorSlide = 1;
    dotsToShow = [0,1,2,3,4,5];
  } else if (ancho < 1280) {
    tarjetasPorSlide = 2;
    dotsToShow = [0,1,2];
  } else {
    tarjetasPorSlide = 3;
    dotsToShow = [0,1];
  }

  actualizarDots(dotsToShow);

  const totalSlides = Math.ceil(cards.length / tarjetasPorSlide);
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const start = i * tarjetasPorSlide;
    const end = start + tarjetasPorSlide;
    const grupo = cards.slice(start, end);
    grupo.forEach(card => slide.appendChild(card));
    slider.appendChild(slide);
  }
  dots.forEach(dot => dot.classList.remove('active'));
  dots[0].classList.add('active')
  slider.style.transform = 'translateX(0%)';
}

function actualizarDots(visibleIndexes) {
  dots.forEach((dot, index) => {
    dot.classList.toggle('d-none', !visibleIndexes.includes(index));
  });
}

verificarPuntoDeCorte();