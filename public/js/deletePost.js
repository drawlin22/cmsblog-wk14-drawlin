async function deleteHandler(event) {
    event.preventDefault();
  
    const id = document.querySelector('.delete-post-btn').getAttribute('data-id')
  
    const response = await fetch(`/api/blogroutes/${id}`, {
      method: 'DELETE',    
    });    
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('.delete-post-btn').addEventListener('click', deleteHandler);

