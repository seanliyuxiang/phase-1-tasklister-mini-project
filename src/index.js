document.addEventListener("DOMContentLoaded", () => {
  // why selecting the outer form tag, why not selecting the inside submit input tag
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
    form.reset();
  });
});

function buildToDo(todo) {
  let newTask = document.createElement('li');
  let deleteBtn = document.createElement('button');
  deleteBtn.addEventListener('click', handleDelete)
  deleteBtn.innerText = ' x';
  newTask.innerText = `${todo} `;
  newTask.appendChild(deleteBtn);
  document.querySelector('#tasks').appendChild(newTask);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}