
const phrases = ["Web Developer", "Database Administrator", "Data Analyst", "Freelancer"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const betweenPhraseDelay = 2000; // 2 seconds delay between phrases
const element = document.getElementById('serviceDisplay');

function type() {
  const current = phrases[currentPhrase];
  let displayText;

  if (!isDeleting) {
    displayText = current.substring(0, currentLetter++);
    if (currentLetter === current.length + 1) {
      isDeleting = true;
      setTimeout(type, betweenPhraseDelay); // Pause at the end of a phrase
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    displayText = current.substring(0, currentLetter--);
    if (currentLetter === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length; // Loop back to first phrase
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }

  element.textContent = displayText;
}

// Start the typing effect
type();