// 3-A Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monts[4])
console.log(monts[10])


// 3-B Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monts.sort())


// 3-C Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monts.unshift("Principio");
monts.push("Final");
console.log(monts)


// 3-D Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monts.shift("Enero");
monts.pop("Diciembre");
console.log(monts)


// 3-E Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monts.reverse();
console.log(monts)


// 3-F Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var montsJoin = monts.join(" - ");
console.log(montsJoin)


// 3-G Arrays
var monts = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var montsSlice = monts.slice(4,11);
console.log(montsSlice)