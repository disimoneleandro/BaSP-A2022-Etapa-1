// 6-A Functions
function suma (num1,num2) {
    var result = num1 + num2;
    console.log(result);
}
suma(2,3)


// 6-B Functions
function sumar (num1,num2) {
    var result = num1 + num2;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Is not a number");
    return NaN;
   } else {
    return result;
   }
}
console.log(sumar(3,6));
console.log(sumar(3,"Hello"));


// 6-C Functions
function validateInteger (number){
    if (Number.isInteger(number)) {
        return " Is a integer " + number;
    } else{
        return " Is not integer " + Math.floor(number);
    }
}
console.log(validateInteger(4));
console.log(validateInteger(5.98));

// 6-D Functions

console.log(validateInteger(sumar(2,8.3)));

// 6-E Functions
function sumar (num1,num2) {
    var result = num1 + num2;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Is not a number");
    return NaN;
   } else {
    return result;
   }
}