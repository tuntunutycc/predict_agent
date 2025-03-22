// Tarot card deck data
const tarotDeck = [
    { 
        name: 'The Fool', 
        meaning: 'New beginnings, innocence, spontaneity, taking chances',
        reading: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe. It suggests taking a chance, being spontaneous, and having an open mind. The Fool is also about trusting in the universe and taking a leap of faith.',
        image: 'fool.svg' 
    },
    { 
        name: 'The Magician', 
        meaning: 'Manifestation, resourcefulness, power, skill',
        reading: 'The Magician represents manifestation, resourcefulness, power, and inspiration. It suggests that you have all the tools and resources you need to achieve your goals. The card indicates that you are in a position to make things happen, to use your skills and talents effectively, and to take action. It\'s a sign of confidence, creativity, and the ability to manifest your desires.',
        image: 'magician.svg' 
    },
    { 
        name: 'The High Priestess', 
        meaning: 'Intuition, mystery, inner knowledge, divine feminine',
        reading: 'The High Priestess represents intuition, mystery, and inner knowledge. She suggests that you should trust your intuition and look for answers within. The card indicates a time of reflection and contemplation, where you should listen to your inner voice. It\'s about accessing your subconscious mind and trusting your instincts.',
        image: 'priestess.svg' 
    },
    { 
        name: 'The Empress', 
        meaning: 'Fertility, creativity, abundance, nurturing',
        reading: 'The Empress represents fertility, creativity, abundance, and nurturing. She suggests a period of growth, creativity, and abundance in your life. The card indicates that you are in a fertile period where you can create and manifest your desires. It\'s about nurturing your ideas and projects, and allowing them to grow and flourish.',
        image: 'empress.svg' 
    },
    { 
        name: 'The Emperor', 
        meaning: 'Authority, structure, control, fatherhood',
        reading: 'The Emperor represents authority, structure, control, and fatherhood. He suggests that you need to take control of your situation, establish order, and exercise authority. The card indicates a time to be structured, organized, and disciplined. It\'s about taking charge and being responsible for your actions and decisions.',
        image: 'emperor.svg' 
    },
    { 
        name: 'The Hierophant', 
        meaning: 'Tradition, conformity, morality, ethics',
        reading: 'The Hierophant represents tradition, conformity, morality, and ethics. He suggests that you should follow established rules and traditions, and conform to social expectations. The card indicates a time to seek guidance from traditional sources and to respect established institutions. It\'s about finding structure and guidance in traditional ways.',
        image: 'hierophant.svg' 
    },
    { 
        name: 'The Lovers', 
        meaning: 'Love, harmony, relationships, values alignment',
        reading: 'The Lovers represents love, harmony, relationships, and values alignment. It suggests that you are facing an important decision regarding relationships or values. The card indicates a time to make choices based on love and harmony, and to align your actions with your values. It\'s about making decisions from the heart and following your true desires.',
        image: 'lovers.svg' 
    },
    { 
        name: 'The Chariot', 
        meaning: 'Victory, determination, willpower, self-control',
        reading: 'The Chariot represents victory, determination, willpower, and self-control. It suggests that you are moving forward with determination and willpower. The card indicates a time of triumph, success, and overcoming obstacles. It\'s about staying focused on your goals and using your willpower to achieve them.',
        image: 'chariot.svg' 
    },
    { 
        name: 'Strength', 
        meaning: 'Inner strength, courage, patience, control',
        reading: 'Strength represents inner strength, courage, patience, and control. It suggests that you have the inner resources to face challenges with grace and courage. The card indicates a time to be patient, to have faith in yourself, and to approach challenges with a gentle but firm hand. It\'s about finding your inner power and using it wisely.',
        image: 'strength.svg' 
    },
    { 
        name: 'The Hermit', 
        meaning: 'Soul-searching, introspection, solitude, inner guidance',
        reading: 'The Hermit represents soul-searching, introspection, solitude, and inner guidance. It suggests that you need time alone for reflection and self-discovery. The card indicates a time to withdraw from the world, to seek inner guidance, and to focus on your spiritual journey. It\'s about finding answers within yourself.',
        image: 'hermit.svg' 
    },
    { 
        name: 'Wheel of Fortune', 
        meaning: 'Destiny, turning point, luck, fate',
        reading: 'The Wheel of Fortune represents destiny, turning points, luck, and fate. It suggests that you are at a turning point in your life, where things are changing and evolving. The card indicates that both good and bad times are temporary, and that life is always moving forward. It\'s about accepting change and understanding that life is cyclical.',
        image: 'wheel.svg' 
    },
    { 
        name: 'Justice', 
        meaning: 'Fairness, truth, cause and effect, law',
        reading: 'Justice represents fairness, truth, cause and effect, and law. It suggests that you will receive what you deserve, whether good or bad. The card indicates a time of balance, fairness, and truth. It\'s about understanding that your actions have consequences and that justice will be served.',
        image: 'justice.svg' 
    },
    { 
        name: 'The Hanged Man', 
        meaning: 'Sacrifice, waiting, uncertainty, lack of direction',
        reading: 'The Hanged Man represents sacrifice, waiting, uncertainty, and lack of direction. It suggests that you need to pause and look at things from a different perspective. The card indicates a time of waiting, where you might need to make sacrifices or see things differently. It\'s about gaining new insights through a change in perspective.',
        image: 'hanged.svg' 
    },
    { 
        name: 'Death', 
        meaning: 'Endings, change, transformation, transition',
        reading: 'Death represents endings, change, transformation, and transition. It suggests that you are going through a major transformation or change in your life. The card indicates that something needs to end for something new to begin. It\'s about accepting change and transformation as a natural part of life.',
        image: 'death.svg' 
    },
    { 
        name: 'Temperance', 
        meaning: 'Balance, moderation, patience, purpose',
        reading: 'Temperance represents balance, moderation, patience, and purpose. It suggests that you need to find balance and harmony in your life. The card indicates a time to be patient, to practice moderation, and to find the middle ground. It\'s about combining different elements in your life to create harmony.',
        image: 'temperance.svg' 
    },
    { 
        name: 'The Devil', 
        meaning: 'Shadow self, attachment, addiction, restriction',
        reading: 'The Devil represents shadow self, attachment, addiction, and restriction. It suggests that you might be feeling trapped or bound by something in your life. The card indicates a time to examine your attachments and dependencies. It\'s about recognizing what holds you back and finding the courage to break free.',
        image: 'devil.svg' 
    },
    { 
        name: 'The Tower', 
        meaning: 'Sudden upheaval, chaos, revelation, awakening',
        reading: 'The Tower represents sudden upheaval, chaos, revelation, and awakening. It suggests that you are experiencing or about to experience a sudden change or disruption. The card indicates that sometimes destruction is necessary for renewal. It\'s about accepting that change can be dramatic and unexpected.',
        image: 'tower.svg' 
    },
    { 
        name: 'The Star', 
        meaning: 'Hope, faith, purpose, renewal',
        reading: 'The Star represents hope, faith, purpose, and renewal. It suggests that you are entering a period of hope and inspiration. The card indicates that better times are ahead and that you should have faith in the future. It\'s about finding hope and inspiration in difficult times.',
        image: 'star.svg' 
    },
    { 
        name: 'The Moon', 
        meaning: 'Illusion, fear, anxiety, subconscious',
        reading: 'The Moon represents illusion, fear, anxiety, and the subconscious. It suggests that things might not be as they seem. The card indicates a time to trust your intuition and to be aware of deception or illusion. It\'s about confronting your fears and understanding your subconscious mind.',
        image: 'moon.svg' 
    },
    { 
        name: 'The Sun', 
        meaning: 'Joy, success, celebration, positivity',
        reading: 'The Sun represents joy, success, celebration, and positivity. It suggests that you are entering a period of happiness and success. The card indicates that your hard work will be rewarded and that good times are ahead. It\'s about experiencing joy, success, and fulfillment in your life.',
        image: 'sun.svg' 
    },
    { 
        name: 'Judgement', 
        meaning: 'Inner calling, rebirth, absolution, awakening',
        reading: 'Judgement represents inner calling, rebirth, absolution, and awakening. It suggests that you are experiencing a spiritual awakening or a call to action. The card indicates that it\'s time to answer your inner calling and to make important decisions. It\'s about recognizing your true purpose and taking action.',
        image: 'judgement.svg' 
    },
    { 
        name: 'The World', 
        meaning: 'Completion, integration, accomplishment, travel',
        reading: 'The World represents completion, integration, accomplishment, and travel. It suggests that you are reaching a point of completion or achievement. The card indicates that you have accomplished your goals and are ready to move on to new challenges. It\'s about celebrating your achievements and recognizing your success.',
        image: 'world.svg' 
    }
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
    cardElement.setAttribute('data-card', card.name);
    
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
            `<div class="card-interpretation">
                <h3>${card.name}</h3>
                <p class="card-meaning"><strong>Key Meanings:</strong> ${card.meaning}</p>
                <p class="card-reading"><strong>Detailed Reading:</strong> ${card.reading}</p>
            </div>`
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