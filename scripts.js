var sliderRed = document.getElementById("myRangeRed");
var sliderBlue = document.getElementById("myRangeBlue");
var sliderGreen = document.getElementById("myRangeGreen");
var output = document.getElementById("showhex");
var changecolor = document.getElementsByTagName("body");



//get slider values
var red = sliderRed.value;
var blue = sliderBlue.value*-1; //the blue range ouputs negative values --> enables "inverting" the range in order to get a brighter colors overall
var green = sliderGreen.value;

//calculate hex values from slider values
var intToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var r = intToHex(red);
var b = intToHex(blue);
var g = intToHex(green);

//calculate rgb-hex-code from r, g, b
var fullColorHex = function(r,g,b) {   
  return '#'+r+g+b;
};

// Update the current slider value (each time you drag the slider handle)
const inputhandlder = function() {
  output.innerHTML = fullColorHex(r, g, b);
}

sliderRed.addEventListener(input, inputhandlder)

// Display the default slider value
//output.innerHTML = fullColorHex(r, g, b); 



