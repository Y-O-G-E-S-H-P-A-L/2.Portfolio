// JS for Navigation Effect on scroll

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// JS for Responsive Navigation Sidebar Menu

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuIcon.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  if (menuIcon.classList[1] == "fa-bars") {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  });
});

// JS for Bottom to top Scroll Button

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("active", window.scrollY > 700);
});
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// JS for Reveal the Website Element on Scroll

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
