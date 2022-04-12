const sliderRed = document.getElementById("myRangeRed");
const sliderBlue = document.getElementById("myRangeBlue");
const sliderGreen = document.getElementById("myRangeGreen");
let red = (parseInt(sliderRed.value) * -1).toString();
let green = sliderGreen.value;
let blue = (parseInt(sliderBlue.value) * -1).toString();
let output = document.getElementById("show-hex");

sliderRed.onchange = function () {
  red = blue = (parseInt(sliderRed.value) * -1).toString();
  document.getElementById("red-out").innerHTML = red;
  document.body.style.backgroundColor = ["rgb(",red,",",green,",",blue,")"].join("");
};

sliderBlue.onchange = function () {
  blue = (parseInt(sliderBlue.value) * -1).toString();
  document.getElementById("blue-out").innerHTML = blue;
  document.body.style.backgroundColor = ["rgb(",red,",",green,",",blue,")"].join("");
};

sliderGreen.onchange = function () {
  green = sliderGreen.value;
  document.getElementById("green-out").innerHTML = green;
  document.body.style.backgroundColor = "rgb(138, 190, 18)";
  document.body.style.backgroundColor = ["rgb(",red,",",green,",",blue,")"].join("");
};

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

window.onchange = function () {
  var redout = parseInt(red);
  var greenout = parseInt(green);
  var blueout = parseInt(blue);
  console.log(redout + blueout + greenout);
  output.innerHTML =  RGBToHex(redout, greenout, blueout);
};
