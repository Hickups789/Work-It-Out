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
          document.location.replace('/selectworkout/');
          alert(res.statusText);
      })
      .catch(err => {
        console.log(err)
        alert('Invalid Email or Password')
      })
    }
  }

async function signupFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();
  const userEmail = document.querySelector('#email-signup').value.trim();
  const userPassword = document.querySelector('#password-signup').value.trim();

  if (userName && userEmail && userPassword) {
    axios.post('/api/user', {
      username: userName,
      email: userEmail,
      password: userPassword
    })
    .then(res => {
      console.log(res)
      document.location.replace('/selectworkout/');
      alert(res.statusText);
    })
    .catch(err => {
      console.log(err)
      alert('Something happened')
    })
  }
}


if(location.href.includes('login')){
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
} else if(location.href.includes('signup')) {
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
}