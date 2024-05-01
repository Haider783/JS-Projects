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
          saveTasksToLocalStorage(); 
          displayTasks();
          taskInput.value = '';
      }
  });

  function displayTasks() {
      taskList.innerHTML = '';

      tasks.forEach(function (task, index) {
          const li = document.createElement('li');
          li.textContent = task;

          // Edit Button
          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.classList.add('edit');
          editButton.addEventListener('click', function () {
              editTask(index);
          });

          // Delete Button
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
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
      const updatedTaskText = prompt('Edit Task:', tasks[index]);
      if (updatedTaskText !== null && updatedTaskText.trim() !== '') {
          tasks[index] = updatedTaskText.trim();
          saveTasksToLocalStorage(); 
          displayTasks();
      }
  }

  function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasksToLocalStorage(); 
      displayTasks();
  }

  function saveTasksToLocalStorage() {
      try {
          localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
          console.error('Error saving tasks to local storage:', error);
      }
  }
});
