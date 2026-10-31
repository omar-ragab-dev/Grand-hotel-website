const navLinks = document.querySelector('nav .nav__links')
const toggleBtn = document.querySelector('nav .toggle_icon')
const links = document.querySelectorAll("nav .nav__links a")

toggleBtn.addEventListener("click",()=>{
    navLinks.classList.toggle('active')
})

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active")
    })
})

window.addEventListener("scroll",()=>{
    navLinks.classList.remove("active")
})

document.onclick= (e)=>{
    if(!navLinks.contains(e.target) && !toggleBtn.contains(e.target)){
        navLinks.classList.remove("active")
    }
}


// btn scroll to top

const btnToUp = document.getElementsByClassName("btn_to_top")[0];
window.addEventListener("scroll",()=>{
    window.scrollY >= 150 ? btnToUp.classList.add("active") : btnToUp.classList.remove("active")
})