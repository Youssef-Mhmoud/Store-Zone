let sizeBtns = document.querySelectorAll('.size-radio')


sizeBtns.forEach((item) => {
  item.addEventListener('click', (eo) => {
    console.log(eo.target);
  })
});   