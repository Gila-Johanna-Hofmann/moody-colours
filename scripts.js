const sliderRed = document.getElementById("myRangeRed");
const sliderBlue = document.getElementById("myRangeBlue");
const sliderGreen = document.getElementById("myRangeGreen");
const copyButton = document.getElementById("copyButton");

//establish default background-color
let red = (parseInt(sliderRed.value) * -1).toString();
let green = sliderGreen.value;
let blue = (parseInt(sliderBlue.value) * -1).toString();
let output = document.getElementById("show-hex");


//calculate hex-value from rgb-values
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

//parses rgb-string-values to int-values and calculates hex-value
function changeHex () {
  var redout = parseInt(red);
  var greenout = parseInt(green);
  var blueout = parseInt(blue); 
  output.innerHTML =  RGBToHex(redout, greenout, blueout);
}

//changes document body background color based on range-input
function changeBackground() {
  document.body.style.backgroundColor = ["rgb(",red,",",green,",",blue,")"].join("");
  changeHex();
}

//returns range-value in reverse order
function getColorReverse(slider) {
  return (parseInt(slider.value) * -1).toString();
}

//returns range-value
function getColor(slider) {
  return slider.value;
};

function copyToClipBoard() {
  navigator.clipboard.writeText(output.innerText);
}

sliderRed.addEventListener('change', (event) => 
{ 
  red = getColorReverse(sliderRed);
  changeBackground()}
  
);

sliderBlue.addEventListener('change', (event) => 
{ blue = getColorReverse(sliderBlue);
  changeBackground();}
);

sliderGreen.addEventListener('change', (event) => 
{ red = getColor(sliderGreen);
  changeBackground();}
);

copyButton.addEventListener('click', (event) => 
{ copyToClipBoard("show-hex");}
);

//display default hex-value
window.onload = function () {
  changeHex();
};
