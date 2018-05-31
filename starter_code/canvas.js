function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
  this.offset = this.canvas.width / 7;
  this.unit = this.canvas.width / 100;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  var letterSpace = this.unit * 2;
  var gapSpace = this.unit;
  for (var i = 0; i < this.secretWord.length; i++) {
    var offset = this.unit * 5;
    var startX = (letterSpace + gapSpace) * i;
    var endX = startX + letterSpace;
    console.log("startX: " + startX + " endX: " + endX + " i: " + i);
    this.ctx.beginPath();
    this.ctx.moveTo(startX, this.canvas.height - 100);
    this.ctx.lineTo(endX, this.canvas.height - 100);
    this.ctx.closePath();
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
