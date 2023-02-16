'use strict';

/*
console.log(document.querySelector('.message').textContent);
//selects text content of .meassage class

document.querySelector('.message').textContent = '🎊 Correct Number!';
//change the content of the selected class
console.log(document.querySelector('.message').textContent);
//log the new content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//get/manipulate value of input element
//alt+down to move line down in VS #IMP
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//handling click events

// const fxn = function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   }
// };
// document.querySelector('.check').addEventListener('click', fxn);

//implement game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1; //generate the secretNo state variable
let score = 5; //get the score =20 state variable
let highscore = 0; //set to 0

//check button working
const checkfxn = function () {
  //what to do when button clicked
  const guess = document.querySelector('.guess').value; //store the guessed input and compare below
  if (!guess) {
    //if no input
    document.querySelector('.message').textContent = `👎 No number`;
  } else if (guess != secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = `⬆️ Too high`)
        : (document.querySelector('.message').textContent = `⬇️ Too low`);
      score--; //reduce score on wrong guess
      document.querySelector('.score').textContent = score;
    } else {
      //you lost
      document.querySelector('.message').textContent = `🤓 You lost bozo`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  } else {
    //you won
    document.querySelector('.message').textContent = `🎊Correct guess!`;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score; //set highscore on right guess
      highscore = score;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
};
document.querySelector('.check').addEventListener('click', checkfxn); //execution on button click

//again button working
const againfxn = function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};
document.querySelector('.again').addEventListener('click', againfxn);

//making use of ENTER KEY for check button
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkfxn();
  }
});
