/* TYPING ANIMATION */

const typingElement = document.querySelector(".typing-text");

const words = [
    "Software Developer.",
    "AI/ML Enthusiast.",
    "Technology Explorer.",
    "Problem Solver."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 45 : 95;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuBtn.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});


/* HORIZONTAL TIMELINE SWITCH */

const tabs = document.querySelectorAll(".timeline-tab");
const panels = document.querySelectorAll(".timeline-panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.target;

        tabs.forEach(item => {
            item.classList.remove("active");
        });

        panels.forEach(panel => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        const selectedPanel = document.getElementById(target);

        selectedPanel.classList.add("active");

        // Display timeline cards immediately
        selectedPanel.querySelectorAll(".reveal").forEach(card => {
            card.classList.add("show");
        });

    });

});


/* SCROLL REVEAL */

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
});


/* ACTIVE NAVIGATION */

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* BACK TO TOP */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 450) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* FOOTER YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* SUBTLE MOUSE EFFECT ON HERO CARD */

const heroCard = document.querySelector(".hero-image-card");

if (window.matchMedia("(pointer: fine)").matches) {

    heroCard.addEventListener("mousemove", (event) => {

        const rect = heroCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        heroCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    heroCard.addEventListener("mouseleave", () => {
        heroCard.style.transform = "rotate(4deg)";
    });

}