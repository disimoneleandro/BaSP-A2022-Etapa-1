window.onload = function(){

var inputArray = [];
var inpName = document.getElementById("name-sing-up");
var inpLastName = document.getElementById("last-name-sing-up");
var inpDni = document.getElementById("id-sing-up");
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
var inpNameError = document.createElement("p");
inpNameError.classList.add("text-error");
var inpLastNameError = document.createElement("p");
inpLastNameError.classList.add("text-error");
var inpDniError = document.createElement("p");
inpDniError.classList.add("text-error");
var inpPhoneNumError = document.createElement("p");
inpPhoneNumError.classList.add("text-error");
var inpAdressError = document.createElement("p");
inpAdressError.classList.add("text-error");
var inpCityError = document.createElement("p");
inpCityError.classList.add("text-error");
var inpAdressCodeError = document.createElement("p");
inpAdressCodeError.classList.add("text-error");
var inpEmailError = document.createElement("p");
inpEmailError.classList.add("text-error");
var inpPasswordError = document.createElement("p");
inpPasswordError.classList.add("text-error");
var inpRepPasswordError = document.createElement("p");
inpRepPasswordError.classList.add("text-error");

if(window.localStorage.hasOwnProperty("validation")){
    inpName.value = window.localStorage.getItem("name");
    inpLastName.value = window.localStorage.getItem("lastName");
    inpDni.value = window.localStorage.getItem("dni");
    inpDateBrth.value += localStorage.getItem("birthDate").substring(6, 10) + "-" +
                         localStorage.getItem("birthDate").substring(0, 2) + "-" +
                         localStorage.getItem("birthDate").substring(3, 5);
    inpPhoneNum.value = window.localStorage.getItem("phoneNumber");
    inpAdress.value = window.localStorage.getItem("address");
    inpCity.value = window.localStorage.getItem("city");
    inpAdressCode.value = window.localStorage.getItem("adressCode");
    inpEmail.value = window.localStorage.getItem("email");
    inpPassword.value = window.localStorage.getItem("password");
    inpRepPassword.value = window.localStorage.getItem("password");
}

inpName.onblur = function() {
    if(inpName.value.trim() == ""){
        inpName.classList.add("red-border");
        inpNameError.innerHTML = "*Empty name";
        inpName.insertAdjacentElement("afterend", inpNameError);
    }else if( inpName.value.length <= 3 ){
        inpName.classList.add("red-border");
        inpNameError.innerHTML = "*Require min 4 characters";
        inpName.insertAdjacentElement("afterend", inpNameError);
    }else if(!hasCharsAndSpaces(inpName.value)){
        inpName.classList.add("red-border");
        inpNameError.innerHTML = "*Require only letters";
        inpName.insertAdjacentElement("afterend", inpNameError);
    }else{  inputArray[0] = inpName.value;
            inpName.classList.add("green-border");}
}

inpName.onfocus = function(){
    inpName.classList.remove("red-border");
    inpNameError.remove();
}


inpLastName.onblur = function() {
    if(inpLastName.value.trim() == ""){
        inpLastName.classList.add("red-border");
        inpLastNameError.innerHTML = "*Empty last name";
        inpLastName.insertAdjacentElement("afterend", inpLastNameError);
    }else if( inpLastName.value.length <= 3 ){
        inpLastName.classList.add("red-border");
        inpLastNameError.innerHTML = "*Require min 4 characters";
        inpLastName.insertAdjacentElement("afterend", inpLastNameError);
    }else if(!hasCharsAndSpaces(inpLastName.value)){
        inpLastName.classList.add("red-border");
        inpLastNameError.innerHTML = "*Require only letters";
        inpLastName.insertAdjacentElement("afterend", inpLastNameError);
    }else{ inputArray[1] = inpLastName.value;
           inpLastName.classList.add("green-border");}
}

inpLastName.onfocus = function(){
    inpLastName.classList.remove("red-border");
    inpLastNameError.remove();
}


inpDni.onblur = function(){
    if(inpDni.value.trim() ==""){
        inpDni.classList.add("red-border");
        inpDniError.innerHTML = "*Empty ID";
        inpDni.insertAdjacentElement("afterend", inpDniError);
    }else if( inpDni.value.length < 7 ){
        inpDni.classList.add("red-border");
        inpDniError.innerHTML = "*Require min 8 numbers";
        inpDni.insertAdjacentElement("afterend", inpDniError);
    }else if(!onlyNumbers(inpDni.value)){
        inpDni.classList.add("red-border");
        inpDniError.innerHTML = "*Require only numbers";
        inpDni.insertAdjacentElement("afterend", inpDniError);
    }else{  inputArray[2] = inpDni.value;
            inpDni.classList.add("green-border");}
}

inpDni.onfocus = function(){
    inpDni.classList.remove("red-border");
    inpDniError.remove();
}


inpPhoneNum.onblur = function(){
    if(inpPhoneNum.value == ""){
        inpPhoneNum.classList.add("red-border");
        inpPhoneNumError.innerHTML = "*Empty Phone Number";
        inpPhoneNum.insertAdjacentElement("afterend", inpPhoneNumError);
    }else if(inpPhoneNum.value.length <= 9 || inpPhoneNum.value.length >= 11 ){
        inpPhoneNum.classList.add("red-border");
        inpPhoneNumError.innerHTML = "*Require only 10 numbers";
        inpPhoneNum.insertAdjacentElement("afterend", inpPhoneNumError);
    }else if(!onlyNumbers(inpPhoneNum.value)){
        inpPhoneNum.classList.add("red-border");
        inpPhoneNumError.innerHTML = "*Require only numbers";
        inpPhoneNum.insertAdjacentElement("afterend", inpPhoneNumError);
    }else{ inputArray[3] = inpPhoneNum.value;
           inpPhoneNum.classList.add("green-border");}
}

inpPhoneNum.onfocus = function(){
    inpPhoneNum.classList.remove("red-border");
    inpPhoneNumError.remove();
}


inpAdress.onblur = function(){
    if(inpAdress.value == ""){
        inpAdress.classList.add("red-border");
        inpAdressError.innerHTML = "*Empty adress";
        inpAdress.insertAdjacentElement("afterend", inpAdressError);
    }else if ( inpAdress.value.length < 5 ){
        inpAdress.classList.add("red-border");
        inpAdressError.innerHTML = "*Adress must be at least 5 characters";
        inpAdress.insertAdjacentElement("afterend", inpAdressError);
    }else if ( !hasNumbersAndCharAndSpaces(inpAdress.value) ){
        inpAdress.classList.add("red-border");
        inpAdressError.innerHTML = "*Only numbers,letters and spaces";
        inpAdress.insertAdjacentElement("afterend", inpAdressError);
    }
    else{ inputArray[4] = inpAdress.value;
          inpAdress.classList.add("green-border");}
}

inpAdress.onfocus = function(){
    inpAdress.classList.remove("red-border");
    inpAdressError.remove();
}


inpCity.onblur = function(){
    if(inpCity.value.length == ""){
        inpCity.classList.add("red-border");
        inpCityError.innerHTML = "*Empty city";
        inpCity.insertAdjacentElement("afterend", inpCityError);
    }else if( inpCity.value.length <= 3 ){
        inpCity.classList.add("red-border");
        inpCityError.innerHTML = "*Require min 4 characters";
        inpCity.insertAdjacentElement("afterend", inpCityError);
    }else{ inputArray[5] = inpCity.value;
           inpCity.classList.add("green-border");}
}

inpCity.onfocus = function(){
    inpCity.classList.remove("red-border");
    inpCityError.remove();
}


inpAdressCode.onblur = function(){
    if(inpAdressCode.value == ""){
        inpAdressCode.classList.add("red-border");
        inpAdressCodeError.innerHTML = "*Empty Phone Number";
        inpAdressCode.insertAdjacentElement("afterend", inpAdressCodeError);
    }else if(inpAdressCode.value.length < 4 || inpAdressCode.value.length > 5 ){
        inpAdressCode.classList.add("red-border");
        inpAdressCodeError.innerHTML = "*Require between 4 and 5 numbers";
        inpAdressCode.insertAdjacentElement("afterend", inpAdressCodeError);
    }else if(!onlyNumbers(inpAdressCode.value)){
        inpAdressCode.classList.add("red-border");
        inpAdressCodeError.innerHTML = "*Require only numbers";
        inpAdressCode.insertAdjacentElement("afterend", inpAdressCodeError);
    }else{ inputArray[6] = inpAdressCode.value;
           inpAdressCode.classList.add("green-border");}
}

inpAdressCode.onfocus = function(){
    inpAdressCode.classList.remove("red-border");
    inpAdressCodeError.remove();
}


inpEmail.onblur = function() {
    if (inpEmail.value == ""){
        inpEmail.classList.add("red-border");
        inpEmailError.innerHTML = "*Empty Email";
        inpEmail.insertAdjacentElement("afterend", inpEmailError);

    } else if(!emailExpression.test(inpEmail.value)){
        inpEmail.classList.add("red-border");
        inpEmailError.innerHTML = "*Please insert email valid";
        inpEmail.insertAdjacentElement("afterend", inpEmailError);
    } else{ inputArray[7] = inpEmail.value;
            inpEmail.classList.add("green-border");}
}

inpEmail.onfocus = function(){
    inpEmail.classList.remove("red-border");
    inpEmailError.remove();
}



inpPassword.onblur = function() {
    if (inpPassword.value == ""){
        inpPassword.classList.add("red-border");
        inpPasswordError.innerHTML = "*Empty Password";
        inpPassword.insertAdjacentElement("afterend", inpPasswordError);
    }else if ( inpPassword.value.length < 8 || inpPassword.value.length > 20 ){
        inpPassword.classList.add("red-border");
        inpPasswordError.innerHTML = "*Password must be 8 and 20 characters";
        inpPassword.insertAdjacentElement("afterend", inpPasswordError);
    }else if ( !hasNumbersAndChar(inpPassword.value)){
        inpPassword.classList.add("red-border");
        inpPasswordError.innerHTML = "*Only numbers and letters";
        inpPassword.insertAdjacentElement("afterend", inpPasswordError);
    }
    else{ inputArray[8] = inpPassword.value;
          inpPassword.classList.add("green-border");}
}

inpPassword.onfocus = function(){
    inpPassword.classList.remove("red-border");
    inpPasswordError.remove();
}



inpRepPassword.onblur = function() {
    if (inpRepPassword.value == ""){
        inpRepPassword.classList.add("red-border");
        inpRepPasswordError.innerHTML = "*Empty Password";
        inpRepPassword.insertAdjacentElement("afterend", inpRepPasswordError);
    }else if ( inpRepPassword.value.length < 8 || inpRepPassword.value.length > 20 ){
        inpRepPassword.classList.add("red-border");
        inpRepPasswordError.innerHTML = "*Password must be 8 and 20 characters";
        inpRepPassword.insertAdjacentElement("afterend", inpRepPasswordError);
    }else if ( !hasNumbersAndChar(inpRepPassword.value)){
        inpRepPassword.classList.add("red-border");
        inpRepPasswordError.innerHTML = "*Only numbers and letters";
        inpRepPassword.insertAdjacentElement("afterend", inpRepPasswordError);
    }
    else{ inputArray[9] = inpRepPassword.value;
          inpRepPassword.classList.add("green-border");}
}

inpRepPassword.onfocus = function(){
    inpRepPassword.classList.remove("red-border");
    inpRepPasswordError.remove();
}


function validateSingUp(name, lastName, id, birthDate, phoneNumber, adress, city, adressCode,
                        email, password){
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?";
    var year = birthDate.substr(0, 4);
    var month = birthDate.substr(5, 2);
    var day = birthDate.substr(8, 2);
    var correctionDate = month + "/" + day + "/" + year;
    fetch( url + "name=" + name + "&lastName=" + lastName + "&dni=" + id + "&dob=" + correctionDate
              + "&phone=" + phoneNumber + "&address=" + adress + "&city=" + city
              + "&zip=" + adressCode + "&email=" + email + "&password=" + password )
        .then(function(response){
           return response.json();
        })
        .then(function(res){
            if(res.success){
                window.localStorage.setItem("validation","value")
                window.localStorage.setItem("name", res.data.name);
                window.localStorage.setItem("lastName", res.data.lastName);
                window.localStorage.setItem("dni", res.data.dni);
                window.localStorage.setItem("birthDate", res.data.dob);
                window.localStorage.setItem("phoneNumber", res.data.phone);
                window.localStorage.setItem("address", res.data.address);
                window.localStorage.setItem("city", res.data.city);
                window.localStorage.setItem("adressCode", res.data.zip);
                window.localStorage.setItem("email", res.data.email);
                window.localStorage.setItem("password", res.data.password);
                alert(res.msg)
            }else{ throw res }
        })
        .catch(function(error){
            for(i = 0; i<error.errors.length; i++){
                alert(error.errors[i].msg);
            }
        })
}

btnSingUp.onclick = function(e){
    e.preventDefault();
    inpName.onblur();
    inpLastName.onblur();
    inpDni.onblur();
    inpPhoneNum.onblur();
    inpAdressCode.onblur();
    inpAdress.onblur();
    inpCity.onblur();
    inpEmail.onblur();
    inpPassword.onblur();
    inpRepPassword.onblur();
    if(validateEmptyFields() == false){
            modal.style.display = "block";
            modalContent.classList.add("modal-error");
            pModal.innerHTML = " Please Complete fields !";
            inpName.onblur();
            inpLastName.onblur();
            inpDni.onblur();
            inpPhoneNum.onblur();
            inpAdressCode.onblur();
            inpAdress.onblur();
            inpCity.onblur();
            inpEmail.onblur();
            inpPassword.onblur();
            inpRepPassword.onblur();
    }else if(!(inputArray.includes(inpName.value) &&
               inputArray.includes(inpLastName.value) &&
               inputArray.includes(inpDni.value) &&
               inputArray.includes(inpAdress.value) &&
               inputArray.includes(inpCity.value) &&
               inputArray.includes(inpPhoneNum.value) &&
               inputArray.includes(inpAdressCode.value) &&
               inputArray.includes(inpEmail.value) &&
               inputArray.includes(inpPassword.value) &&
               inputArray.includes(inpRepPassword.value))){
               modal.style.display = "block";
               modalContent.classList.add("modal-error");
               pModal.innerHTML = " All fields are required !";
    }else{ validateSingUp(inpName.value, inpLastName.value, inpDni.value, inpDateBrth.value,
                          inpPhoneNum.value, inpAdress.value, inpCity.value, inpAdressCode.value,
                          inpEmail.value, inpPassword.value );
                          modal.style.display = "block";
                          pModal.innerHTML = " Welcome! Login Successfully !";
                          modalContent.classList.remove("modal-error");
                          pModal.classList.add("p-modal");
                          validatorName.innerHTML = "Name : " + inpName.value + "\n";
                          pModal.insertAdjacentElement("afterend", validatorName);
                          validatorLastName.innerHTML = "LastName : " + inpLastName.value + "\n";
                          validatorName.insertAdjacentElement("afterend", validatorLastName);
                          validatorId.innerHTML = "DNI : " + inpDni.value + "\n";
                          validatorLastName.insertAdjacentElement("afterend", validatorId);
                          validatorDob.innerHTML = "Date of Birth : " + inpDateBrth.value + "\n";
                          validatorId.insertAdjacentElement("afterend", validatorDob);
                          validatorPhoneNumber.innerHTML = "Phone Number : " + inpPhoneNum.value + "\n";
                          validatorDob.insertAdjacentElement("afterend", validatorPhoneNumber);
                          validatorAddress.innerHTML = "Address : " + inpAdress.value + "\n";
                          validatorPhoneNumber.insertAdjacentElement("afterend", validatorAddress);
                          validatorCity.innerHTML = "City : " + inpCity.value + "\n";
                          validatorAddress.insertAdjacentElement("afterend", validatorCity);
                          validatorAddressCode.innerHTML = "Address Code : " + inpAdressCode.value + "\n";
                          validatorCity.insertAdjacentElement("afterend", validatorAddressCode);
                          validatorEmail.innerHTML = "Email : " + inpEmail.value + "\n";
                          validatorAddressCode.insertAdjacentElement("afterend", validatorEmail);
                          validatorPassword.innerHTML = "Password : " + inpPassword.value + "\n";
                          validatorEmail.insertAdjacentElement("afterend", validatorPassword);
                          validatorRePassword.innerHTML = "Repeat Password : " + inpRepPassword.value + "\n";
                          validatorPassword.insertAdjacentElement("afterend", validatorRePassword);
        }
}


btnBack.onclick = function(e){
    window.location.href="./index.html";
}

//MODAL
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("myModalContent");
var span = document.getElementsByClassName("close")[0];
var pModal = document.getElementById("p-modal");
var validatorName = document.createElement("p");
validatorName.classList.add("inp-success-modal");
var validatorLastName = document.createElement("p");
validatorLastName.classList.add("inp-success-modal");
var validatorId = document.createElement("p");
validatorId.classList.add("inp-success-modal");
var validatorDob = document.createElement("p");
validatorDob.classList.add("inp-success-modal");
var validatorPhoneNumber = document.createElement("p");
validatorPhoneNumber.classList.add("inp-success-modal");
var validatorAddress = document.createElement("p");
validatorAddress.classList.add("inp-success-modal");
var validatorCity = document.createElement("p");
validatorCity.classList.add("inp-success-modal");
var validatorAddressCode = document.createElement("p");
validatorAddressCode.classList.add("inp-success-modal");
var validatorEmail = document.createElement("p");
validatorEmail.classList.add("inp-success-modal");
var validatorPassword = document.createElement("p");
validatorPassword.classList.add("inp-success-modal");
var validatorRePassword = document.createElement("p");
validatorRePassword.classList.add("inp-success-modal");


span.onclick = function() {
  modal.style.display = "none";
}

function validateEmptyFields(){
    if(inpName.value == "" && inpLastName.value == "" && inpDni.value == "" &&
       inpDateBrth.value == "" && inpPhoneNum.value == "" && inpAdress.value == "" &&
       inpCity.value == "" && inpAdressCode.value == "" && inpEmail.value == ""){
        return false;
    }else{
        return true;
    }
}


function hasCharsAndSpaces(parameter) {
    for (var i = 0 ; i < parameter.length; i++) {
      if (!((parameter[i] >= 'a' && parameter[i] <= 'z') ||
            (parameter[i] >= 'A' && parameter[i] <= 'Z' || parameter[i] == ' '))) {
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

function isSpaces(parameter) {
    var spaces = " ";
    for (var i = 0; i < parameter.length; i++) {
      if (spaces.includes(parameter[i])) {
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

function hasNumbersAndCharAndSpaces(parameter) {
    var num = false;
    var char = false;
    var spaces = false;

    for (var i = 0; i < parameter.length; i++) {
      if (isNumber(parameter[i])) {
        num = true;
      } else if (isChars(parameter[i])) {
        char = true;
      } else if( isSpaces(parameter[i])) {
        spaces = true;
      }else {
        return false;
      }
    }

    return num && char && spaces;
}



}


