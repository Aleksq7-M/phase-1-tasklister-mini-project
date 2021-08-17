const main = document.querySelector('#main-content');
const inputForm = main.querySelector('form');
const listContainer = main.querySelector('#list ul');
let toDoItems = main.querySelectorAll('li');
console.log(toDoItems)

inputForm.addEventListener('submit', e => {
  e.preventDefault()
  // console.log(e);
  buildListItem(e.target);
  inputForm.reset()
  console.log(toDoItems)
})

function buildListItem(target){
  //creates list items, each containing
  //priority
  //task description
  //delete button
  let li = document.createElement('li');
  li.className = 'to_do'
  let priorityFlag = '';
  switch(true){
    case target.priority_list.value === 'low':
      priorityFlag = '!   ';
      break;
    case target.priority_list.value === 'medium':
      priorityFlag = '!!  ';
      break;
    case target.priority_list.value === 'high':
      priorityFlag = '!!! ';
      break;
  }
  li.textContent = priorityFlag + `${target.new_task_description.value} ` + `DUE: ${target.due_date.value}`;
  let btn = document.createElement('button');
  btn.textContent = 'X'
  btn.addEventListener('click', (e) => e.target.parentNode.remove())
  li.appendChild(btn);
  listContainer.appendChild(li);

}