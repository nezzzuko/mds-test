window.onscroll = function () {
    toggleBackToTopButton();
  };

  function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // Scroll back to top smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navRight = document.querySelector(".navright");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navRight.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".navitems a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navRight.classList.remove("active");
      });
    });
  });
  const backToTopBtn = document.getElementById("backToTopBtn");

  function toggleButtonVisibility() {
    if (window.pageYOffset > 300) {
      if (!backToTopBtn.classList.contains("show")) {
        backToTopBtn.classList.add("show");
        setTimeout(() => {
          backToTopBtn.classList.add("fade-in");
        }, 10);
      }
    } else {
      backToTopBtn.classList.remove("fade-in");
      backToTopBtn.classList.add("fade-out");
      setTimeout(() => {
        backToTopBtn.classList.remove("show", "fade-out");
      }, 300);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleButtonVisibility);
  backToTopBtn.addEventListener("click", scrollToTop);

  document
    .querySelector(".menu-icon")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".navitems").classList.toggle("active");
    });