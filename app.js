// /*Compass: https://thenounproject.com/search/?q=compass&i=592352*/

// const arrow = document.querySelector('.arrow')
// const speed = document.querySelector('.speed-value')


// navigator.geolocation.watchPosition((data) => {
//     console.log(data)
//     speed.textContent = data.coords.latitude
// })

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err);
});