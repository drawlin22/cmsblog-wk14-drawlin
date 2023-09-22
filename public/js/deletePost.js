const deleteButtons = document.querySelectorAll('.delete-post-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', deleteHandler);
});

async function deleteHandler(event) {
    event.preventDefault();
  
    const id = document.querySelectorAll('.delete-post-btn').getAttribute('data-id')
  
    const response = await fetch(`/api/blogroutes/${id}`, {
      method: 'DELETE',    
    });    
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelectorAll('.delete-post-btn').addEventListener('click', deleteHandler);

