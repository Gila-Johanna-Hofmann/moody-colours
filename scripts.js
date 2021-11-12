var sliderRed = document.getElementById("myRangeRed");
var sliderBlue = document.getElementById("myRangeBlue");
var sliderGreen = document.getElementById("myRangeGreen");
var bodyColor = document.getElementsByTagName("body").style.backgroundColor;
var ouput = document.getElementById("showhex");

// Update the current slider value (each time you drag the slider handle)
output.innerHTML = sliderRed.value;

var red = sliderRed.value;
var blue = sliderBlue.value;
var green = sliderGreen.value;

var rgb = String(red+blue+green);

/* sliderRed.oninput = function() {
  output.innerHTML = this.value;
} */