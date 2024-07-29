document.getElementById('contactButton').addEventListener('click', function() {
    var form = document.getElementById('contactForm');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
  
  function sendMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert('Message sent!');
     
    } else {
      alert('Please fill out all fields.');
    }
  }