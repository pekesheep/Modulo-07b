var roomPrice = 0;
var spaPrice = 0;
var occupationPercent = 0;
var nightPrice = 0;
var parkingPrice = 0;
var totalPrice = 0;


function selectRoom() {
    roomPrice = parseFloat(document.getElementById('select-room').options[document.getElementById('select-room').selectedIndex].value);
    console.log("Precio habitacion:", roomPrice);
    calcularTotal();
}

function checkSpa() {
    spaPrice = document.getElementById("check-spa").checked === true ? 20 : 0;
    console.log("Precio spa:", spaPrice);
    calcularTotal();
}

function selectOccupation() {
    occupationPercent = parseFloat(document.getElementById('select-occupation').options[document.getElementById('select-occupation').selectedIndex].value);
    console.log("Precio habitacion:", occupationPercent);
    calcularTotal();
}

function inputNight(){
    nightPrice = parseFloat(document.getElementById('night').value || 0);
    console.log("Precio noche:", nightPrice);
    calcularTotal();
}

function inputParking(){
    var parking = parseFloat(document.getElementById('parking').value || 0);
    parkingPrice = 10 * parking;
    console.log("Precio parking:", parkingPrice);
    calcularTotal();
}

function calcularTotal() {
    document.getElementById("total-price").innerHTML = " ";
    if (roomPrice === 0) document.getElementById("total-price").innerHTML = "Seleccione tipo de habitación";
    else if (occupationPercent === 0) document.getElementById("total-price").innerHTML = "Seleccione tipo de ocupación";
    else if (nightPrice === 0) document.getElementById("total-price").innerHTML = "Seleccione un número de noches";
    else {
        totalPrice = nightPrice * (roomPrice + spaPrice) * occupationPercent + parkingPrice;
        console.log("Precio total:", totalPrice);
        document.getElementById('total-price').innerHTML = "El precio total es de " + totalPrice + "€";
        }
}


