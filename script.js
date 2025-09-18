let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

  // Slideshow
    let slides = document.querySelectorAll('.slide');
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);

    /* ===== JS: mobile menu toggle + sticky fallback ===== */
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle && menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Sticky fallback: if element doesn't stick due to parent overflow or browser, make it fixed on scroll
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return;
  const navParent = mainNav.parentElement; // header-container is parent
  const navTop = mainNav.getBoundingClientRect().top + window.scrollY;

  function handleScroll() {
    // if page scrolled past navTop, add fixed class; else remove
    if (window.scrollY > navTop) {
      if (!mainNav.classList.contains('fixed')) {
        mainNav.classList.add('fixed');
        // add padding so page content doesn't jump under fixed nav
        document.body.style.paddingTop = mainNav.offsetHeight + 'px';
      }
    } else {
      if (mainNav.classList.contains('fixed')) {
        mainNav.classList.remove('fixed');
        document.body.style.paddingTop = '';
      }
    }
  }

  // run initially in case page is already scrolled
  handleScroll();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    // recalc height padding if fixed
    if (mainNav.classList.contains('fixed')) {
      document.body.style.paddingTop = mainNav.offsetHeight + 'px';
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("show");
});
document.querySelectorAll(".dropdown > .dropbtn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault(); // prevent accidental page jump
    const parent = btn.parentElement;
    parent.classList.toggle("active");
  });
});

   


