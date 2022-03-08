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
    localStorage.setItem('users', userStringify)
    location.assign('http://127.0.0.1:5500/login.html')
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
