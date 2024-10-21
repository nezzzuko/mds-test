// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.herobody h1', {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});

gsap.from('.herobody p', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.5,
  ease: 'power3.out'
});

gsap.from('.whybutton', {
  duration: 1,
  y: 50,
  opacity: 0,
  delay: 0.7,
  ease: 'power3.out'
});

gsap.from('.heroimg', {
  duration: 1.5,
  x: '100%',
  opacity: 0,
  ease: 'power3.out'
});

// Scroll animations
gsap.utils.toArray('.detailscontainer, .details2container, .details3container').forEach(section => {
  gsap.from(section.querySelectorAll('h1, h2, p, ul'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  });
});

// Parallax effect for hero images
gsap.to('.heroimg2, .heroimg3, .heroimg4', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.maincontainer',
    scrub: true
  }
});

// Navbar background change on scroll
const navbar = document.querySelector('.navcontainer');
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {className: 'navcontainer--scrolled', targets: navbar}
});


  document.addEventListener("DOMContentLoaded", function() {
      const heroImg = document.querySelector('.heroimg');
      if (heroImg) {
          heroImg.classList.add('visible');
      }
  });

  window.onscroll = function() {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll back to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.navright');

hamburger.addEventListener('click', function() {
hamburger.classList.toggle('active');
navRight.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navitems a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navRight.classList.remove('active');
});
});
});
const backToTopBtn = document.getElementById('backToTopBtn');

function toggleButtonVisibility() {
if (window.pageYOffset > 300) {
if (!backToTopBtn.classList.contains('show')) {
backToTopBtn.classList.add('show');
setTimeout(() => {
backToTopBtn.classList.add('fade-in');
}, 10);
}
} else {
backToTopBtn.classList.remove('fade-in');
backToTopBtn.classList.add('fade-out');
setTimeout(() => {
backToTopBtn.classList.remove('show', 'fade-out');
}, 300);
}
}

function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

window.addEventListener('scroll', toggleButtonVisibility);
backToTopBtn.addEventListener('click', scrollToTop);


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menuContainer = document.querySelector('.mobile-menu-container');

  menuToggle.addEventListener('click', function() {
      menuContainer.classList.toggle('active');
      document.body.style.overflow = menuContainer.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking outside
  menuContainer.addEventListener('click', function(e) {
      if (e.target === menuContainer) {
          menuContainer.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});



window.onscroll = function() {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
}

// Scroll back to top smoothly
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}


document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.navright');

hamburger.addEventListener('click', function() {
hamburger.classList.toggle('active');
navRight.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navitems a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navRight.classList.remove('active');
});
});
});
const backToTopBtn = document.getElementById('backToTopBtn');

function toggleButtonVisibility() {
if (window.pageYOffset > 300) {
if (!backToTopBtn.classList.contains('show')) {
backToTopBtn.classList.add('show');
setTimeout(() => {
backToTopBtn.classList.add('fade-in');
}, 10);
}
} else {
backToTopBtn.classList.remove('fade-in');
backToTopBtn.classList.add('fade-out');
setTimeout(() => {
backToTopBtn.classList.remove('show', 'fade-out');
}, 300);
}
}

function scrollToTop() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

window.addEventListener('scroll', toggleButtonVisibility);
backToTopBtn.addEventListener('click', scrollToTop); 

document.querySelector('.menu-icon').addEventListener('click', function() {
this.classList.toggle('active');
document.querySelector('.navitems').classList.toggle('active');
});


window.onload = function() {
  // Get all cookies and split them by ';'
  const cookies = document.cookie.split(";");

  // Loop through cookies and delete each one by setting its expiry date in the past
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  }
};







