let sizeBtns = document.querySelectorAll(".size-radio");

sizeBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    eo.target.parentElement.querySelectorAll(".check").forEach((ele) => {
      ele.classList.remove("check");
    });
    eo.target.classList.add('check')
  });
});

// Make Products Dynamik
const setData = (data) => {
  let title = document.querySelector("title")
  title.innerHTML += data.data[0].name
  // Set Image 
  let img = document.querySelector('.img-slider')
  img.style.backgroundImage = `url(img/${data.data[0].images})`
  // Set Text 
  let name = document.querySelector('.details h2')
  let shortDes = document.querySelector('.details p')
  
  name.innerHTML += data.data[0].name
  shortDes.innerHTML += data.data[0].des
  // Set Price 
  let price = document.querySelector('.price')
  let actPrice = document.querySelector('.actual-price')
  let actPriceDis = document.querySelector('.actual-price-dis')

  price.innerHTML += `${data.data[0].actualPrice}$`
  actPrice.innerHTML += `${data.data[0].sellPrice}$`
  actPriceDis.innerHTML += `(${data.data[0].discount}% OFF)`
}


async function get() {
  const res = await fetch("/get-product.json")
  const data = await res.json()
  setData(data)
}
get()


