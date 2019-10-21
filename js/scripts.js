var liter = function(gallon) {
  return gallon * 3.785;
};

var quart = function(gallon) {
    return gallon * 4;
};

var gallon = parseFloat(prompt("Enter gallons to covert to liters:"));

var result = liter(gallon);
var result2 = quart(gallon);
alert(result, result2);
