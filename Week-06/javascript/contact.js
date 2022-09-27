window.onload = function() {
var inpNameContact = document.getElementById("form-name");
var inpEmailContact = document.getElementById("form-email");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var contactArea = document.getElementById("contact-area");
var textArea = document.getElementById("text-area")
var btnSendForm = document.getElementById("btn-send-form");
var inpContactError = document.createElement("p");
inpContactError.classList.add("text-error");


inpNameContact.onblur = function() {
    if(inpNameContact.value.trim() == ""){
        inpNameContact.classList.add("red-border");
        inpContactError.innerHTML = "*Empty name";
        inpNameContact.insertAdjacentElement("afterend", inpContactError);
    }else if( inpNameContact.value.length <= 3 ){
        inpNameContact.classList.add("red-border");
        inpContactError.innerHTML = "*Requery min 4 characters";
        inpNameContact.insertAdjacentElement("afterend", inpContactError);
    }else if(!hasCharsAndSpaces(inpNameContact.value)){
        inpNameContact.classList.add("red-border");
        inpContactError.innerHTML = "*Requery only letters";
        inpNameContact.insertAdjacentElement("afterend", inpContactError);
    }else{ inpNameContact.classList.add("green-border");}
}

inpNameContact.onfocus = function(){
    inpNameContact.classList.remove("red-border");
    inpContactError.remove();
}


inpEmailContact.onblur = function(){
    if (inpEmailContact.value == ""){
        inpEmailContact.classList.add("red-border");
        inpContactError.innerHTML = "*Empty Email";
        inpEmailContact.insertAdjacentElement("afterend", inpContactError);

    } else if(!emailExpression.test(inpEmailContact.value)){
        inpEmailContact.classList.add("red-border");
        inpContactError.innerHTML = "Please insert email valid";
        inpEmailContact.insertAdjacentElement("afterend", inpContactError);
    } else{ inpEmailContact.classList.add("green-border");}
}

inpEmailContact.onfocus = function(){
    inpEmailContact.classList.remove("red-border");
    inpContactError.remove();
}

textArea.onblur = function() {
    if(textArea.value == ""){
        textArea.classList.add("red-border");
        inpContactError.innerHTML = "*Empty message";
        textArea.insertAdjacentElement("afterend", inpContactError);
    }else if( textArea.value.length <= 3 ){
        textArea.classList.add("red-border");
        inpContactError.innerHTML = "*Require min 4 characters";
        textArea.insertAdjacentElement("afterend", inpContactError);
    // }else if( !hasNumbersAndChar(textArea.value) ){
    //     textArea.classList.add("red-border");
    //     inpContactError.innerHTML = "*Only characters and numbers";
    //     textArea.insertAdjacentElement("afterend", inpContactError);
    }else{ textArea.classList.add("green-border");}
}

textArea.onfocus = function(){
    textArea.classList.remove("red-border");
    inpContactError.remove();
}

btnSendForm.onclick = function(e){
    e.preventDefault();
    if(inpNameContact.value == "" && inpEmailContact.value == "" && textArea.value == ""){
        alert("Please complete fields");
        inpNameContact.onblur();
        inpEmailContact.onblur();
        textArea.onblur();
    }else if(!emailExpression.test(inpEmailContact.value)){
        alert("Please insert a email correct");
        inpEmailContact.onblur();
    }else if(textArea.value == ""){
        alert("Empty message, please complete this area");
        textArea.onblur();
    }else if(textArea.value.length <= 3){
        alert(" Require min 4 letters");
        textArea.onblur();
    }else{ alert("Name : " + inpNameContact.value + "\n" + "Email : " + inpEmailContact.value + "\n" + "Message : " + textArea.value )}
}





function hasCharsAndSpaces(parameter) {
    for (var i = 0 ; i < parameter.length; i++) {
      if (!((parameter[i] >= 'a' && parameter[i] <= 'z') || (parameter[i] >= 'A' && parameter[i] <= 'Z' || parameter[i] == ' '))) {
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

function isNumber(parameter) {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (var i = 0; i < parameter.length; i++) {
      if (numbers.includes(parameter[i])) {
        return true;
      }
    }
    return false;
}


function isChars(parameter) {
    for (var i = 0 ; i < parameter.length; i++) {
      if (!((parameter[i] >= 'a' && parameter[i] <= 'z') || (parameter[i] >= 'A' && parameter[i] <= 'Z'))) {
        return false;
      }
    }
    return true;
}


}