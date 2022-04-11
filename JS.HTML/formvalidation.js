

function fNameValidation(){
    let first_name=document.getElementById("firstname").value 
    if(first_name==""){
    displayMsg("First name must be required","fnameMsg","red")
    }
    else if(first_name.length>3){
        displayMsg("First name contains only alphabets","fnameMsg","red")
    }else{
        displayMsg("Valid name","fnameMsg","green")
    }
}
function lNameValidation(){
    let last_name=document.getElementById("lastname").value 
    if(last_name==""){
    displayMsg("last name must be required","lnameMsg","red")
    return false
}
    else if(last_name.length>3){
        displayMsg("last name contains only alphabets","lnameMsg","red")
        return false
    }else{
        displayMsg("Valid name","lnameMsg","green")
        return true 
    }
}

function emailValidation(){
    let email=document.getElementById("email").value 
    if(email==""){
    displayMsg("Email must be required","emailMsg","red")
    return false 
} else if(!email.match(/^ ([a-z0-9])[a-z0-9\_\.\-]+\@+(([a-z])+\.)+([a-z])+$/)){
    displayMsg("Invalid Email","emailMsg","red")

  }  else{
        displayMsg(" Email Valid ","emailMsg","green")
    }
}
function passwordValidation(){
    let password=document.getElementById("password").value

    if(password==""){
        displayMsg("Password must be more than 6 characters","passwordMsg","red")
    }else if(!password.match(/^([a-z0-9])+\@+([a-z0-9])+$/))
    displayMsg("Invalid password","passwordMsg","red")
    else{
        displayMsg("Valid Password","passwordMsg","green")
    }
}
function repasswordValidation(){
    let rePassword=document.getElementById("rePassword").value
    let password=document.getElementById("password").value
    if(rePassword!=password){
        displayMsg("password must be match", "rePasswordMsg", "red")
    }else{
     displayMsg("Valid password","rePasswordMsg", "green")
    }
}

    // function call
function displayMsg(message, id, color){
    document.getElementById(id).innerHTML=message,
    document.getElementById(id).style.color=color 
}





