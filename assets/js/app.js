const text = "Mi Portafolio";
const typedText = document.getElementById("typed-text");
const typingSpeed = 150;
const movArriba = document.querySelector("#arriba");
const nav = document.getElementById("main-nav");
const circleFloat = document.getElementById("circle-float");

let lastScrollTop = 0;
let navVisible = true;
let index = 0;

// Función para escribir el texto
function typeText() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

window.onload = function () {
    typeText();
};


// Evento para desplazarse hacia arriba con el botón "arriba"
movArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('main-nav');
    const menu = document.getElementById('menu');
    const circleFloat = document.querySelector('.circle-float');
    let lastScrollY = window.scrollY;
    let isShrunk = false;

    // Evento para manejar el scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > lastScrollY && !isShrunk) {
            // Al hacer scroll hacia abajo, contrae el menú y muestra el texto "サク"
            nav.classList.add('shrunk');
            nav.classList.remove('expanded');
            isShrunk = true;
        } else if (window.scrollY < lastScrollY && isShrunk) {
            // Al hacer scroll hacia arriba, expande el menú
            nav.classList.remove('shrunk');
            nav.classList.add('expanded');
            isShrunk = false;
        }
        lastScrollY = window.scrollY;
    });
});


window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo - esconder menú
        nav.classList.add("shrunk");
        circleFloat.style.display = "block";
    } else {
        // Scroll hacia arriba - mostrar menú
        nav.classList.remove("shrunk");
        circleFloat.style.display = "none";
    }
    lastScrollTop = scrollTop;
});

