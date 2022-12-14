window.onload = function() {

var inputLoginEmail = document.getElementById("input-login-email");
var inputLoginPassword = document.getElementById("input-login-password");
var backButton = document.getElementById("back-btn");
var loginButton = document.getElementById("login-btn");
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var inputLoginError = document.createElement("p");
inputLoginError.classList.add("text-error");
var inputEmailError = document.createElement("p");
inputEmailError.classList.add("text-error");


inputLoginEmail.onblur = function() {
    if (inputLoginEmail.value == ""){
        inputLoginEmail.classList.add("red-border");
        inputLoginError.innerHTML = "* Empty Email";
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


inputLoginPassword.onblur = function() {
    if ( inputLoginPassword.value == "" ){
        inputLoginPassword.classList.add("red-border");
        inputEmailError.innerHTML = "* Empty Password";
        inputLoginPassword.insertAdjacentElement("afterend", inputEmailError);
    }else if ( inputLoginPassword.value.length < 8 || inputLoginPassword.value.length > 20 ){
        inputLoginPassword.classList.add("red-border");
        inputEmailError.innerHTML = "Password must be 8 and 20 characters";
        inputLoginPassword.insertAdjacentElement("afterend", inputEmailError);
    } else{ inputLoginPassword.classList.add("green-border");}
}

inputLoginPassword.onfocus = function(){
        inputLoginPassword.classList.remove("red-border");
        inputEmailError.remove();
}


function validateLogin(email, password){
    fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + email + "&password=" + password)
        .then(function(response){
            console.log(response);
            if(response.status >= 400){
                throw new Error(response);
            }else{
                return response.json();
            }
        })
       .then(function(data){
            console.log(data.msg);
        })
        .catch(function(error){
            modal.style.display = "block";
            modalContent.classList.add("modal-error");
            pModal.innerHTML = " ?? Email or Password Invalid !";
        })

}

loginButton.onclick = function(e){
    e.preventDefault();
    if(validateEmptyFields() == ""){
        modal.style.display = "block";
        modalContent.classList.add("modal-error");
        pModal.innerHTML = " Please Complete fields !"
    }else{
        validateLogin(inputLoginEmail.value, inputLoginPassword.value);
        modal.style.display = "block";
        pModal.innerHTML = " Welcome! Login Successfully !"
        modalContent.classList.remove("modal-error");
        modalContent.classList.add("modal-success");
    }
}


backButton.onclick = function(e){
    window.location.href="./index.html";
}


//MODAL
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("myModalContent");
var span = document.getElementsByClassName("close")[0];
var pModal = document.getElementById("p-modal");


span.onclick = function() {
  modal.style.display = "none";
}

function validateEmptyFields(){
    if(inputLoginEmail.value == "" || inputLoginPassword.value == ""){
        return false;
    }else{
        return true;
    }
}

}








