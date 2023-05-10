function changebg(){
    let header = document.querySelector("header");
    let currentVal = window.scrollY;

    if(currentVal > 0){
        header.classList.add("header-fixed");
    }else{
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll",changebg)