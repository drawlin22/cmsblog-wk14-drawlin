async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector(".blogTitle").value;
    const post_text = document.querySelector(".blogText").value;
  
    const response = await fetch(`/api/blogroutes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  

  document.querySelector(".submitPost").addEventListener("click", newPostHandler);