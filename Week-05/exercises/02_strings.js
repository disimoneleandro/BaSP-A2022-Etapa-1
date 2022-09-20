// 2-A Strings
var scream = "I'm screaming loud !!!";
console.log("2-A : ",scream.toUpperCase())


// 2-B Strings
var dinosaur = "Tyrannosaurus";
var newDinosaur = dinosaur.substring(0, 5);
console.log("2-B : ",newDinosaur);


// 2-C Strings
var football = "Champions League";
var lastFootballString = football.substring(13);
console.log("2-C : ",lastFootballString);


// 2-D Strings
var eq = "equalizerS";
var resultEq = eq.substring(0,1).toUpperCase() + eq.substring(1).toLowerCase();
console.log("2-D : ",resultEq);


// 2-E Strings
var guitar = "Gibson LesPaul";
var resultGuitar = guitar.indexOf(" LesPaul");
console.log("2-E : ",resultGuitar);


// 2-F Strings
var longString = "chimpanzee friendship";
var resultLongString = (longString.substring(0,1).toUpperCase() + longString.substring(1,10)) +" "+ (longString.substring(11,12).toUpperCase() + longString.substring(12));
console.log("2-F : ",resultLongString)