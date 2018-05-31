function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
  this.offset = this.canvas.width / 7;
  this.unit = this.canvas.width / 100;
  this.letterSpaceCoordinates = [];
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

function CoordinatePair(xStart, xEnd, y) {
  this.xStart = xStart;
  this.xEnd = xEnd;
  this.y = y;
}

HangmanCanvas.prototype.drawLines = function() {
  var letterSpace = this.unit * 2;
  var gapSpace = this.unit;
  var y = this.canvas.height - 100;
  for (var i = 0; i < this.secretWord.length; i++) {
    var offset = this.unit * 5;
    var startX = (letterSpace + gapSpace) * i;
    var endX = startX + letterSpace;
    this.letterSpaceCoordinates.push(new CoordinatePair(startX, endX, y));
    this.ctx.beginPath();
    this.ctx.moveTo(startX, y);
    this.ctx.lineTo(endX, y);
    this.ctx.closePath();
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
