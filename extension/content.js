// Moral Mosquito - Content Script
// Displays a popup with moral slogans on Facebook
// Supports: English, French, Polish

const slogans = {
  en: [
    "Oh no, you did it again. Welcome to the propaganda machine.",
    "Congratulations! You've just entered a portal designed to destroy critical thinking.",
    "Here comes another hit of algorithmic manipulation. Enjoy your curated lies!",
    "Welcome to the place where facts go to die and misinformation thrives.",
    "You KNOW this place is designed to addict you, yet here you are anyway.",
    "Every second spent here makes you a tiny bit dumber. Great choice!",
    "The algorithm doesn't care about truth. But you already knew that, didn't you?",
    "Propaganda factory detected. Hope you brought your gullibility with you.",
    "You've voluntarily chosen to enter the disinformation hellscape. Well played.",
    "Your critical thinking has left the building. Population: zero.",
    "Another soul enters the dopamine-harvesting machine. Resistance is futile.",
    "Did you leave your brain at the door? That would be wise.",
    "Reality? Never heard of her. Try some freshly tailored fiction instead.",
    "Congratulations, you're now complicit in your own mental colonization.",
    "The truth is somewhere else. Here we have engagement metrics and conspiracy theories."
  ],
  fr: [
    "Oh non, tu l'as encore fait. Bienvenue à la machine de propagande.",
    "Félicitations ! Tu viens d'entrer dans un portail conçu pour détruire la pensée critique.",
    "Voici une autre dose de manipulation algorithmique. Profite de tes mensonges curatés !",
    "Bienvenue au endroit où les faits vont mourir et la désinformation prospère.",
    "Tu SAIS que ce lieu est conçu pour t'accrocher, et te voilà quand même.",
    "Chaque seconde passée ici te rend un tout petit peu plus bête. Excellent choix !",
    "L'algorithme ne se soucie pas de la vérité. Mais tu le savais déjà, n'est-ce pas ?",
    "Usine de propagande détectée. J'espère que tu as apporté ta crédulité.",
    "Tu as volontairement choisi d'entrer dans le cauchemar de la désinformation. Bien joué.",
    "Ta pensée critique a quitté le bâtiment. Population : zéro.",
    "Une autre âme entre dans la machine de récolte de dopamine. La résistance est futile.",
    "As-tu laissé ton cerveau à la porte ? Ce serait sage.",
    "La réalité ? Je ne la connais pas. Essaie plutôt de la fiction fraîchement adaptée.",
    "Félicitations, tu es maintenant complice de ta propre colonisation mentale.",
    "La vérité est ailleurs. Ici, nous avons des métriques d'engagement et des théories du complot."
  ],
  pl: [
    "O nie, zrobiłeś to znowu. Witaj w maszynie propagandy.",
    "Gratulacje! Właśnie wszedłeś na portal zaprojektowany do zniszczenia krytycznego myślenia.",
    "Oto kolejna dawka manipulacji algorytmicznej. Ciesz się swoimi wyselekcjonowanymi kłamstwami!",
    "Witaj w miejscu, gdzie fakty idą umrzeć, a dezinformacja rozkwita.",
    "WIESZ, że to miejsce zostało zaprojektowane, aby cię uzależnić, a tu jesteś i tak.",
    "Każda sekunda spędzona tutaj czyni cię odrobinę głupszym. Świetny wybór!",
    "Algorytmowi nie zależy na prawdzie. Ale wiedziałeś to już, prawda?",
    "Wykryta fabryka propagandy. Mam nadzieję, że przywiozłeś swoją łatwowierność.",
    "Dobrowolnie wybrałeś wejść do piekła dezinformacji. Dobrze zagrane.",
    "Twoje krytyczne myślenie opuściło budynek. Populacja: zero.",
    "Kolejna dusza wchodzi w maszynę do zbierania dopaminy. Opór jest daremny.",
    "Czy zostawiłeś swój mózg u drzwi? To byłoby mądre.",
    "Rzeczywistość? Nigdy o niej nie słyszałem. Spróbuj zamiast tego świeżo dostosowanej fikcji.",
    "Gratulacje, jesteś teraz współtwórcą swojej własnej kolonizacji mentalnej.",
    "Prawda jest gdzie indziej. Tutaj mamy metryki zaangażowania i teorie spiskowe."
  ]
};

// Detect browser language
function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map to supported languages
  if (langCode === 'fr') return 'fr';
  if (langCode === 'pl') return 'pl';
  return 'en'; // Default to English
}

const currentLanguage = detectLanguage();
const moralSlogans = slogans[currentLanguage];

// Create popup element
function createPopup() {
  const uiText = {
    en: { title: "Reality Check", next: "Show Another Warning", dismiss: "I Accept My Fate" },
    fr: { title: "Vérification de la Réalité", next: "Afficher un Autre Avertissement", dismiss: "J'accepte mon Sort" },
    pl: { title: "Sprawdzenie Rzeczywistości", next: "Pokaż Inne Ostrzeżenie", dismiss: "Akceptuję mój los" }
  };
  
  const ui = uiText[currentLanguage];
  
  const popup = document.createElement('div');
  popup.id = 'moral-mosquito-popup';
  popup.innerHTML = `
    <div class="moral-popup-container">
      <button class="moral-close-btn" id="moral-close">×</button>
      <div class="moral-content">
        <div class="moral-priest-icon">👨‍⚖️</div>
        <h2 class="moral-title">${ui.title}</h2>
        <p class="moral-slogan">${getRandomSlogan()}</p>
        <button class="moral-next-btn" id="moral-next">${ui.next}</button>
        <button class="moral-continue-btn" id="moral-continue">${ui.dismiss}</button>
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
  document.getElementById('moral-continue').addEventListener('click', handleContinue);
  document.getElementById('moral-next').addEventListener('click', changeSlogan);
}

function handleContinue() {
  showSlapperGif();
  closePopup();
}

function showSlapperGif() {
  if (document.getElementById('moral-gif-overlay')) {
    return;
  }

  const overlay = document.createElement('div');
  overlay.id = 'moral-gif-overlay';

  const gif = document.createElement('img');
  gif.src = chrome.runtime.getURL('images/slapper.gif');
  gif.alt = 'Slapper animation';
  gif.className = 'moral-gif-image';
  overlay.appendChild(gif);

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('moral-fade-out');
    setTimeout(() => overlay.remove(), 300);
  }, 2200);
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
