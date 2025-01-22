'use strict';

const diceEl = document.querySelector('.dice');
const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');

score0.textContent = '0';
score1.textContent = '0';

diceEl.classList.add('hidden');