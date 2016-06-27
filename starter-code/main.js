var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";

var carFour = "king";

if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again!");
}

//document.getElementById('game-board');


var gameBoard = document.getElementById('div');

for (var i = 0; i < gameBoard.length; i++){
	gameBoard[i].className = 'card'; 
}

var createBoard = function(){
	for (var i = 0; i < 4 ; i++){
	createBoard[i].className = 'card';
};