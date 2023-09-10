const homeMainSlides = document.querySelectorAll('.home-main-slide');

const navigators = document.querySelectorAll('.home-slide-selector');

const eventsSlides = document.querySelectorAll('.event');
const eventSlider = document.getElementById('event-slider');

const nextEventButton = document.getElementById('next-event');
const prevEventButton = document.getElementById('prev-event');

let currentHomeSlide = 0;
let currentEventSlide = 0;

//#region home slide

const toggleSlideOff = (index) => {
  homeMainSlides[index].classList.remove('opacity-100','pointer-events-auto');
  homeMainSlides[index].classList.add('opacity-0','pointer-events-none');

  navigators[index].classList.add('bg-transparent');
  navigators[index].classList.remove('bg-white');
}

const toggleSlideOn = (index) => {
  homeMainSlides[index].classList.remove('opacity-0','pointer-events-none');
  homeMainSlides[index].classList.add('opacity-100','pointer-events-auto');

  navigators[index].classList.add('bg-white');
  navigators[index].classList.remove('bg-transparent');
}

const onNextHomeSlide = () => {
  toggleSlideOff(currentHomeSlide);

  if (currentHomeSlide == homeMainSlides.length - 1) currentHomeSlide = 0;
  else currentHomeSlide += 1;
  
  toggleSlideOn(currentHomeSlide);
}

let homeSlideInterval = setInterval(onNextHomeSlide, 6000);


const onChangeSlide = (index) => {
  clearInterval(homeSlideInterval);

  toggleSlideOff(currentHomeSlide);

  currentHomeSlide = index;
  homeSlideInterval = setInterval(onNextHomeSlide, 6000);

  toggleSlideOn(index);
}

navigators.forEach((node,i) => node.addEventListener('click', () => onChangeSlide(i)))

//#endregion


//#region event slide

const onNextEvent = () => {
  if (currentEventSlide === eventsSlides.length - 1) return;

  eventsSlides[currentEventSlide].classList.add('opacity-0');
  eventsSlides[currentEventSlide].classList.remove('opacity-100');

  currentEventSlide += 1;

  eventsSlides[currentEventSlide].classList.add('opacity-100');
  eventsSlides[currentEventSlide].classList.remove('opacity-0');

  eventSlider.style.transform = `translate(calc(-${currentEventSlide*eventsSlides[0].clientWidth}px - ${currentEventSlide*40}px))`;
}

const onPrevEvent = () => {
  if (currentEventSlide === 0) return;

  currentEventSlide -= 1;

  eventSlider.style.transform = `translate(calc(-${currentEventSlide*eventsSlides[0].clientWidth}px - ${currentEventSlide*40}px))`;

  setTimeout(() => {
    eventsSlides[currentEventSlide].classList.add('opacity-100');
    eventsSlides[currentEventSlide].classList.remove('opacity-0');
  }, 300);
}

nextEventButton.addEventListener('click',onNextEvent);
prevEventButton.addEventListener('click',onPrevEvent);

//#endregion


