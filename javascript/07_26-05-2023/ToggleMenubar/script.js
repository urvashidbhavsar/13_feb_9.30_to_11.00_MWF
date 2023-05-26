// used function for task

// add() => add the value in html
// remove() => remove the value from html
// toggle() => add and remove both
// contains() => it check your value
// classList => it is property to add or remove css class


// toggle Menubar
let menu = document.querySelector(".dispMenu");
let navbar = document.querySelector(".nav")

menu.addEventListener("click",function(){
    navbar.classList.toggle("navbar")
})

// header bg color change when page scroll
window.addEventListener("scroll",function(){
    let headerbg = document.querySelector("header")
    let current = window.scrollY;
    if(current > 0){
        headerbg.classList.add("header-fixed")
    }else{
        headerbg.classList.remove("header-fixed")
    }
})

// for dropdown
let dispDrop = document.querySelector(".Create_drop");
let dropdown = document.querySelector("#dropmenu")
dispDrop.addEventListener("click",function(){
    // dropdown.style.display = "block";
    dropdown.classList.toggle("dropdown")
    if(dropdown.classList.contains("dropdown")==true){
        dropdown.style.display = "block";
    }else{
        dropdown.classList.remove("dropdown")
        dropdown.style.display = "none";
    }
})