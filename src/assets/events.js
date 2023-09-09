const eventsSlides = document.querySelectorAll('.event');
const eventSlider = document.getElementById('event-slider');

const nextEventButton = document.getElementById('next-event');
const prevEventButton = document.getElementById('prev-event');
let currentEventSlide = 0;

const onNextEvent = () => {
  if (currentEventSlide === eventsSlides.length - 1) return;

  eventsSlides[currentEventSlide].classList.add('opacity-0');
  eventsSlides[currentEventSlide].classList.remove('opacity-100');

  currentEventSlide += 1;

  eventsSlides[currentEventSlide].classList.add('opacity-100');
  eventsSlides[currentEventSlide].classList.remove('opacity-0');

  eventSlider.style.transform = `translate(calc(-${
    currentEventSlide * eventsSlides[0].clientWidth
  }px - ${currentEventSlide * 40}px))`;
};

const onPrevEvent = () => {
  if (currentEventSlide === 0) return;

  currentEventSlide -= 1;

  eventSlider.style.transform = `translate(calc(-${
    currentEventSlide * eventsSlides[0].clientWidth
  }px - ${currentEventSlide * 40}px))`;

  setTimeout(() => {
    eventsSlides[currentEventSlide].classList.add('opacity-100');
    eventsSlides[currentEventSlide].classList.remove('opacity-0');
  }, 300);
};

nextEventButton.addEventListener('click', onNextEvent);
prevEventButton.addEventListener('click', onPrevEvent);

const galerySlider = document.getElementById('galery-slider');
const nextGaleryImgButton = document.getElementById('next-galery-img');
const prevGaleryImgButton = document.getElementById('prev-galery-img');
const galeryDots = document.querySelectorAll('.galery-dot');

const galerySlides = document.querySelectorAll('.galery-item');

let currentGalerySlide = 0;

const toggleSlideOff = (index) => {
  galerySlides[index].classList.add('h-80');
  galerySlides[index].classList.remove('h-96');

  galeryDots[index].classList.add('bg-white');
  galeryDots[index].classList.remove('bg-orange-main');
}

const toggleSlideOn = (index) => {
  galerySlides[index].classList.add('h-96');
  galerySlides[index].classList.remove('h-80');

  galeryDots[index].classList.add('bg-orange-main');
  galeryDots[index].classList.remove('bg-white');
}

const getTranslateValue = (item) => {
  const sliderRect = galerySlider.getBoundingClientRect();
  const slideRect = item.getBoundingClientRect();

  const distanceLeft = slideRect.left - sliderRect.left;
  const distanceRight = sliderRect.right - slideRect.right;

  let translateXAmount = 0;

  if (distanceLeft < 0) translateXAmount = -distanceLeft;
  else if (distanceRight < 0) translateXAmount = -distanceRight;

  return translateXAmount;
};

const onNextGalery = () => {
  if (currentGalerySlide === galerySlides.length - 1) return;

  toggleSlideOff(currentGalerySlide);

  currentGalerySlide += 1;

  toggleSlideOn(currentGalerySlide);

  const translateValue = getTranslateValue(galerySlides[currentGalerySlide]);

  galerySlider.style.transform = `translate(-${translateValue+20}px)`;
};

const onPrevGalery = () => {
  if (currentGalerySlide === 0) return;

  toggleSlideOff(currentGalerySlide);

  currentGalerySlide -= 1;

  toggleSlideOn(currentGalerySlide);

  const translateValue = getTranslateValue(galerySlides[currentGalerySlide]);

  galerySlider.style.transform = `translate(-${translateValue+(currentGalerySlide ? 20 : 0)}px)`;
};

const onChangeGalerySlide = (index) => {

  toggleSlideOff(currentGalerySlide)

  currentGalerySlide = index;

  toggleSlideOn(index)
  
  const translateValue = getTranslateValue(galerySlides[currentGalerySlide]);

  galerySlider.style.transform = `translate(-${translateValue}px)`;
}


nextGaleryImgButton.addEventListener('click', onNextGalery);
prevGaleryImgButton.addEventListener('click', onPrevGalery);


galeryDots.forEach((node,i) => node.addEventListener('click', () => onChangeGalerySlide(i)))
