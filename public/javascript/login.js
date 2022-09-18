async function loginFormHandler(event) {
    event.preventDefault();
  
    const userEmail = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();
    console.log(userEmail)
    console.log(userPassword)

    if (userEmail && userPassword) {
      axios.post('/api/user/login', {
        email: userEmail,
        password: userPassword
      })
      .then(res => {
          console.log(res)
          document.location.replace('/selectWorkout/');
          alert(res.statusText);
      })
      .catch(err => {
        console.log(err)
        alert('Invalid Email or Password')
      })
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  /*document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);*/
