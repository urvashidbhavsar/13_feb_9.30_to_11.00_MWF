// click event task
function blnk_val_check(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if(fname == "" || fname==null){
        document.getElementById("msg").innerText = "Enter Firstname"
        return false;
    }
    if(lname==""){
        document.getElementById("msg1").innerText = "Enter Lastname"
        return false
    }
}

// keyboard event
function name_ex(username,spanid){
    let regex = /^[a-zA-z]*$/
    if(regex.test(username.value)){
        document.getElementById(spanid).innerText = "";
        return false
    }else{
        document.getElementById(spanid).innerText = "only alphabet allowed";
        return false
    }
}

// blur event
function check_input(blnk,spnid){
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(spnid).innerText = "Please, Enter value";
        return false
    } else {
        document.getElementById(spnid).innerText = "";
        return false
    }
}