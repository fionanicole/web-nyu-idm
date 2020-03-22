function gardenBackground() {
  var x = document.getElementById("myVideo");
  if (x.src="images/rain.mp4") {
    x.src="images/lavender.mp4";
  } else {
    x.src="images/rain.mp4";
  }
}

function rainBackground(){
  var x = document.getElementById("myVideo");
  if (x.src="images/lavender.mp4") {
    x.src="images/rain.mp4";
  } else {
    x.src="images/lavender.mp4";
  }
}

// https://stackoverflow.com/questions/27508025/html-javascript-how-can-i-make-a-button-appear-in-a-function
function colorize() {
  var x = document.getElementById("greycolored").src = "images/porchpiccolor.png";
  createGateway();
}

function createGateway(){
  var y = document.getElementById("gatewayButton");
  y.display="block";

}
