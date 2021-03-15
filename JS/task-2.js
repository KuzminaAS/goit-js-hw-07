
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const listIngredients = document.querySelector('#ingredients');
// console.log(listIngredients);

const addListItem = ingredients.map((ingredient) => {
    const newItem = document.createElement('li');
    newItem.textContent = ingredient;
    return newItem;
});
// console.log(addListItem);

// listIngredients.append(...addListItem);





