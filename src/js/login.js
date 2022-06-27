const signinBtnForm = document.querySelector('.signinBtn')
const signupBtnForm = document.querySelector('.signupBtn')
const formLogin = document.querySelector('.form-bx')
const bodyLogin = document.querySelector('.login-page')

// Add Class Active
signupBtnForm.addEventListener('click', (eo) => {
  formLogin.classList.add('active')
  // Add Backgournd Color Login Page
  bodyLogin.classList.add('active')
})
// Remove Class Active
signinBtnForm.addEventListener('click', (eo) => {
  formLogin.classList.remove('active')
    // Remove Backgournd Color Login Page
    bodyLogin.classList.remove('active')
})

// Validation Form SignUp
const formValidate = document.querySelector('.form-validate')
const userName = document.getElementById('name')
const email = document.getElementById('email')
const password1 = document.getElementById('password')
const password2 = document.getElementById('password2')

formValidate.addEventListener('submit', (eo) => {
  eo.preventDefault();

  checkInputs()
})

function checkInputs() {
  // Get Values 
  const userNameValue = userName.value.trim()
  , emailValue = email.value.trim()
  , passwordValue1 = password1.value.trim()
  , password2Value2 = password2.value.trim()

  if (userNameValue === '') {
    // Show Error
    // Add Class Error
    setErrorFor(userName, "Username cannot be blank") 
  } else {
    // Add Class Success 
    setSuccessFor(userName)
  }
  if (emailValue === '') {
    // Show Error
    // Add Class Error
    setErrorFor(email, "Email cannot be blank") 
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Email is not valid") 
  } else {
    // Add Class Success 
    setSuccessFor(email)
  }
  if (passwordValue1 === '') {
    // Show Error
    // Add Class Error
    setErrorFor(password1, "Password cannot be blank") 
  } else {
    // Add Class Success 
    setSuccessFor(password1)
  }
  if (password2Value2 === '') {
    // Show Error
    // Add Class Error
    setErrorFor(password2, "Password2 cannot be blank") 
  } else if(passwordValue1 !== password2Value2) {
    setErrorFor(password2, "Passwords don't match") 
  } else {
    // Add Class Success 
    setSuccessFor(password2)
  }
}

// Set Error 
function setErrorFor(input, message) {
  const formValidtaion = input.parentElement
  const small = formValidtaion.querySelector('small')
  // Add Error Message 
  small.innerText = message
  // Add Class Error 
  formValidtaion.classList.add('error')
}
// Set Success 
function setSuccessFor(input) {
  const formValidtaion = input.parentElement
  // Add Class Error 
  formValidtaion.classList.add('correct')
}
// Check Email Is Validation
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}