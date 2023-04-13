var kmPrice = 0.21;
var totalPrice = null;

function givePrice() {
    var age = document.getElementById("age").value;
    age = Number(age);
    var distance = document.getElementById("distance").value;
    distance = Number(distance);
    totalPrice = (distance * kmPrice).toFixed(2);
    if (age < 18) {
        var underDiscount = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`Prezzo del biglietto: € ${underDiscount}`);
    }
    else if (age > 65) {
        var overDiscount = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
        document.getElementById("price").innerText = (`Prezzo del biglietto: € ${overDiscount}`);
    }
    else {
        document.getElementById("price").innerText = (`Prezzo del biglietto: € ${totalPrice}`);
    }
    event.preventDefault()
}


