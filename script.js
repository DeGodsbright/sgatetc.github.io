document.addEventListener("DOMContentLoaded", () => {
  const scriptureSlides = document.querySelectorAll(".slides");
  const heroSlides = document.querySelectorAll(".hero-slide");
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".nav-links a");

  let scriptureIndex = 0;
  let heroIndex = 0;

  function showScriptureSlide() {
    if (!scriptureSlides.length) return;

    scriptureSlides.forEach((slide) => {
      slide.style.display = "none";
    });

    scriptureSlides[scriptureIndex].style.display = "block";
    scriptureIndex = (scriptureIndex + 1) % scriptureSlides.length;
  }

  function showHeroSlide() {
    if (heroSlides.length < 2) return;

    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
  }

  function closeMenu() {
    if (!menuToggle || !siteNav) return;

    menuToggle.classList.remove("active");
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  showScriptureSlide();
  setInterval(showScriptureSlide, 4500);
  setInterval(showHeroSlide, 5500);
});
