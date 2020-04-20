import lozad from 'lozad';

'use strict';

setInterval(function () {
    changeText();
} , 1700);

let textId = 0;
let text = ' ';
const changingText = document.querySelector('#changer');

function changeText() {
    if (textId === 3) {
        textId = 0;
    }

    textId ++;

    if (textId === 1) {
        text = 'Savec';
    } else if (textId === 2) {
        text = 'Plešoun';
    } else if (textId === 3) {
        text = 'Kočka';
    }

    changingText.innerHTML = text;
}

const navMain2 = document.querySelector('#navMain-2');
const btnTogNav = document.querySelector('#btnTogNav');

btnTogNav.addEventListener('click', toggleNavBar);

function toggleNavBar() {
    if (btnTogNav.value === '0') {
        navMain2.style.display = 'flex';
        btnTogNav.value = '1';
    } else if (btnTogNav.value === '1'){
        navMain2.style.display = 'none';
        btnTogNav.value = '0';
    }
}

const btnTogLink0 = document.querySelector('#btnTogLink0');
const dArrow1 = document.querySelector('#dArrow-1');
const togItem1 = document.querySelector('#togItem1');
const togItem1C = document.querySelector('#togItem1C');
const togItem1D = document.querySelector('#togItem1D');

btnTogLink0.addEventListener('click', toggleNavLink1);

function toggleNavLink1() {
    if (btnTogLink0.value === '0') {
        dArrow1.style.display = 'block';
        togItem1.style.display = 'block';
        togItem1C.style.display = 'block';
        togItem1D.style.display = 'block';
        btnTogLink0.value = '1';
    } else if (btnTogLink0.value === '1') {
        dArrow1.style.display = 'none';
        togItem1.style.display = 'none';
        togItem1C.style.display = 'none';
        togItem1D.style.display = 'none';
        btnTogLink0.value = '0';
        btnTogLink2.value = '0';
        dArrow2.style.display = 'none';
        togItem1A.style.display = 'none';
        togItem1B.style.display = 'none';
    }
}

const btnTogLink2 = document.querySelector('#btnTogLink1');
const dArrow2 = document.querySelector('#dArrow-2');
const togItem1A = document.querySelector('#togItem1A');
const togItem1B = document.querySelector('#togItem1B');

btnTogLink2.addEventListener('click', toggleNavLink2);

function toggleNavLink2() {                  
    if (btnTogLink2.value === '0') {
        dArrow2.style.display = 'block';
        togItem1A.style.display = 'block';
        togItem1B.style.display = 'block';
        btnTogLink2.value = '1';
    } else if (btnTogLink2.value === '1') {
        dArrow2.style.display = 'none';
        togItem1A.style.display = 'none';
        togItem1B.style.display = 'none';
        btnTogLink2.value = '0';
    }
}

const a = window.matchMedia('(min-width: 901px)');

function hideNavBar(a) {
    if (a.matches) {
        navMain2.style.display = 'flex';
        btnTogNav.value = '0';
    } else {
        navMain2.style.display = 'none';
    }
}

hideNavBar(a);
a.addListener(hideNavBar);

const observer = lozad('.lozad', {
    rootMargin: '400px 0px'
});
observer.observe();
