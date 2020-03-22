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

function colorize() {
  var x = document.getElementById("greycolored").src = "images/porchpiccolor.png";

  if(x.src="images/porchpiccolor.png"){
    document.getElementById("greycolored").display.visibility="visible";
    }
}
