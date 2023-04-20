let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  console.log(section);

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 50,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   breakpoints: {
//     0: { slidesPerView: 1 },
//     640: { slidesPerView: 2 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//   },
// });

var current = 0;
imgDuration = 2500;
showSlides();

function showSlides() {
  var slidephoto = document.querySelectorAll("#slide");

  for (let i = 0; i < slidephoto.length; i++) {
    slidephoto[i].style.display = "none";
  }
  current++;

  if (current > slidephoto.length) current = 1;
  slidephoto[current - 1].style.display = "block";

  setTimeout(showSlides, imgDuration);
}

//sunglass

// spectacles
// let glass = document.querySelector(".glass");

// for (var i = 1; i < glass.length; i++) {
//   glass[i].addEventListener("mouseover", changePic);

//   function changePic() {
//     pic[i].src = "img/glass"[i] + "-1.png";
//   }
// }
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("move");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("move");
  });
}

// style
var pics = document.querySelectorAll(".pic");
var lightbox = document.querySelector("#lightbox");
var lightboxImage = document.querySelector("#lightboxImage");
// var arrowl = document.querySelector("#arrow-left");
// var arrowr = document.querySelector("#arrow-right");
var close = document.querySelector("#close");

for (i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  //console.log(this); //li img

  var bigLocation = this.getAttribute("data-src");

  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}
lightbox.onclick = function () {
  lightbox.style.display = "none";
};
document.querySelector(".close").onclick = () => {
  lightbox.style.display = "none";
};

// document.querySelector("#arrow-left").onclick = () => {
//   pics[i - 1];
// };
