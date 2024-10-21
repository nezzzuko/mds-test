// the button after scrolling down 100px
window.onscroll = function () {
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


let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateCards() {
  cardsContainer.style.transform = `translateX(-${currentCardIndex * 375}px)`; // 345px (card width) + 30px (gap)
}

function slideCards(direction) {
  console.log('clicked')
  if (direction === 'next' && currentCardIndex < cards.length - 2) {
    cards[currentCardIndex].classList.add('fade-out');
    setTimeout(() => {
      currentCardIndex++;
      updateCards();
      setTimeout(() => {
        cards[currentCardIndex - 1].classList.remove('fade-out');
      }, 600);
    }, 500);
  } else if (direction === 'prev' && currentCardIndex > 0) {
    currentCardIndex--;
    updateCards();
    setTimeout(() => {
      cards[currentCardIndex].classList.remove('fade-out');
    }, 50);
  }
}

nextButton.addEventListener('click', () => slideCards('next'));
prevButton.addEventListener('click', () => slideCards('prev'));

// Initial setup
updateCards();


