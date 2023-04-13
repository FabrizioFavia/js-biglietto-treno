var kmPrice = 0.21;
var totalPrice = null;

var age = prompt("Inserisci la tua età");
var distance = prompt("Inserisci la distanza da percorrere");
totalPrice = (Number(distance) * kmPrice)
totalPrice = totalPrice.toFixed(2);
if (age < 18) {
    var underDiscount = (totalPrice - (totalPrice * 20 / 100));
    underDiscount = underDiscount.toFixed(2);
    console.log(underDiscount);
}
else if (age > 65) {
    var overDiscount = (totalPrice - (totalPrice * 40 / 100));
    overDiscount = overDiscount.toFixed(2);
    console.log(overDiscount);
}
else{
    console.log(totalPrice);
}
