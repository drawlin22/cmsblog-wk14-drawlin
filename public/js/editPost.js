const updateButtons = document.querySelectorAll('.update-post-btn');

updateButtons.forEach(button => {
  button.addEventListener('click', updateFormHandler);
});

async function updateFormHandler(event) {
    event.preventDefault();
  
      if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('input[name="update-title"]').value;
    const post_text = document.querySelector('textarea[name="update-content"]').value;

    if (title && post_text) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  }

  
