let condition1 = false

const aside_call = function() {
    let getaside_menu1 = document.querySelector(".aside_menu1");
    let getmenu1ul = document.querySelector(".aside_menu1 ul");
    let getmenu1subhdis = document.querySelector(".aside_menu1 .subhdis");
    let getmenu1links = document.querySelectorAll(".aside_menu1 a");

if (condition1 === false) {
    getaside_menu1.style.width = "150px";
    getaside_menu1.style.height = "500px";
    getmenu1ul.style.visibility = "visible";
    getmenu1subhdis.style.visibility = "visible";


    let menulenght = getmenu1links.length;

    for (let i = 0; i < menulenght; i++) {
         getmenu1links[i].style.opacity = 1;
    }

    condition1 = true;
 } 
else if (condition1 === true) {
    getaside_menu1.style.width = "10px";
    getaside_menu1.style.height = "300px";
    getmenu1ul.style.visibility = "hidden";
    getmenu1subhdis.style.visibility = "hidden";

    let menulenght = getmenu1links.length;

    for (let i = 0; i < menulenght; i++) {
         getmenu1links[i].style.opacity = 0;
   }

   condition1 = false;
 }
}
// let urlPath = document.querySelector('active')
const hadleLink = () => {
    const navItems = document.getElementsByClassName('sub_menu');
    let navLength = navItems.length
    let currentUrl = window.location.pathname;
    for (let i = 0; i < navLength; i++) {
        navHref = navItems[i].getAttribute('href')
        if (`/galvanize-web/html/${navHref}` === currentUrl) {
            navItems[i].classList.add('active');
        break;
        }
    }
}
document.addEventListener('DOMContentLoaded', hadleLink())

// close and open functionally
let closes = document.querySelector('.close');
let opened = document.querySelector('.open');

const close = () => {
    let closeBar = document.querySelector('.menu');
    closeBar.style.left= '-180px'
}

const open = () => {
    let closeBar = document.querySelector('.menu');
    closeBar.style.left= '0px'
}
opened.addEventListener('click', open);
closes.addEventListener('click', close);


