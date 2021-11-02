var sliderRed = document.getElementById("myRangeRed");
var sliderBlue = document.getElementById("myRangeBlue");
var sliderGreen = document.getElementById("myRangeGreen");
var output = document.getElementById("showhex");
var changecolor = document.getElementsByTagName("body");

// Display the default slider value
output.innerHTML = sliderRed.value; 

// Update the current slider value (each time you drag the slider handle)
sliderRed.oninput = function() {
  output.innerHTML = this.value;
}

function calculateColor() {
    
}

