'use strict'

const forwardClick = document.getElementById('forward-click');
const backwardClick = document.getElementById('backward-click');

const count = document.getElementById('count');

forwardClick.addEventListener('click', () => {
    let increase = parseInt(count.textContent) + 1;
    count.textContent = increase;
});

backwardClick.addEventListener('click', () => {
    let decrease = parseInt(count.textContent) - 1;
    count.textContent = decrease;
});

