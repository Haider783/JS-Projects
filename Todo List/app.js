document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  displayTasks();

  taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          tasks.push(taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          displayTasks();
          taskInput.value = '';
      }
  });

  function displayTasks() {
      taskList.innerHTML = '';

      tasks.forEach(function (task, index) {
          const li = document.createElement('li');
          li.textContent = task;

          const editButton = document.createElement('span');
          editButton.textContent = ' ✎';
          editButton.classList.add('edit');
          editButton.addEventListener('click', function () {
              editTask(index);
          });

          const deleteButton = document.createElement('span');
          deleteButton.textContent = ' ❌';
          deleteButton.classList.add('delete');
          deleteButton.addEventListener('click', function () {
              deleteTask(index);
          });

          li.appendChild(editButton);
          li.appendChild(deleteButton); 
          taskList.appendChild(li);
      });
  }

  function editTask(index) {
      const newTaskText = prompt("Edit Task", tasks[index]);
      if (newTaskText !== null) {
          tasks[index] = newTaskText.trim();
          localStorage.setItem('tasks', JSON.stringify(tasks));
          displayTasks();
      }
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
  }
});
