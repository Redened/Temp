//! ........................ MOBILE NAVIGATION MENU

// //? SHOW MENU
// document.getElementById("mNavOpen").addEventListener("click", function () {
//     document.getElementById("mNav").classList.remove("hidden");
// });

// //? HIDE MENU
// document.getElementById("mNavClose").addEventListener("click", function () {
//     document.getElementById("mNav").classList.add("hidden");
// });

//? MAKE SURE MENU IS HIDDEN AS DEFAULT
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mNav").classList.add("hidden");
});

//! ........................ MOBILE NAVIGATION MENU + ANIMATION

const mNavOpen = document.querySelector("#mNavOpen"); 
const mNavClose = document.querySelector("#mNavClose"); 
const mNav = document.querySelector("#mNav"); 

mNavOpen.addEventListener("click", function () {
    mNavClose.classList.remove("hidden");

    if (mNav.classList.contains("visible")) {
        mNav.classList.remove("visible"); 
        setTimeout(() => {
            mNav.classList.add("hidden"); 
        }, 500); 
    } else {
        mNav.classList.remove("hidden");
        setTimeout(() => {
            mNav.classList.add("visible"); 
        }, 10); 
    }
});

mNavClose.addEventListener("click", function () {
    mNavClose.classList.add("hidden");

    if (mNav.classList.contains("visible")) {
        mNav.classList.remove("visible"); 
        setTimeout(() => {
            mNav.classList.add("hidden"); 
        }, 500); 
    } else {
        mNav.classList.remove("hidden");
        setTimeout(() => {
            mNav.classList.add("visible"); 
        }, 10); 
    }
});

//! ........................ MOBILE RETURN TO MARKER

let scrollTimeout;

window.addEventListener("scroll", function () {
    document.querySelector(".m-return-to-marker").classList.add("visible");
    document.querySelector(".m-return-to-marker").classList.remove("fade-out");

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        document.querySelector(".m-return-to-marker").classList.add("fade-out");
    }, 1500);
});
