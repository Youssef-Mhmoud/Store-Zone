const signinBtn = document.querySelector('.signinBtn')
const signupBtn = document.querySelector('.signupBtn')
const form = document.querySelector('.form-bx')
const body = document.querySelector('.login-page')
// Add Class Active
signupBtn.addEventListener('click', (eo) => {
  form.classList.add('active')
  // Add Backgournd Color Login Page
  body.classList.add('active')
})
// Remove Class Active
signinBtn.addEventListener('click', (eo) => {
  form.classList.remove('active')
    // Remove Backgournd Color Login Page
    body.classList.remove('active')
})
