// Global arrays
images = ["img/hero-superman.png", "img/hero-batman.png", "img/hero-wonder-woman.png"];
heroes = ["superman", "batman", "wonderwoman"];

// Global variables
var currentImage = 0;
var computerChoice = "batman";
var userChoice = "Mystery";

// Possible winning outcomes for the user
var userWins = ["supermanwonderwoman", "batmansuperman", "wonderwomanbatman"];

// User makes a choice
function changeHero(whichNum) {
	var img = document.getElementById('player1-hero');
	img.setAttribute('src', images[whichNum]);

	currentImage = whichNum;

	var userChoice = heroes[whichNum];
	
	console.log("User Choice = " + userChoice);


// Computer makes a random choice
var computerChoice = Math.random();

if(computerChoice < 0.34) {
	computerChoice = "superman";
	document.getElementById("player2-hero").src = "img/hero-superman.png";

} else if(computerChoice <= 0.67) {
	computerChoice = "batman";
	document.getElementById("player2-hero").src = "img/hero-batman.png";

} else {
	computerChoice = "wonderwoman";
	document.getElementById("player2-hero").src = "img/hero-wonder-woman.png";
}

console.log("Computer Choice = " + computerChoice);

}


// Compare the two choices to determine a winner
/*function evaluate() {

	var msg = "Computer Wins!";

	if(userChoice == computerChoice) {
		// winner="tie";
		msg = "There's a tie!" // Do something
	} else {

		var outCome = userChoice + computerChoice;
		var msg = "Computer Wins!"

		$.each(userWins, function(index, value) {
			if(outCome == value) {
				// winner = "User";
				msg = "You win!"
		}
	});
		}
	return msg;
}

var outcomeMsg = evaluate();*/
//alert(outcomeMsg);