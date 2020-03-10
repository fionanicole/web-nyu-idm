// // https://stackoverflow.com/questions/36607830/how-to-delay-a-hyperlink-until-a-css-animation-ends
// $(document).ready(function() {
//   $('.greycolored').click(function(myFunction) {
//     myFunction.preventDefault();
//     var $a = $(this).addClass('clicked');
//     setTimeout(function() {
//       window.location.assign($a.attr('href'));
//     }, 3000);
//   });
// });
//

function colorize() {
  document.getElementById("greycolored").src = "images/porchpiccolor.png";
  setTimeout(delay(), 5000);
}
//
// function delay ("inspired-homepage.html") {
//     setTimeout( function() { window.location = "inspired-homepage.html"}, 5000);
// }

function changeBackground() {
  document.getElementById("myVideo").src = "images/lavender.mp4";
}

// https://stackoverflow.com/questions/14434604/i-want-to-delay-a-link-for-a-period-of-500-with-javascript
