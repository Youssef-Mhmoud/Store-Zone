// Function Manage If Condition
function manageIf(name, number) {
  let windowheight = window.innerHeight;
  let revealTop = name.getBoundingClientRect().top;
  let revealPoint = number;

  return revealTop < windowheight - revealPoint;
}
// Function Manage Animation
function manageAnimation(name1, num) {
  if (manageIf(name1, num)) {
    name1.classList.add("show");
  }
}
// Animation About Section
let imgAbout = document.querySelector('.img-about img')
let desAbout = document.querySelector('.des-about')
let cardsAbout = document.querySelectorAll('.card-about')
let imgMobile = document.querySelector('.img-app')

window.addEventListener('scroll', (eo) => {
  manageAnimation(imgAbout,350)
  manageAnimation(desAbout,350)
  cardsAbout.forEach(manageAnimation)
  manageAnimation(imgMobile,250)
}) 
