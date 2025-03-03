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
