const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navElem = document.querySelector('#ingredients');


const newIngredients = ingredients.map(ing => {
  const navLi = document.createElement('li');
  navLi.textContent = ing;

  return navLi;
});

console.log(newIngredients);
navElem.append(...newIngredients);

