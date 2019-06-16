// Declaring the varibales
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var css = document.querySelector("h3");
var button = document.getElementById("butt");


// Set the background color of linear-gradient
function setGradient(){
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
		css.textContent = body.style.background + ";";
		button.style.backgroundImage = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";


}

button.style.backgroundImage = "linear-gradient(to right, "
+ color1.value
+ ", "
+ color2.value
+ ")";

// create random colors
function randomColor() {
            var characters = '0123456789abcdef';
            var color = '#';
            for (var i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random() * 16)];
            }
            return color;
            }

// assign random color with the input values and perform the gradient fucntion
function generatecolor(){
	color1.value = randomColor();
	color2.value = randomColor();

	// now we have assignde the new random value to the color values now set the linear_gradient according to the values that we have

	setGradient(); // function setGradient here the same thing here as below
	// body.style.background =
	// 	"linear-gradient(to right, "
	// 	+ color1.value
	// 	+ ", "
	// 	+ color2.value
	// 	+ ")";
	// 	css.textContent = body.style.background + ";";


}


button.addEventListener("click",generatecolor);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
