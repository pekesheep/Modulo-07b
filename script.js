const BILLS = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
var cashDrawer = [{
  money: 200,
  quant: 1
},
{
  money: 100,
  quant: 2
},
{
  money: 50,
  quant: 3
},
{
  money: 20,
  quant: 1
},
{
  money: 10,
  quant: 10
},
{
  money: 5,
  quant: 2
},
{
  money: 2,
  quant: 3
},
{
  money: 1,
  quant: 4
},
{
  money: 0.50,
  quant: 10
},
{
  money: 0.20,
  quant: 5
},
{
  money: 0.10,
  quant: 3
},
{
  money: 0.05,
  quant: 2
},
{
  money: 0.02,
  quant: 1
},
{
  money: 0.01,
  quant: 14
}];

//Botones deshabilitados si no hay inputs
activateBtn = () => {
  document.getElementById("button-calculate").disabled = (document.getElementById("total").value === "" || document.getElementById("payed").value === "");
}

//Funcion para limpiar la pantalla
var clearSpans = () => {
  var clearSpans = document.getElementById("result-box");
  var description = document.createElement("span");
  clearSpans.appendChild(description);
  while (clearSpans.firstChild) {
    clearSpans.removeChild(clearSpans.lastChild);
  }
}

//Comprobar el máximo cambio de la caja
var maxBills = (arr) => {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i].money * arr[i].quant;
  }
  console.log("Dinero en la caja", total);
  return total;
}


var calculate = () => {
  clearSpans();

  var payed = document.getElementById("payed").value;
  var total = document.getElementById("total").value;
  var rest = payed - total;

  if (rest < 0) {
    document.getElementById("result").className = "error-result";
    return document.getElementById("result").innerHTML = "No se ha pagado todo el importe";
  }
  else if (maxBills(cashDrawer) < rest) {
    document.getElementById("result").className = "error-result";
    return document.getElementById("result").innerHTML = "No hay tanto cambio en la caja";
  }
  document.getElementById("result").innerHTML = ("A devolver: " + rest.toFixed(2) + " €");
  document.getElementById("result").className = "";


  changeBills(rest, BILLS, cashDrawer);

}


var changeBills = (rest, BILLS, cashDrawer) => {

  var i = 0;
  var devolution = 0;
  for (; i < BILLS.length; i++) {
    devolution = rest / BILLS[i];  
    var devolutionRounded = Math.floor(devolution);
    
    if (devolutionRounded >= 1 && cashDrawer[i].quant !== 0) {
     
      //Quitamos los billetes de la caja que hemos creado hasta que no haya más existencias antes de pasar al siguiente billete.
      devolutionRounded = (devolutionRounded >= cashDrawer[i].quant) ? devolutionRounded = cashDrawer[i].quant : devolutionRounded;      


      var container = document.getElementById("result-box");
      var description = document.createElement("span");
      description.setAttribute("class", "result-style");

      if (devolutionRounded === 1 && i >= 6) description.innerText = (devolutionRounded + " moneda de " + BILLS[i] + " €");
      else if (devolutionRounded > 1 && i >= 6) description.innerText = (devolutionRounded + " monedas de " + BILLS[i] + " €");
      else if (devolutionRounded === 1 && i < 6) description.innerText = (devolutionRounded + " billete de " + BILLS[i] + " €");
      else if (devolutionRounded > 1 && i < 6) description.innerText = (devolutionRounded + " billetes de " + BILLS[i] + " €");

      container.appendChild(description);
      rest = rest - devolutionRounded * BILLS[i];

    }
  }
}