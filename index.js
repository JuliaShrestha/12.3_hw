/*
Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. 
Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

Покроковий план:

1-Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
2-Додайте обробник подій до списку завдань ul, використовуючи делегування.
3-При кліку на будь-якій кнопці видалення, видаліть цей пункт.
4-Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.
*/

const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', (event) => {
    if(event.target && event.target.matches('.delete-button')) {
        let listItem = event.target.closest('.task-item')
        
        if(listItem) {
            listItem.remove();
        }
    }
});

const input = document.querySelector('.add-new-task');
const addButton = document.querySelector('.add-task-button');

addButton.addEventListener('click', () => {

    if(!input.value.trim()) {
        input.value = '';
        return;
    } 

    const newTask = document.createElement('li');
    newTask.classList.add('task-item');

    const spanTask = document.createElement('span');
    spanTask.textContent = input.value.trim();

    newTask.appendChild(spanTask);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Видалити';
    
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    input.value = '';
});

//ЗАДЕПЛОЇТИ