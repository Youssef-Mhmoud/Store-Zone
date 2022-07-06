// let btnCard = document.querySelectorAll(".btn-card");
// let table = document.querySelector(".cont-table");

// btnCard.forEach((item) => {
//   item.addEventListener("click", (eo) => {
//     // Get Elements
//     let button = eo.target.parentElement.parentElement.parentElement;
//     let title = button.getElementsByClassName("card-title")[0].innerText;
//     let price = button.getElementsByClassName("card-price")[0].innerText;
//     let img = button.getElementsByClassName("card-img-top")[0].src;
//     console.log(title, price, img);
//     // Set Elements
//     ele(title, price, img);
//   });
// });
// function ele(title, price, img) {
//   let cartRow = document.createElement("tr");
//   let cartContent = `
//   <td>
//     <div class"cart-info d-flex flex-wrap">
//       <img src=${img} alt="">
//       <div>
//       <p> ${title} </p>
//         <small>${price} </small>
//         <a href="" class="btn mt-5" Remove </a>
//         </div>
//         </div>
//         </td>
//         <td>
//         <button class="quan"> <span class="min">-</span> <span class="num"> 1 </span><span class="plus">+</span> </button>
//         </td>
//         <td>
//         <small>Price:$50.00</small>
//         </td>
//         `;
//   setTimeout(() => {
//     cartRow.innerHTML = cartContent;
//     table.appendChild(cartRow);
//   }, 3000);
//   window.location.href = "cart.html"
// }
