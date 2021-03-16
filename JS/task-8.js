
//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

const input = document.querySelector('#controls input');
console.log(input);
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.


btnRender.addEventListener('click', getAmount);

function getAmount() {
    const inputValue = Number(input.value);
    createBoxes(inputValue)
}

function createBoxes(amount) {
//Размеры самого первого div - 30px на 30px
    let basicWidth = 30;
    let basicHeight = 30;
    const arrayDiv = [];
    
    for (let i = 1; i <= amount; i += 1) {
        const divEl = document.createElement('div');
        divEl.style.width = `${basicWidth}px`;
        divEl.style.height = `${basicHeight}px`;
        //Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
        basicWidth += 10;
        basicHeight += 10;

        divEl.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()})`;
        

        arrayDiv.push(divEl);
    }
    divBoxes.append(...arrayDiv);
}

//Каждый созданный div: Имеет случайный rgb цвет фона
function random() {
    return Math.floor(Math.random() * 256);
}
  


//Создай функцию destroyBoxes(), которая очищает div#boxes.

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() { 

    divBoxes.innerHTML = '';
}

