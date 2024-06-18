// Search
jQuery(function ($) {
  $(".search-container").click(function (e) {
    e.preventDefault(),
      $(this).toggleClass("active"),
      $(".search").toggleClass("active").find(".search-input").focus()
  })

});
// navbar-menu
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
document.getElementById('search-icon').addEventListener('click', function() {
  document.getElementById('header').classList.add('active');
});

document.getElementById('close-icon').addEventListener('click', function() {
  document.getElementById('header').classList.remove('active');
});

// BACK TO TOP
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
// loading 
var loader = document.getElementById("loading");
window.addEventListener("load", function () {
  loader.style.display = "none";

})

// eye password
function myFunction() {
  var x = document.getElementById("myInput");
  var z = document.getElementById("hide1");
  var y = document.getElementById("hide2");

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
function myFunctions() {
  var x = document.getElementById("myInputs");
  var z = document.getElementById("hide3");
  var y = document.getElementById("hide4");

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
// slick slider

$(document).ready(function () {
  $('.slider-sl').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 1000,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "10",
  });
});

//
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityInput = document.querySelector('.quantity');

// Xử lý sự kiện khi nhấn nút giảm
decreaseBtn.addEventListener('click', function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

// Xử lý sự kiện khi nhấn nút tăng
increaseBtn.addEventListener('click', function () {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});