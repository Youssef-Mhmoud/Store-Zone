let barBtn = document.querySelector('#mobile .menu-hover')
let ulList = document.querySelector('.nav-items ul')


barBtn.addEventListener('click', (eo) => {
    ulList.classList.add('active')

})