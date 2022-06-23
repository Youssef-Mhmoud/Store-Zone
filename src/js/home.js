/* Slider */
// Get Elements
let productContainers = [...document.querySelectorAll(".product-container")]
let nextBtn = [...document.querySelectorAll(".next")]
let preBtn = [...document.querySelectorAll(".pre")]

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width - 400;

  // Next Button
  nextBtn[i].addEventListener('click', (e) => {
    item.scrollLeft += containerWidth
  })
  // Previous Button
  preBtn[i].addEventListener('click', (e) => {
    item.scrollLeft -= containerWidth
  })
})

