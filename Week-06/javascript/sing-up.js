window.onload = function() {

    // Variables
var inpName = document.getElementById("name-sing-up");
var inpLastName = document.getElementById("last-name-sing-up");
var inpId = document.getElementById("id-sing-up");
var inpDateBrth = document.getElementById("date-birth-sing-up");
var inpPhoneNum = document.getElementById("phone-number-sing-up");
var inpAdress = document.getElementById("address-sing-up");
var inpCity = document.getElementById("city-sing-up");
var inpAdressCode = document.getElementById("address-code-sing-up");
var inpEmail = document.getElementById("email-sing-up");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var inpPassword = document.getElementById("password-sing-up");
var inpRepPassword = document.getElementById("repeat-password-sing-up");
var btnBack = document.getElementById("btn-back-sing-up");
var btnSingUp = document.getElementById("btn-sing-up");
var inpSingUpError = document.createElement("p");
inpSingUpError.classList.add("text-error");


// Validate Name

inpName.onblur = function() {
    if(inpName.value.trim() == ""){
        inpName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty name";
        inpName.insertAdjacentElement("afterend", inpSingUpError);
    }else if( inpName.value.length <= 3 ){
        inpName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery min 4 characters";
        inpName.insertAdjacentElement("afterend", inpSingUpError);
    }else if(!hasCharsAndSpaces(inpName.value)){
        inpName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only letters";
        inpName.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpName.classList.add("green-border");
}
}

inpName.onfocus = function(){
    inpName.classList.remove("red-border");
    inpSingUpError.remove();
}




// Validate LastName

inpLastName.onblur = function() {
    if(inpLastName.value.trim() == ""){
        inpLastName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty name";
        inpLastName.insertAdjacentElement("afterend", inpSingUpError);
    }else if( inpLastName.value.length <= 3 ){
        inpLastName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery min 4 characters";
        inpLastName.insertAdjacentElement("afterend", inpSingUpError);
    }else if(!hasCharsAndSpaces(inpLastName.value)){
        inpLastName.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only letters";
        inpLastName.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpLastName.classList.add("green-border");
}
}

inpLastName.onfocus = function(){
    inpLastName.classList.remove("red-border");
    inpSingUpError.remove();
}


// Validate ID

inpId.onblur = function(){
    if(inpId.value.trim() ==""){
        inpId.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty ID";
        inpId.insertAdjacentElement("afterend", inpSingUpError);
    }else if( inpId.value.length < 7 ){
        inpId.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery min 8 numbers";
        inpId.insertAdjacentElement("afterend", inpSingUpError);
    }else if(!onlyNumbers(inpId.value)){
        inpId.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only numbers";
        inpId.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpId.classList.add("green-border"); }
}

inpId.onfocus = function(){
    inpId.classList.remove("red-border");
    inpSingUpError.remove();
}

// Validate Phone Number

inpPhoneNum.onblur = function(){
    if(inpPhoneNum.value == ""){
        inpPhoneNum.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty Phone Number";
        inpPhoneNum.insertAdjacentElement("afterend", inpSingUpError);
    }else if(inpPhoneNum.value.length <= 9 || inpPhoneNum.value.length >= 11 ){
        inpPhoneNum.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only 10 numbers";
        inpPhoneNum.insertAdjacentElement("afterend", inpSingUpError);
    }else if(!onlyNumbers(inpPhoneNum.value)){
        inpPhoneNum.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only numbers";
        inpPhoneNum.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpPhoneNum.classList.add("green-border"); }
}

inpPhoneNum.onfocus = function(){
    inpPhoneNum.classList.remove("red-border");
    inpSingUpError.remove();
}





// Validate Adress








// Validate City

inpCity.onblur = function(){
    if(inpCity.value.length == ""){
        inpCity.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty city";
        inpCity.insertAdjacentElement("afterend", inpSingUpError);
    }else if( inpCity.value.length <= 3 ){
        inpCity.classList.add("red-border");
        inpSingUpError.innerHTML = "*Require min 4 characters";
        inpCity.insertAdjacentElement("afterend", inpSingUpError);
    }else if( isChars(inpCity.value) ){
        inpCity.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery min 4 letters";
        inpCity.insertAdjacentElement("afterend", inpSingUpError);
    // }else if( !hasNumbersAndChar(inpCity.value) ){
    //     inpCity.classList.add("red-border");
    //     inpSingUpError.innerHTML = "*Only characters and numbers";
    //     inpCity.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpCity.classList.add("green-border"); }
}

inpCity.onfocus = function(){
    inpCity.classList.remove("red-border");
    inpSingUpError.remove();
}


// Validate Adress City

inpAdressCode.onblur = function(){
    if(inpAdressCode.value == ""){
        inpAdressCode.classList.add("red-border");
        inpSingUpError.innerHTML = "*Empty Phone Number";
        inpAdressCode.insertAdjacentElement("afterend", inpSingUpError);
    }else if(inpAdressCode.value.length < 4 || inpAdressCode.value.length > 5 ){
        inpAdressCode.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery between 4 and 5 numbers";
        inpAdressCode.insertAdjacentElement("afterend", inpSingUpError);
    }else if(!onlyNumbers(inpAdressCode.value)){
        inpAdressCode.classList.add("red-border");
        inpSingUpError.innerHTML = "*Requery only numbers";
        inpAdressCode.insertAdjacentElement("afterend", inpSingUpError);
    }else{ inpAdressCode.classList.add("green-border"); }
}

inpAdressCode.onfocus = function(){
    inpAdressCode.classList.remove("red-border");
    inpSingUpError.remove();
}


// Validate Email

inpEmail.onblur = function() {
    if (inpEmail.value == ""){
        inpEmail.classList.add("red-border");
        inpSingUpError.innerHTML = "Empty Email";
        inpEmail.insertAdjacentElement("afterend", inpSingUpError);

    } else if(!emailExpression.test(inpEmail.value)){
        inpEmail.classList.add("red-border");
        inpSingUpError.innerHTML = "Please insert email valid";
        inpEmail.insertAdjacentElement("afterend", inpSingUpError);
    } else{ inpEmail.classList.add("green-border");

    }
}

inpEmail.onfocus = function(){
    inpEmail.classList.remove("red-border");
    inpSingUpError.remove();
}


// Validate password

inpPassword.onblur = function() {
    if (inpPassword.value == ""){
        inpPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Empty Password";
        inpPassword.insertAdjacentElement("afterend", inpSingUpError);
    }else if ( inpPassword.value.length < 8 || inpPassword.value.length > 20 ){
        inpPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Password must be 8 and 20 characters";
        inpPassword.insertAdjacentElement("afterend", inpSingUpError);
    }else if ( !hasNumbersAndChar(inpPassword.value)){
        inpPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Only numbers and characters";
        inpPassword.insertAdjacentElement("afterend", inpSingUpError);
    }
    else{ inpPassword.classList.add("green-border");
    }

}

inpPassword.onfocus = function(){
    inpPassword.classList.remove("red-border");
    inpSingUpError.remove();
}


// Validate Confirm Password

inpRepPassword.onblur = function() {
    if (inpRepPassword.value == ""){
        inpRepPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Empty Password";
        inpRepPassword.insertAdjacentElement("afterend", inpSingUpError);
    }else if ( inpRepPassword.value.length < 8 || inpRepPassword.value.length > 20 ){
        inpRepPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Password must be 8 and 20 characters";
        inpRepPassword.insertAdjacentElement("afterend", inpSingUpError);
    }else if ( !hasNumbersAndChar(inpRepPassword.value)){
        inpRepPassword.classList.add("red-border");
        inpSingUpError.innerHTML = "Only numbers and characters";
        inpRepPassword.insertAdjacentElement("afterend", inpSingUpError);
    }
    else{ inpRepPassword.classList.add("green-border");
    }

}

inpRepPassword.onfocus = function(){
    inpRepPassword.classList.remove("red-border");
    inpSingUpError.remove();
}




// Functions to Help

function hasCharsAndSpaces(parameter) {
    for (var i = 0 ; i < parameter.length; i++) {
      if (!((parameter[i] >= 'a' && parameter[i] <= 'z') || (parameter[i] >= 'A' && parameter[i] <= 'Z' || parameter[i] == ' '))) {
        return false;
      }
    }
    return true;
}

function isNumber(parameter) {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (var i = 0; i < parameter.length; i++) {
      if (numbers.includes(parameter[i])) {
        return true;
      }
    }
    return false;
}

function onlyNumbers(parameter) {
    for (var i = 0; i < parameter.length; i++) {
      if (!isNumber(parameter[i])) {
        return false;
      }
    }
    return true;
  }

function isChars(parameter) {
    for (var i = 0 ; i < parameter.length; i++) {
      if (!((parameter[i] >= 'a' && parameter[i] <= 'z') || (parameter[i] >= 'A' && parameter[i] <= 'Z'))) {
        return false;
      }
    }
    return true;
}

// function minFourthChars(parameter) {
//     for (var i = 0 ; i < parameter.length; i++) {
//       if (((parameter[i] >= 'a' && parameter[i] <= 'z') || (parameter[i] >= 'A' && parameter[i] <= 'Z')).length > 4) {
//         return true;
//       }
//     }
//     return false;
// }

// console.log(minFourthChars("leandro"))


function hasNumbersAndChar(parameter) {
    var num = false;
    var char = false;

    for (var i = 0; i < parameter.length; i++) {
      if (isNumber(parameter[i])) {
        num = true;
      } else if (isChars(parameter[i])) {
        char = true;
      } else {
        return false;
      }
    }

    return num && char;
}





}

