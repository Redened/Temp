//! ........................ MOBILE NAVIGATION MENU + ANIMATION

const mNavToggle = document.querySelector("#mNavToggle");
const mNav = document.querySelector("#mNav");
const body = document.querySelector("body");

mNavToggle.addEventListener("click", function () {
    if (mNav.classList.contains("visible")) {
        mNav.classList.remove("visible");
        mNavToggle.classList.remove("transform");

        body.classList.remove("overflow");

        setTimeout(() => {
            mNav.classList.add("hidden");
        }, 500);
    } else {
        mNav.classList.remove("hidden");
        mNavToggle.classList.add("transform");

        body.classList.add("overflow");

        setTimeout(() => {
            mNav.classList.add("visible");
        }, 10);
    }
});

//? MAKE SURE MENU IS HIDDEN AS DEFAULT
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mNav").classList.add("hidden");
});

//! ........................ MOBILE RETURN TO MARKER

let scrollTimeout;

window.addEventListener("scroll", function () {
    document.querySelector(".m-return-to-marker").classList.add("visible");
    document.querySelector(".m-return-to-marker").classList.remove("fade-out");

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        document.querySelector(".m-return-to-marker").classList.add("fade-out");
    }, 1000);
});

//! ........................ PROJECTS IMAGE SLIDER

const sliderContainer = document.querySelector(".overflow-layer");
const slider = document.querySelector(".overflow-layer .grid-wrapper");
const sliderChildren = document.querySelector(".overflow-layer .grid-wrapper > div");

const sliderBack = document.querySelector(".slider-back");
const sliderForward = document.querySelector(".slider-forward");

function updateVisibleElements() {
    const parent = document.querySelector(".overflow-layer");
    const children = document.querySelectorAll(".overflow-layer .grid-wrapper > div");
    const parentRect = parent.getBoundingClientRect();

    children.forEach((child) => {
        const childRect = child.getBoundingClientRect();

        if (childRect.left + 5 >= parentRect.left - 5 && childRect.right - 5 <= parentRect.right + 5) {
            child.classList.add("visible");
        } else {
            child.classList.remove("visible");
        }
    });
}
window.addEventListener("load", updateVisibleElements);
slider.addEventListener("transitionend", updateVisibleElements);

sliderForward.addEventListener("click", () => {
    let nextSlide = document.querySelector(".overflow-layer .grid-wrapper div.visible + div:not(.visible)");
    let targetTranslateDistance = 10 + nextSlide.getBoundingClientRect().width;

    let sliderTranslateValues = getComputedStyle(slider)
        .transform.match(/matrix.*\((.+)\)/)[1]
        .split(", ");
    sliderTranslateXValue = parseFloat(sliderTranslateValues[4]);

    let translateDistance = sliderTranslateXValue + -targetTranslateDistance;

    slider.style.transform = `translateX(${translateDistance}px)`;
});

sliderForward.addEventListener("click", () => {
    let nextSlide = document.querySelector(".overflow-layer .grid-wrapper div.visible + div:not(.visible)");

    if (nextSlide == null) {
        slider.style.transform = "translateX(0px)";
    } else {
        return;
    }
});

sliderBack.addEventListener("click", () => {
    let previousSlide = document.querySelector(".overflow-layer .grid-wrapper div:not(.visible):has(+ div.visible)");
    let targetTranslateDistance = 10 + previousSlide.getBoundingClientRect().width;

    let sliderTranslateValues = getComputedStyle(slider)
        .transform.match(/matrix.*\((.+)\)/)[1]
        .split(", ");

    sliderTranslateXValue = parseFloat(sliderTranslateValues[4]);

    let translateDistance = sliderTranslateXValue - -targetTranslateDistance;

    slider.style.transform = `translateX(${translateDistance}px)`;
});

sliderForward.addEventListener("click", () => {
    sliderForward.classList.add("transitioning");

    slider.addEventListener("transitionend", () => {
        sliderForward.classList.remove("transitioning");
    });
});

sliderBack.addEventListener("click", () => {
    sliderBack.classList.add("transitioning");

    slider.addEventListener("transitionend", () => {
        sliderBack.classList.remove("transitioning");
    });
});
