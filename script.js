const h3Css = document.querySelector('.p');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const bg = document.querySelector('body');
const btn = document.querySelector('.btn');

color1.addEventListener('input', colors);
color2.addEventListener('input', colors);

function colors() {
  bg.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
  h3Css.textContent = `${bg.style.background}`;
}

btn.addEventListener('click', function () {
  let rndC1 = Math.floor(Math.random() * 100);
  let rndC2 = Math.floor(Math.random() * 100);
  let rndC3 = Math.floor(Math.random() * 100);
  let rndC4 = Math.floor(Math.random() * 100);
  let rndC5 = Math.floor(Math.random() * 100);
  let rndC6 = Math.floor(Math.random() * 100);
  bg.style.background = `linear-gradient(to right, rgb(${rndC1},${rndC2},${rndC3}), rgb(${rndC4},${rndC5},${rndC6})`;
  h3Css.textContent = `${bg.style.background}`;
});

// console.log(rndC);
