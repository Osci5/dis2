// console.log("Hello")

new TypeIt('#element', {
  strings: [
    "Strony internetowe",
    "Uslugi graficzne",
    "Discord Bot",
    "Budowle Minecraft",
  ],
  breakLines: false,
  loop: true
})

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  7000);



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

  // Other callback methods include: 
  // beforeString: (step, queue, instance) => {}
  // afterStep: (step, queue, instance) => {}
  // afterComplete: (instance) => {}

// new TypeIt('#element', {
//   loop: true,
//   loopDelay: 45
// })
// .type('Service 1')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 2')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 3')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300)
// .type('Service 4')
// .pause(1000)
// .options({speed: 200})
// .delete(9)
// .options({speed: 45})
// .pause(300);