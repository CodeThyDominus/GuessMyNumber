'use strict';

let score = 20;
let highscore = 0;

let numGuessed = generateRandomNumber();

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (inputStats) {
  document.querySelector('.input-stats').textContent = inputStats;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore-stats').textContent = highscore;
};

document.querySelector('.btn-check').addEventListener('click', function () {
  const numInput = Number(document.querySelector('.input-num').value);

  //No Input
  if (!numInput || numInput <= 0 || numInput > 20) {
    displayMessage('Invalid Number! Input Number from 1 to 20!');
  } else if (numInput === numGuessed) {
    //player wins
    displayMessage('Correct Number!🎉 ');
    document.querySelector('.num-guessed').textContent = numGuessed;
    console.log(numGuessed);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.num-guessed').style.width = '20rem';

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (numGuessed !== numInput) {
    // wrong guess
    if (score > 1) {
      displayMessage(numInput > numGuessed ? 'High' : 'Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost!!!!');
      displayScore(0);
    }
  }
});

document.querySelector('.btn-reset').addEventListener('click', function () {
  displayMessage('Start Guessing....');

  score = 20;
  displayScore(20);

  document.querySelector('.input-num').value = '';

  numGuessed = generateRandomNumber();
  console.log(numGuessed);
  document.querySelector('.num-guessed').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.num-guessed').style.width = '8vw';
});
