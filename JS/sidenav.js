let hamburgerButton = document.querySelector('.hamburger');
let sideNav = document.querySelector('.side-nav');
let closeButton = document.querySelector('.close');
let navText = document.querySelector('.side-nav-bar');

hamburgerButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
window.addEventListener('resize', closeNav);


function openNav(){
    sideNav.style.width = "60vw";
    sideNav.style.transition = "1s";
}

function closeNav(){
    if (sideNav.style.width != "0px"){
    sideNav.style.width = "0px";
    sideNav.style.transition = "1s";
    }
}