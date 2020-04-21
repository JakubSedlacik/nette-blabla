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
