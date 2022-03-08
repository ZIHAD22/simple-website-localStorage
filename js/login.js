// global variable
const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')

// loginUser function
const loginUser = () => {
  const emailValue = userEmail.value
  const passwordValue = userPassword.value
  if (emailValue && passwordValue) {
    const stringifyUsers = localStorage.getItem('users')
    const user = JSON.parse(stringifyUsers)
    // const { email, password } = user
    if (user?.email === emailValue && user?.password === passwordValue) {
      location.assign('http://127.0.0.1:5500/index.html')
      localStorage.setItem('login', true)
    } else {
      localStorage.setItem('login', false)
      location.assign('http://127.0.0.1:5500/registration.html')
      console.log('please provide a valid information')
    }
  }
}
