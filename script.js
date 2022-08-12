const css = document.querySelector('h3');
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
   body.style.background = 
      "linear-gradient(to right, " 
      + color1.value + ", " 
      + color2.value + ")";
      
      css.textContent = body.style.background + ";";
}
//  if you're focusing on seperation of concerns, call the function here
// Remove the "oninput" field in html file and uncomment the 2 lines below

// color1.addEventListener("input", setGradient)
// color2.addEventListener("input", setGradient)