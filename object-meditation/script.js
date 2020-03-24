function gardenBackground() {
  var x = document.getElementById("myVideo");
  if (x.src = "images/rain.mp4") {
    x.src = "images/lavender.mp4";
  } else {
    x.src = "images/rain.mp4";
  }
}

function rainBackground() {
  var x = document.getElementById("myVideo");
  if (x.src = "images/lavender.mp4") {
    x.src = "images/rain.mp4";
  } else {
    x.src = "images/lavender.mp4";
  }
}

function inspireBackground() {
  var x = document.getElementById("myVideo");
  if (x.src = "images/lavender.mp4") {
    x.src = "images/purpleparticle.mp4";
  } else {
    x.src = "images/lavender.mp4";
  }

  var y = document.getElementById("greycolored");
  y.src = "images/porchpiccolor.png";
  var z = document.getElementById("inspireButton");
  z.innerHTML = "Inspire Again!";
  z.color = "pink";
  z.fontSize = "18px";

  createGateway();
}

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// https://stackoverflow.com/questions/3292038/redirect-website-after-certain-amount-of-time

function createGateway() {
  var x = document.getElementById("gatewayButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  redirectGloriously();
}

function redirectGloriously() {
  var timer = setTimeout(function() {
    window.location = 'inspired-homepage.html'
  }, 5000);

  var x = document.getElementById("myVideo");
  if (x.src = "images/rain.mp4") {
    x.src = "images/glorious.mp4";
  } else {
    x.src = "images/rain.mp4";
  }

  document.clear();
}
