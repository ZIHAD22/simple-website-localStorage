// global variable
const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')
const userName = document.getElementById('user-name')

// registration function
const registrationUser = () => {
  const name = userName.value
  const email = userEmail.value
  const password = userPassword.value
  const userObj = { name, email, password }
  const register = getRegisterUser(email)

  if (name && email && password && !register) {
    const userStringify = JSON.stringify(userObj)
    console.log(userStringify)
    localStorage.setItem('users', userStringify)
    location.assign(
      'https://zihad22.github.io/simple-website-localStorage/login.html',
    )
    localStorage.setItem('login', false)
    userName.value = ''
    userEmail.value = ''
    userPassword.value = ''
  } else {
    console.log('user is already register ')
  }
}

// get user

const getRegisterUser = (email) => {
  const stringifyUsers = localStorage.getItem('users')
  const users = JSON.parse(stringifyUsers)
  let isRegister = false
  for (const user in users) {
    if (email === users[user]) {
      isRegister = !isRegister
    }
  }
  return isRegister
}
