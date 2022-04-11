function yNameValidation() {
    let fullname = document.getElementById("yname").value
    if (fullname == "") {
        displayMsg("Fullname is required", "ynameMsg", "red")
        return false
    }
    else if (fullname.length < 15) {
        displayMsg("Name contains only alphabets", "ynameMsg", "red")
        return false
    } else {
        displayMsg("Valid name", "ynameMsg", "green")
        return true
    }
}
function emailValidation() {
    let email = document.getElementById("email").value
    if (email == "") {
        displayMsg("Write your email or mobile number", "emailMsg", "red")
        return false
    }
    else if (!email.match(/^([a-z0-9])+\@+([a-z])+\.+([a-z])$/ || /^([0-9])+$/)) {
        displayMsg("Invalid email or mobile number", "emailMsg", "red")
        return false
    } else {
        displayMsg("Valid email or phone number", "emailMsg", "green")
        return true
    }
}
function passwordValidation() {
    let password = document.getElementById("password").value
    if (password == "") {
        displayMsg("password must be required", "passwordMsg", "red")
        return false
    } else if (!password.match(/^([a-zA-Z0-9])+\@+(\-+\#+\_+\!+\*)+$/)) {
        displayMsg("Invalid password", "passwordMsg", "red")
        return false
    } else {
        displayMsg("Valid password", "passwordMsg", "green")
        return true
    }
}
function repasswordValidation() {
    let rePassword = document.getElementById("rePassword").value
    let password = document.getElementById("password").value
 if (rePassword != password) {
    displayMsg("password must be match", "rePasswordMsg", "red")
    return false
} else {
    displayMsg("valid password", "rePasswordMsg", "green")
    return true
}}

// calling function 
function displayMsg(message, id, color) {
    document.getElementById(id).innerHTML = message
        document.getElementById(id).style.color = color
}
function validForm() {
    if (yNameValidation() && emailValidation() && passwordValidation() && repasswordValidation()) {
        return true
    }
    return false
}