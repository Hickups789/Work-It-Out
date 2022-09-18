const axios = require('axios').default;

async function loginFormHandler(event) {
    event.preventDefault();
  
    const userEmail = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();
    console.log(userEmail)
    console.log(userPassword)

    if (email && password) {
      const response = await fetch('/api/users/login', {

        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log(response)
        document.location.replace('/selectWorkout/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);