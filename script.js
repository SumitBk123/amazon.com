// book slider
const track = document.querySelector('.slider-track');
const btnLeft = document.querySelector('.slider-btn-left');
const btnRight = document.querySelector('.slider-btn-right');

btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
});
// Movie Slider

const movieSlider = document.getElementById('movie-slider');
const movieLeft = document.getElementById('movie-left');
const movieRight = document.getElementById('movie-right');

movieLeft.addEventListener('click', () => {
  movieSlider.scrollBy({ left: -300, behavior: 'smooth' });
});
movieRight.addEventListener('click', () => {
  movieSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

//for back to top property
document.querySelector('.foot-panel1').addEventListener('click', function () {
  window.scrollTo({
  top: 0,
  behavior: 'smooth' // This makes it scroll smoothly
  });
});    


