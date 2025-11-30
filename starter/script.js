'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const display = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    display('no number! ');
  }

  // when player wins
  else if (guess === secretNumber) {
    display('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      display(
        guess > secretNumber
          ? 'Nah jit! ur number be tripping!'
          : 'Nah jit! ur number aint close bro!'
      );
      score--;
    } else {
      display('na boy! u done fumbled haaard go and think about your life');
      // 'na boy! u done fumbled haaard go and think about your life';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.score').textContent = score;
  }

  //  when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'Nah jit! ur number be tripping!';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'na boy! u done fumbled haaard go and think about your life';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   document.querySelector('.score').textContent = score;
  // }

  // when the number is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Nah jit! ur number aint close bro!';
  //       score--;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'na boy! u done fumbled haaard go and think about your life';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  display('start guessing');
});
