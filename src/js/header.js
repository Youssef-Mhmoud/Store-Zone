let barBtn = document.querySelector('#mobile .menu-hover')
let ulList = document.querySelector('.nav-items ul')
let xMark = document.getElementById('close')

barBtn.addEventListener('click', (eo) => {
  ulList.classList.add('active')
})

xMark.addEventListener('click', (eo) => {
  ulList.classList.remove('active')
})