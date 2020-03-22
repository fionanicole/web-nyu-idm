function colorize() {
  document.getElementById("greycolored").src = "images/porchpiccolor.png";
}

// SOURCE: https://stackoverflow.com/questions/9877263/time-delayed-redirect

$('#shiftToPage').click (function(event) {
   event.preventDefault(); //will stop the link href to call the blog page

   setTimeout(function () {
       window.location.href = "inspired-homepage.html"; //will redirect to your blog page (an ex: blog.html)
    }, 10000); //will call the function after 2 secs.

});


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
