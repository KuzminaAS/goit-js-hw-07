/* Напиши скрипт, который выполнит следующие операции.

1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */

const categories = document.querySelectorAll("#categories .item");
console.log(categories);

console.log(`В списке ${categories.length} категории.`);

for (const elem of categories) {
    const textTitle = elem.querySelector('h2').textContent;
    const elemCategory = elem.querySelectorAll('ul li').length;
    // console.log(`Категория: ${textTitle} Количество элементов: ${elemCategory}`);
}








