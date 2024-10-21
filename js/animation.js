
    const cards = document.querySelectorAll('.card');
    const cardsContainer = document.querySelector('.cards');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
  
    let currentCardIndex = 0;
    const cardWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-width'));
    const cardGap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-gap'));
  
    function updateCardsTransform() {
        const offset = currentCardIndex * (cardWidth + cardGap);
        cardsContainer.style.transform = `translateX(-${offset}px)`;
    }
  
    function updateButtonStates() {
        prevButton.disabled = currentCardIndex === 0;
        nextButton.disabled = currentCardIndex >= cards.length - 2;
        prevButton.style.opacity = prevButton.disabled ? 0.5 : 1;
        nextButton.style.opacity = nextButton.disabled ? 0.5 : 1;
    }
  
    function animateCard(card, animation) {
        return new Promise((resolve) => {
            card.classList.add(animation);
            card.addEventListener('animationend', () => {
                card.classList.remove(animation);
                resolve();
            }, { once: true });
        });
    }
  
    async function slideCards(direction) {
        if (direction === 'next' && currentCardIndex < cards.length - 2) {
            const currentCard = cards[currentCardIndex];
            const nextCard = cards[currentCardIndex + 2];
  
            await animateCard(currentCard, 'zoom-out');
            currentCard.classList.add('hidden');
  
            currentCardIndex++;
            updateCardsTransform();
            updateButtonStates();
  
            // nextCard.classList.remove('hidden');
            // await animateCard(nextCard, 'zoom-in');
  
        } else if (direction === 'prev' && currentCardIndex > 0) {
            const currentCard = cards[currentCardIndex + 1];
            const prevCard = cards[currentCardIndex - 1];
  
            // await animateCard(currentCard, 'zoom-out');
            // currentCard.classList.add('hidden');
  
            currentCardIndex--;
            updateCardsTransform();
            updateButtonStates();
  
            prevCard.classList.remove('hidden');
            await animateCard(prevCard, 'zoom-in');
        }
    }
  
    nextButton.addEventListener('click', () => slideCards('next'));
    prevButton.addEventListener('click', () => slideCards('prev'));
  
    // Initialize
    updateCardsTransform();
    updateButtonStates();
  
    // Show initial two cards
    cards[0].classList.remove('hidden');
    cards[1].classList.remove('hidden');
  
    // Responsive adjustments
    window.addEventListener('resize', () => {
        updateCardsTransform();
    });