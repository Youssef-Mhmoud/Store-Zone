let barBtn=document.querySelector("#mobile .menu-hover"),ulList=document.querySelector(".nav-items ul"),xMark=document.getElementById("close");barBtn.addEventListener("click",e=>{ulList.classList.add("active")}),xMark.addEventListener("click",e=>{ulList.classList.remove("active")});