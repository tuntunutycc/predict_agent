// Tarot card deck data
const tarotDeck = [
    { name: 'The Fool', meaning: 'New beginnings, innocence, spontaneity', image: 'fool.svg' },
    { name: 'The Magician', meaning: 'Manifestation, resourcefulness, power', image: 'magician.svg' },
    { name: 'The High Priestess', meaning: 'Intuition, mystery, inner knowledge', image: 'priestess.svg' },
    // Add more cards here
];

let currentReading = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const singleCardBtn = document.getElementById('singleCard');
    const threeCardBtn = document.getElementById('threeCard');
    const newReadingBtn = document.getElementById('newReading');
    const cardDisplay = document.getElementById('cardDisplay');
    const interpretation = document.getElementById('interpretation');

    singleCardBtn.addEventListener('click', () => startReading(1));
    threeCardBtn.addEventListener('click', () => startReading(3));
    newReadingBtn.addEventListener('click', resetReading);
});

// Start a new reading
function startReading(numCards) {
    currentReading = [];
    const shuffledDeck = shuffleDeck([...tarotDeck]);
    
    // Clear previous reading
    cardDisplay.innerHTML = '';
    interpretation.innerHTML = '';
    
    // Draw cards
    for (let i = 0; i < numCards; i++) {
        const card = shuffledDeck[i];
        currentReading.push(card);
        createCardElement(card, i);
    }

    // Show new reading button
    document.getElementById('newReading').style.display = 'inline-block';
    
    // Hide reading option buttons
    document.getElementById('singleCard').style.display = 'none';
    document.getElementById('threeCard').style.display = 'none';
}

// Create card element
function createCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.textContent = card.name;
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);
    
    cardDisplay.appendChild(cardElement);
    
    // Add click event to flip card
    cardElement.addEventListener('click', () => {
        if (!cardElement.classList.contains('flipped')) {
            cardElement.classList.add('flipped');
            setTimeout(() => showInterpretation(), 600);
        }
    });
}

// Show card interpretation
function showInterpretation() {
    if (currentReading.every(card => 
        document.querySelector(`[data-card="${card.name}"]`)?.classList.contains('flipped'))) {
        const interpretationText = currentReading.map(card => 
            `<h3>${card.name}</h3><p>${card.meaning}</p>`
        ).join('');
        
        interpretation.innerHTML = interpretationText;
    }
}

// Reset reading
function resetReading() {
    cardDisplay.innerHTML = '';
    interpretation.innerHTML = '';
    document.getElementById('newReading').style.display = 'none';
    document.getElementById('singleCard').style.display = 'inline-block';
    document.getElementById('threeCard').style.display = 'inline-block';
}

// Shuffle deck using Fisher-Yates algorithm
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}