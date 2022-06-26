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
