let tbtn = document.querySelector(".t-btn");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".fa-bars");

tbtn.addEventListener("click",function(){
    nav.classList.toggle("nav-bar")

    if(nav.classList.contains("nav-bar") == true){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
})