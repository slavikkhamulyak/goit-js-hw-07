const navElem = document.querySelector('#categories');
const navLiItem = navElem.querySelectorAll('.item')
console.log(`В списку ${navLiItem.length} категорії`);


console.log(`Категорія: ${navLiItem[2].querySelector('h2').textContent}
Кількість елементів: ${navLiItem[2].querySelectorAll('li').length}`);
