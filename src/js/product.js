let sizeBtns = document.querySelectorAll('.size-radio')
let checkedBtn = 0

sizeBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    sizeBtns[checkedBtn].classList.remove('check')
    item.classList.add('check')
    checkedBtn = i
  })
});