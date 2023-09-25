// document.querySelector('.Submit-Update')
// .addEventListener('click', updateFormHandler)

// updateButtons(button => {
//   button.addEventListener('click', updateFormHandler);        
// });

async function updateFormHandler(event) {
    event.preventDefault();
  
      if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('input[name="update-title"]').value; /* added */
    const post_text = document.querySelector('input[name="update-content"]').value;
    console.log(title, post_text);

    if (title && post_text) {
    const response = await fetch(`/api/blogroutes/${id}`, {
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

  document.querySelector('.Submit-Update')
.addEventListener('click', updateFormHandler)

  
