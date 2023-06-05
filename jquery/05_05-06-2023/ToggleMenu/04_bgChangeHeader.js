// function changebg(){
//     let header = document.querySelector("header");
//     let currentVal = window.scrollY;

//     if(currentVal > 0){
//         header.classList.add("header-fixed");
//     }else{
//         header.classList.remove("header-fixed")
//     }
// }
// window.addEventListener("scroll",changebg)

/* ======================== using jquery ================= */
$(document).ready(function () {
    $header = $("header");
    $(window).scroll(function () {
        $currentVal = $(this).scrollTop()
        if ($currentVal > 0) {
            $header.addClass("header-fixed");
        } else {
            $header.removeClass("header-fixed");
        }
    })
})