const updateButtons = document.querySelectorAll('.update-post-btn');

updateButtons.forEach(button => {
  button.addEventListener('click', updateFormHandler);        
});

async function updateFormHandler(event) {
    event.preventDefault();
  
      if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('input[name="blogpost-title"]').value; /* added */
    const post_text = document.querySelector('input[name="blogpost-content"]').value;
    console.log(title, post_text);

    if (title && post_text) {
    const response = await fetch(`/api/dashboard/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

  }
  }


  
