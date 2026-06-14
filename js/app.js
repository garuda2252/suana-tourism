// ==========================
// MODAL
// ==========================

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        closeModal();

    });

}

window.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

function revealElements() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ==========================
// HERO VIDEO PARALLAX
// ==========================

window.addEventListener("scroll", () => {

    const heroVideo =
        document.querySelector(".hero video");

    if (heroVideo) {

        const scrollY = window.scrollY;

        heroVideo.style.transform =
            `translateY(${scrollY * 0.2}px) scale(1.1)`;

    }

});