/* =========================================================
   ADITYA MAMIDALA — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 700);

});


/* ================= TYPING EFFECT ================= */

const typingElement = document.getElementById("typingText");

const roles = [

    "Cybersecurity Learner",
    "B.Tech CSE Student",
    "Web Developer",
    "AI Enthusiast",
    "Tech Explorer"

];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

        setTimeout(typeEffect, 80);

    } else {

        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

            setTimeout(typeEffect, 400);

            return;

        }

        setTimeout(typeEffect, 45);

    }

}


typeEffect();


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (mobileMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNav);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-category, .project-card, .certificate-card, .terminal-window, .contact-button"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

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


/* ================= PROJECT CARD TILT ================= */

const cards = document.querySelectorAll(".project-card");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= MOUSE STAR PARALLAX ================= */

const starLayers = document.querySelectorAll(".stars");


document.addEventListener("mousemove", event => {

    if (window.innerWidth < 700) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    starLayers.forEach((layer, index) => {

        const strength =
            (index + 1) * 5;

        layer.style.marginLeft =
            `${x * strength}px`;

        layer.style.marginTop =
            `${y * strength}px`;

    });

});


/* ================= SMOOTH ANCHOR LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= PROJECT LINK EFFECT ================= */

document.querySelectorAll(".project-link").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.letterSpacing = "0.3px";

    });

    link.addEventListener("mouseleave", () => {

        link.style.letterSpacing = "";

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
`
╔══════════════════════════════════════════╗
║        ADITYA MAMIDALA PORTFOLIO         ║
╠══════════════════════════════════════════╣
║  B.Tech CSE Student                      ║
║  Cybersecurity Learner                   ║
║  Web Developer                           ║
║  AI Enthusiast                           ║
╚══════════════════════════════════════════╝

Welcome to my portfolio 🚀
`
);
