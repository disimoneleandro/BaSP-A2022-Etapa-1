// 5-A For
var frutas = ["manzanas", "peras", "frutillas", "kiwi", "naranjas"];
var contador = 0;
for ( contador ;  contador < frutas.length ; contador++ ) {
    alert(frutas[0])
    alert(frutas[1])
    alert(frutas[2])
    alert(frutas[3])
    alert(frutas[4])
    break;
}


// 5-B For
var fruts = ["manzanas", "peras", "frutillas", "kiwi", "naranjas"];
for ( var i = 0;  i < fruts.length ; i++ ) {
    alert(fruts[i][0].toUpperCase() + fruts[i].substring(1));
}


// 5-C For
var sentence = "";
var fruta = ["manzanas", "peras", "frutillas", "kiwi", "naranjas"];
for ( var i = 0;  i < fruta.length ; i++ ) {
    var sentence = fruta;
}
alert(sentence);


// 5-D For
var arrayEmpty = [];
for (var i = 0; i < 10 ; i++) {
    arrayEmpty.push(i);
}
console.log("5-D : ",arrayEmpty);
