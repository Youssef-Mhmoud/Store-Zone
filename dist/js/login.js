const signinBtnForm=document.querySelector(".signinBtn"),signupBtnForm=document.querySelector(".signupBtn"),formLogin=document.querySelector(".form-bx"),bodyLogin=document.querySelector(".login-page");signupBtnForm.addEventListener("click",e=>{formLogin.classList.add("active"),bodyLogin.classList.add("active")}),signinBtnForm.addEventListener("click",e=>{formLogin.classList.remove("active"),bodyLogin.classList.remove("active")});