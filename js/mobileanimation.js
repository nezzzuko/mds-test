const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentCardIndex = 0;
const cardWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-width'));
const cardGap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-gap'));

function updateCardsTransform() {
    const offset = currentCardIndex * (cardWidth + cardGap);
    cardsContainer.style.transform = `translateX(-${offset}px) translateZ(0)`; // Adding translateZ for 3D effect
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index === currentCardIndex) {
            card.style.zIndex = 10; // Bring the current card to the front
        } else {
            card.style.zIndex = 1; // Send others to the back
        }
    });
}

function updateButtonStates() {
    prevButton.disabled = currentCardIndex === 0;
    nextButton.disabled = currentCardIndex >= cards.length - 1;
    prevButton.style.opacity = prevButton.disabled ? 0.5 : 1;
    nextButton.style.opacity = nextButton.disabled ? 0.5 : 1;
}

function slideCards(direction) {
    if (direction === 'next' && currentCardIndex < cards.length - 1) {
        animateCardTransition('next');
    } else if (direction === 'prev' && currentCardIndex > 0) {
        animateCardTransition('prev');
    }
}

function animateCardTransition(direction) {
    const currentCard = cards[currentCardIndex];
    const nextCard = cards[currentCardIndex + 1];
    const targetCard = direction === 'next' ? cards[currentCardIndex + 2] : cards[currentCardIndex - 1];
    if (direction === 'next') {
        currentCard.classList.add('zoom-out');
        setTimeout(() => {
            currentCard.classList.add('hidden');
            currentCard.classList.remove('zoom-out');
            currentCardIndex++;
            updateCardsTransform();
            updateButtonStates();
            targetCard.classList.remove('hidden');
            setTimeout(() => {
                targetCard.classList.remove('zoom-in');
            }, 300);
        }, 300);
    } else {
        targetCard.classList.remove('hidden');
        targetCard.classList.add('zoom-in');
        setTimeout(() => {
            currentCardIndex--;
            updateCardsTransform();
            updateButtonStates();
            setTimeout(() => {
                nextCard.classList.add('hidden');
                targetCard.classList.remove('zoom-in');
            }, 300);
        }, 300);
    }
    console.log(currentCard, nextCard, targetCard)
}

nextButton.addEventListener('click', () => slideCards('next'));
prevButton.addEventListener('click', () => slideCards('prev'));

// Initialize
updateCardsTransform();
updateButtonStates();

// Responsive adjustments
window.addEventListener('resize', () => {
    updateCardsTransform();
});