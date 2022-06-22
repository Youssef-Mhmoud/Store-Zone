/* Slider */
// Get Elements
let productContainers = [document.querySelector(".product-container")]
let nextBtn = [document.querySelector(".next")]
let preBtn = [document.querySelector(".pre")]

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width - 2000;

  // Next Button
  nextBtn[i].addEventListener('click', (e) => {
    item.scrollLeft -= containerWidth
  })
  // Previous Button
  preBtn[i].addEventListener('click', (e) => {
    item.scrollLeft += containerWidth
  })
})

