let sizeBtns = document.querySelectorAll(".size-radio");

sizeBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    eo.target.parentElement.querySelectorAll(".check").forEach((ele) => {
      ele.classList.remove("check");
    });
    eo.target.classList.add('check')
  });
});




