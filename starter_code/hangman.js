var hangman;

function Hangman() {
  this.words = ["jasmine", "maxence", "ironhack"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return 65 <= keyCode && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  // var char = String.fromCharCode(key);
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(index) {
  this.guessedLetter += this.secretWord[index].toUpperCase();
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function() {
  return this.guessedLetter.length === this.secretWord.length;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
