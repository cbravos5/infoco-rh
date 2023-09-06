const items = [
  document.getElementById('home-slide-1'),
  document.getElementById('home-slide-3')
];

const navigators = document.querySelectorAll('.home-slide-selector');

let currentHomeSlide = 0;

const toggleSlideOff = (index) => {
  items[index].classList.remove('opacity-100','pointer-events-auto');
  items[index].classList.add('opacity-0','pointer-events-none');

  navigators[index].classList.add('bg-transparent');
  navigators[index].classList.remove('bg-white');
}

const toggleSlideOn = (index) => {
  items[index].classList.remove('opacity-0','pointer-events-none');
  items[index].classList.add('opacity-100','pointer-events-auto');

  navigators[index].classList.add('bg-white');
  navigators[index].classList.remove('bg-transparent');
}

const onNextHomeSlide = () => {
  toggleSlideOff(currentHomeSlide);

  if (currentHomeSlide == items.length - 1) currentHomeSlide = 0;
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