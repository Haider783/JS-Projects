const api = 'https://jsonplaceholder.typicode.com/posts';
    document.getElementById('postform').addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const body = document.getElementById('body').value;
      const post = {
        title: title,
        body: body,
        userId: 1
      };
      fetch(api, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Post created:', data);
        alert('Post created successfully!'); 
      })
      .catch(error => console.error('Error:', error));
    });