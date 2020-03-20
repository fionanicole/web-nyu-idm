function colorize() {
  document.getElementById("greycolored").src = "images/porchpiccolor.png";
}

function changeBackground() {
  document.getElementById("myVideo").src = "images/lavender.mp4";
}

// SOURCE: https://stackoverflow.com/questions/9877263/time-delayed-redirect

$('#shiftToPage').click (function(event) {
   event.preventDefault(); //will stop the link href to call the blog page

   setTimeout(function () {
       window.location.href = "inspired-homepage.html"; //will redirect to your blog page (an ex: blog.html)
    }, 10000); //will call the function after 2 secs.

});
