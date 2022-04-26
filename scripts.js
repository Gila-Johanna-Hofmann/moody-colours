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
  let convertRToHex = r.toString(16);
  let convertGToHex = g.toString(16);
  let convertBToHex = b.toString(16);

  if (convertRToHex.length == 1)
    convertRToHex = "0" + convertRToHex;
  if (convertGToHex.length == 1)
    convertGToHex = "0" + convertGToHex;
  if (convertBToHex.length == 1)
    convertBToHex = "0" + convertBToHex;

  return "#" + convertRToHex + convertGToHex + convertBToHex;
}

//parses rgb-string-values to int-values and calculates hex-value
function changeHex () {
  let redout = parseInt(red);
  let greenout = parseInt(green);
  let blueout = parseInt(blue); 
  output.innerHTML =  RGBToHex(redout, greenout, blueout);
}

//changes document body background color based on range-input
function changeBackground() {
 var color = ["rgb(",red,",",green,",",blue,")"].join("");
  document.body.style.backgroundColor = color;
  copyButton.style.backgroundColor = color;
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

//get range-value and change background-color on change
sliderRed.addEventListener('change', (event) => 
{ red = getColorReverse(sliderRed);
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

//copy hex-value to clipboard
copyButton.addEventListener('click', (event) => 
{ navigator.clipboard.writeText(output.innerText);
  window.alert("Copied!");}
);

//display default hex-value
window.onload = function () {
  changeHex();
};
