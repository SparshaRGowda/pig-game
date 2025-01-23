'use strict';

const diceEl = document.querySelector('.dice');
const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//initialize
let playing = true;
score0.textContent = '0';
score1.textContent = '0';
diceEl.classList.add('hidden');

let activePlayer = 0;
let currentScore = 0;
const scores = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//roll dice
rollBtn.addEventListener('click', function () {
  if (playing) {
    const random = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;

    if (random === 1) {
      switchPlayer();
    } else {
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getElementById(`name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } won`;
    } else switchPlayer();
  }
});
