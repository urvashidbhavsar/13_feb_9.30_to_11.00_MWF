// let tbtn = document.querySelector(".t-btn");
// let nav = document.querySelector(".nav");
// let icon = document.querySelector(".fa-bars");

// tbtn.addEventListener("click",function(){
//     nav.classList.toggle("nav-bar")

//     if(nav.classList.contains("nav-bar") == true){
//         icon.classList.remove("fa-bars");
//         icon.classList.add("fa-xmark");
//     }else{
//         icon.classList.remove("fa-xmark");
//         icon.classList.add("fa-bars");
//     }
// })

/* =========================== using jquery =========================== */

$tbtn = $(".t-btn");   // variable of button
$nav = $(".nav");      // variable of target div
$icon = $(".fa-bars");  // icon change

$(document).ready(function(){
    $tbtn.click(function(){
        $nav.toggleClass("nav-bar");

        // hasClass() => check the class exist or not
        if($nav.hasClass("nav-bar")== true){
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-xmark")
        }else{
            $icon.removeClass("fa-xmark")
            $icon.addClass("fa-bars")
        }
    })
})