function emailValidation(){
    let email=document.getElementById("email").value 
    if (email==""){
    displayMsg("Email must be required", "emailMsg", "red")
    return false 
}
else if(email.length<6){
    displayMsg("Invalid email", "emailMsg", "red")
    return false
}else{
    displayMsg("Valid email", "emailMsg", "green")
    return true
}
} 
function passwordValidation(){
    let password=document.getElementById("password").value 
    if (password==""){
    displayMsg("password must be required", "passwordMsg", "red")
    return false 
}
else if(password.length<8){
    displayMsg("Invalid password", "passwordMsg", "red")
    return false
}else{
    displayMsg("Valid password", "passwordMsg", "green")
    return true
}
}

function displayMsg(message, id, color){
    document.getElementById(id).innerHTML=message,
    document.getElementById(id).style.color=color
}

function  validForm() {
    if(emailValidation()&&passwordValidation()){
        return true
    }
    return false 
}
