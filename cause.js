
const reasons = [
    {
        text: "Those funny faces you make and your unlimited bakloli. 😭 You can turn even the most normal moment into a comedy show.",
        emoji: "😂",
        gif: "gif1.gif"
    },
    {
        text: "Our favourite hobby: making comments and jokes about people. Some of our inside jokes deserve their own comedy series. 😭",
        emoji: "👀",
        gif: "gif2.gif"
    },
    {
        text: "The way you look after everyone. You genuinely care about your friends and would go to any extent for them. That's a rare quality. ❤️",
        emoji: "🫶🏻",
        gif: "gif1.gif"
    },
    {
        text: "The way you comfort people when they're low. Sometimes all someone needs is a friend who listens, understands and makes things feel a little better. And you're that friend. 🤍",
        emoji: "🥹",
        gif: "gif2.gif"
    },
    {
        text: "I'll never forget you coming to meet me at the hospital with roses. And those aunties staring at us and teasing me afterwards. BRO, THAT WAS SOMETHING ELSE. 😭🌹",
        emoji: "🌹",
        gif: "gif1.gif"
    },
    {
        text: "You have this way of making ordinary moments memorable. A little bakloli, a little gossip and suddenly the whole day becomes fun.",
        emoji: "✨",
        gif: "gif2.gif"
    },
    {
        text: "Your friendship reminds me that good friends aren't just around for the fun moments. They show up when things get difficult too. And I'll always appreciate that.",
        emoji: "💗",
        gif: "gif1.gif"
    },
    {
        text: "And lastly, simply because you're Kashish. A little dramatic, full of bakloli, caring towards everyone and genuinely a wonderful friend. Never change! ❤️",
        emoji: "🎀",
        gif: "gif2.gif"
    }
];

let currentReasonIndex = 0;
let isTransitioning = false;

const reasonsContainer = document.getElementById("reasons-container");
const shuffleButton = document.querySelector(".shuffle-button");
const reasonCounter = document.querySelector(".reason-counter");
const cursor = document.querySelector(".custom-cursor");

function createReasonCard(reason) {
    const card = document.createElement("div");
    card.className = "reason-card";

    const text = document.createElement("div");
    text.className = "reason-text";
    text.textContent = `${reason.emoji} ${reason.text}`;

    const gifOverlay = document.createElement("div");
    gifOverlay.className = "gif-overlay";

    const gif = document.createElement("img");
    gif.src = reason.gif;
    gif.alt = "Cute animation";

    gifOverlay.appendChild(gif);
    card.appendChild(text);
    card.appendChild(gifOverlay);

    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "back.out"
    });

    return card;
}

function displayNewReason() {
    if (isTransitioning) return;

    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);

        reasonsContainer.appendChild(card);

        reasonCounter.textContent =
            `Little thing ${currentReasonIndex + 1} of ${reasons.length}`;

        currentReasonIndex++;

        createFloatingElement();

        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent =
                        "A Little Glimpse of You →";

                    shuffleButton.classList.add("story-mode");
                    reasonCounter.textContent =
                        "That's a little reminder of how special you are. ❤️";

                    gsap.to(".teddy-hug", {
                        scale: 1,
                        duration: 0.8,
                        ease: "elastic.out"
                    });

                    gsap.to(".ending-text", {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.3
                    });

                    shuffleButton.onclick = () => {
                        gsap.to("body", {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = "last.html";
                            }
                        });
                    };
                }
            });
        }

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}

shuffleButton.addEventListener("click", () => {
    if (currentReasonIndex >= reasons.length) return;

    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    displayNewReason();
});

function createFloatingElement() {
    const elements = ["🌸", "✨", "💖", "🦋", "⭐", "🎀"];

    const element = document.createElement("div");
    element.className = "floating";
    element.textContent =
        elements[Math.floor(Math.random() * elements.length)];

    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.top = Math.random() * window.innerHeight + "px";
    element.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

document.addEventListener("mousemove", (e) => {
    if (!cursor) return;

    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

setInterval(createFloatingElement, 2000);
