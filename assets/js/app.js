
const text = "Mi Portafolio"

const typedText = document.getElementById("typed-text");

const typingSpeed = 150;
let index = 0;

function typeText() {
    if (index < text.length){
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

window.onload = function() {
    typeText();
};
