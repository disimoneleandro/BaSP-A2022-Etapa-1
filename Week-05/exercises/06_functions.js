// 6-A Functions
function suma (num1,num2) {
    var result = num1 + num2;
    console.log(result);
}
suma("6-A : ", 2,3)

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
console.log(sumar ("6-B : ",(3,6)));
console.log(sumar( "6-B : ",(3,"Hello")));

// 6-C Functions
function validateInteger (number){
    return (Number.isInteger(number));
}
console.log("6-C : " , validateInteger(4));
console.log("6-C : " ,validateInteger(5.98));

// 6-D Functions
function validateD (num1,num2) {
    if( !validateInteger(num1) || !validateInteger(num2) ){
        return Math.round(num1 + num2);
    } else {
        return num1 + num2
    }
}
console.log("6-D : ", validateD(10,10));
console.log("6-D : ", validateD(2,2.4));

// 6-E Functions
function sumaE(num1, num2){
    return validateD(num1,num2);
}
console.log("6-E : ", sumaE(5,6.8));