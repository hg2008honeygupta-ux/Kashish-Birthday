// Cursor following effect

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    if (!cursor) return;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Birthday greeting typing effect
const greetingText =
    "Here's to beautiful memories, endless laughter and an amazing year ahead! So glad to have a friend like you. ❤️";

const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 55);
    }
}

// Floating decorations
const floatingElements = ['💖', '✨', '🌸', '🎀', '💕', '🦋'];

function createFloating() {
    const element = document.createElement('div');

    element.className = 'floating';
    element.textContent =
        floatingElements[Math.floor(Math.random() * floatingElements.length)];

    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';

    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Page animations
window.addEventListener('load', () => {
    gsap.to('h1', {
        opacity: 1,
        duration: 1,
        y: 20,
        ease: "bounce.out"
    });

    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        delay: 0.5,
        ease: "back.out"
    });

    typeGreeting();

    setInterval(createFloating, 1000);
});

// Button hover and page transition
const button = document.querySelector('.cta-button');

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.3
    });
});

button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3
    });
});

button.addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            window.location.href = 'cause.html';
        }
    });
});
