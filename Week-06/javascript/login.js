window.onload = function() {

var inputLoginEmail = document.getElementById("input-login-email");
var inputLoginPassword = document.getElementById("input-login-password");
var backButton = document.getElementById("back-btn");
var loginButton = document.getElementById("login-btn");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var inputLoginError = document.createElement("p");
inputLoginError.classList.add("text-error");



//Validate Login Email

inputLoginEmail.onblur = function() {
    if (inputLoginEmail.value == ""){
        inputLoginEmail.classList.add("red-border");
        inputLoginError.innerHTML = "Empty Email";
        inputLoginEmail.insertAdjacentElement("afterend", inputLoginError);

    } else if(!emailExpression.test(inputLoginEmail.value)){
        inputLoginEmail.classList.add("red-border");
    } else{ inputLoginEmail.classList.add("green-border");

    }
}

inputLoginEmail.onfocus = function(){
    inputLoginEmail.classList.remove("red-border");
    inputLoginError.remove();
}



// Validate Login password

inputLoginPassword.onblur = function() {
    if (inputLoginPassword.value == ""){
        inputLoginPassword.classList.add("red-border");
        inputLoginError.innerHTML = "Empty Password";
        inputLoginPassword.insertAdjacentElement("afterend", inputLoginError);
    }else if ( inputLoginPassword.value.length < 8 || inputLoginPassword.value.length > 20 ){
        inputLoginPassword.classList.add("red-border");
        inputLoginError.innerHTML = "Password must be 8 and 20 characters";
        inputLoginPassword.insertAdjacentElement("afterend", inputLoginError);
    } else{ inputLoginPassword.classList.add("green-border");
    }

}

inputLoginPassword.onfocus = function(){
        inputLoginPassword.classList.remove("red-border");
         inputLoginError.remove();
}



// Validate Button Login

loginButton.onclick = function(e){
    e.preventDefault();
    if(inputLoginEmail.value == ""){
        alert("Please insert email valid");
    }else if(inputLoginPassword.value == ""){
        alert("Please insert password valid");
    }else if(!emailExpression.test(inputLoginEmail.value)){
        alert("Please insert a email correct");
    }else if(inputLoginPassword.value.length < 8 || inputLoginPassword.value.length > 20){
        alert("Password needs 8 to 20 characters");
    }else{ alert("Email : " + inputLoginEmail.value + "\n" +"Pass : " + inputLoginPassword.value)}
}


// Validate Button Back

backButton.onclick = function(e){
    window.location.href="./index.html";
}






}








