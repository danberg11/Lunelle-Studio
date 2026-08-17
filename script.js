// ==========================================
// ELEMENTOS
// ==========================================

const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const menuButton = document.querySelector("#menuButton");

const heroContent =
    document.querySelector(".hero-content");

const heroImage =
    document.querySelector(".hero-image");

const cursor =
    document.querySelector(".cursor");

const year =
    document.querySelector("#year");


// ==========================================
// ANO AUTOMÁTICO
// ==========================================

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// ==========================================
// HEADER NO SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==========================================
// MENU MOBILE
// ==========================================

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });


    document
        .querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

            });

        });

}


// ==========================================
// ANIMAÇÃO DE ELEMENTOS NO SCROLL
// ==========================================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal, .reveal-left")
    .forEach(element => {

        observer.observe(element);

    });


// ==========================================
// PARALLAX DO HERO
// ==========================================

window.addEventListener("scroll", () => {

    if (!heroContent || !heroImage) return;

    const scroll =
        window.scrollY;


    if (scroll < window.innerHeight) {

        const progress =
            scroll / window.innerHeight;


        // Texto sobe lentamente

        heroContent.style.transform =
            `translateY(${scroll * 0.18}px)`;


        // Texto desaparece

        heroContent.style.opacity =
            Math.max(
                0,
                1 - progress * 1.25
            );


        // Imagem se movimenta

        heroImage.style.transform =
            `translateY(${scroll * 0.08}px) scale(1.02)`;

    }

});


// ==========================================
// CURSOR PERSONALIZADO
// ==========================================

if (cursor) {

    window.addEventListener("mousemove", event => {

        cursor.style.left =
            `${event.clientX}px`;

        cursor.style.top =
            `${event.clientY}px`;

    });


    // ==========================================
    // CURSOR MAIOR EM ELEMENTOS CLICÁVEIS
    // ==========================================

    document
        .querySelectorAll("a, button")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    document.body
                        .classList
                        .add("hovering");

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body
                        .classList
                        .remove("hovering");

                }
            );

        });

}


// ==========================================
// FAQ
// ==========================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const button =
        item.querySelector("button");

    const answer =
        item.querySelector(".faq-answer");


    if (!button || !answer) return;


    button.addEventListener("click", () => {

        const alreadyOpen =
            item.classList.contains("active");


        // Fecha todos

        faqItems.forEach(other => {

            other.classList.remove("active");

            const otherAnswer =
                other.querySelector(".faq-answer");

            if (otherAnswer) {

                otherAnswer.style.maxHeight = null;

            }

        });


        // Abre o clicado

        if (!alreadyOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


// ==========================================
// SCROLL SUAVE
// ==========================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", event => {

            const target =
                document.querySelector(
                    anchor.getAttribute("href")
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });