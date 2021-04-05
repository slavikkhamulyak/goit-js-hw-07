const btn = document.querySelectorAll('#counter button');
console.log(btn);

let btnInc = btn[1].addEventListener('click', increment);
let btnDec = btn[0].addEventListener('click', decrement);

function increment () {
  let value = +document.querySelector('#value').textContent;
  document.querySelector('#value').textContent = value + 1;
};

function decrement () {
  let value = +document.querySelector('#value').textContent;
  document.querySelector('#value').textContent = value - 1;
}