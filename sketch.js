// function for converting rupees into dollar
function f1() {
  var str = this.document.getElementById("textbox").value;
  var mult = 74.57 * str;
  this.document.getElementById("ans").innerHTML = "₹" + mult;
}

// function for clearing the value
function f2() {
  this.document.getElementById("ans").innerHTML = "";
}
