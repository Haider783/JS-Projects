document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(users => {
        const userList = document.getElementById('user-list');
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  });
  