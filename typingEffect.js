
// Typing effect
const typingSpeed = 100; // milliseconds per character
const typingElement = document.getElementById("type");
const textToType = typingElement.textContent;

typingElement.innerText = "";

let currentIndex = 0;

function typeNextCharacter() {
  if (currentIndex < textToType.length) {
    typingElement.textContent += textToType[currentIndex];
    currentIndex++;
    setTimeout(typeNextCharacter, typingSpeed);
  }
}

// Start the typing effect
typeNextCharacter();
