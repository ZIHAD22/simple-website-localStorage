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
      location.assign(
        'https://zihad22.github.io/simple-website-localStorage/index.html',
      )
      localStorage.setItem('login', true)
    } else {
      localStorage.setItem('login', false)
      location.assign(
        'https://zihad22.github.io/simple-website-localStorage/registration.html',
      )
      console.log('please provide a valid information')
    }
  }
}
