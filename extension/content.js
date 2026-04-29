// Moral Mosquito - Content Script
// Displays a popup with moral slogans on Facebook

const moralSlogans = [
  "Remember: Time spent on social media is time not spent with loved ones.",
  "Seek wisdom before seeking validation from strangers.",
  "Every moment scrolling is a moment of your life. Use it wisely.",
  "Comparison is the thief of joy. Focus on your own journey.",
  "Social media shows highlights, not reality. Don't judge your life by others' curated moments.",
  "The algorithm wants your attention. Protect your mind and spirit.",
  "Kindness in comments is a reflection of your character.",
  "Digital detox is not a weakness; it's wisdom.",
  "Your worth is not measured in likes and shares.",
  "Before you post, ask: Is this true, necessary, and kind?",
  "Gossip online is still gossip. Choose your words with care.",
  "A peaceful mind is worth more than a thousand followers.",
  "Seek connection, not collection of friends.",
  "The best conversations happen face to face.",
  "Protect your children from the addiction of validation."
];

// Create popup element
function createPopup() {
  const popup = document.createElement('div');
  popup.id = 'moral-mosquito-popup';
  popup.innerHTML = `
    <div class="moral-popup-container">
      <button class="moral-close-btn" id="moral-close">×</button>
      <div class="moral-content">
        <div class="moral-priest-icon">👨‍⚖️</div>
        <h2 class="moral-title">Moral Reminder</h2>
        <p class="moral-slogan">${getRandomSlogan()}</p>
        <button class="moral-next-btn" id="moral-next">Next Slogan</button>
        <button class="moral-continue-btn" id="moral-continue">I'll Be Mindful</button>
      </div>
    </div>
  `;
  return popup;
}

// Get random slogan
function getRandomSlogan() {
  return moralSlogans[Math.floor(Math.random() * moralSlogans.length)];
}

// Show popup
function showPopup() {
  // Check if popup already exists
  if (document.getElementById('moral-mosquito-popup')) {
    return;
  }

  const popup = createPopup();
  document.body.appendChild(popup);

  // Add event listeners
  document.getElementById('moral-close').addEventListener('click', closePopup);
  document.getElementById('moral-continue').addEventListener('click', closePopup);
  document.getElementById('moral-next').addEventListener('click', changeSlogan);
}

// Close popup
function closePopup() {
  const popup = document.getElementById('moral-mosquito-popup');
  if (popup) {
    popup.classList.add('moral-fade-out');
    setTimeout(() => popup.remove(), 300);
  }
}

// Change slogan
function changeSlogan() {
  const sloganElement = document.querySelector('.moral-slogan');
  if (sloganElement) {
    sloganElement.classList.add('moral-fade-out');
    setTimeout(() => {
      sloganElement.textContent = getRandomSlogan();
      sloganElement.classList.remove('moral-fade-out');
    }, 150);
  }
}

// Show popup when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', showPopup);
} else {
  showPopup();
}
