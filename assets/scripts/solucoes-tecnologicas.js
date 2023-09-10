const systemSlides = document.querySelectorAll('.system-slide');

let currentSystemSlide = 0;

const onNextSystemSlide = () => {
  systemSlides[currentSystemSlide].classList.remove('opacity-100');
  systemSlides[currentSystemSlide].classList.add('opacity-0');

  if (currentSystemSlide == systemSlides.length - 1) currentSystemSlide = 0;
  else currentSystemSlide += 1;

  systemSlides[currentSystemSlide].classList.remove('opacity-0');
  systemSlides[currentSystemSlide].classList.add('opacity-100');  
}

setInterval(onNextSystemSlide, 6000);
