

let todoList = []

display()
function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#date-input');
  todoList.push({item : inputElement.value, duedate : dateElement.value})
  inputElement.value = ''
  localStorage.setItem('todoList', JSON.stringify(todoList));
  display()
}

function display(){
  let todoListstr = localStorage.getItem('todoList');

  todoList = todoListstr ? JSON.parse(todoListstr) : []
  let displayElement = document.getElementById('todo-item');
  displayElement.innerHTML = ''
  for (i=0; i<todoList.length; i++){
    displayElement.innerHTML += `<div class="item-container" id = item-container${i}>
    <label class="label-text">${todoList[i]['item']}</label>
    <label class="label-text">${todoList[i]['duedate']}</label>

    <button class="delete-btn" onclick="todoList.splice(${i},1)
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    ; display();">Delete</button>
    
  </div>`
    }
}


