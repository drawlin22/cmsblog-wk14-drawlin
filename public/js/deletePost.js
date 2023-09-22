const deleteButtons = document.querySelectorAll('.delete-post-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', deleteHandler);
});

async function deleteHandler(event) {
    event.preventDefault();
  
      if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id')
  
    const response = await fetch(`/api/blogroutes/${id}`, {
      method: 'DELETE',    
    });    
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  }


