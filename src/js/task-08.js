const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

render.addEventListener("click", addCreateBoxes);
destroy.addEventListener("click", destroyBoxes);

function addCreateBoxes() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    const divSize = 30 + i * 10;
    divEl.setAttribute(
      "style",
      `width: ${divSize}px; height: ${divSize}px; background-color: rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
    );
    fragment.appendChild(divEl);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  return (boxes.innerHTML = "");
}

function randomInt() {
  return Math.floor(Math.random() * 256);
}