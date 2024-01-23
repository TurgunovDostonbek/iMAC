const menu = document.querySelector(".menu");
const navbarModal = document.querySelector(".navbar_modal");
const close1 = document.querySelector(".close1");
const bxMoon = document.querySelector("#bx-moon");
const bxSun = document.querySelector(".bx-sun");

menu.addEventListener("click", ()=>{
    navbarModal.style.transform = "translateY(0%)"
})

close1.addEventListener("click", ()=>{
    navbarModal.style.transform = "translateY(-100%)"
})

// bxMoon.addEventListener('Onclick', () =>{
//     bxMoon.classList.toggle(bxMoon,bxSun)
    
// })