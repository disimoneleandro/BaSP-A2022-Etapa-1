// 3-A Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(" 3-A : " , monts[4], monts[10])

// 3-B Arrays
console.log(" 3-B : " , monts.sort())

// 3-C Arrays
monts.unshift("Principio");
monts.push("Final");
console.log(" 3-C : " , monts)

// 3-D Arrays
monts.shift("Enero");
monts.pop("Diciembre");
console.log(" 3-D : " , monts)

// 3-E Arrays
monts.reverse();
console.log(" 3-E : " , monts)

// 3-F Arrays
var montsJoin = monts.join(" - ");
console.log( " 3-F : " , montsJoin)

// 3-G Arrays
var montsSlice = monts.slice(4,11);
console.log( " 3-G : " , montsSlice)