//Global variables
var items = [item0, item1, item2, item3, item4];
var currentItem = items[0];
var nextItem = 0;
var score = 0;

var feedbackCorrect = "<span aria-hidden=\"true\" data-icon=\"&#e603;\" class=\"icon-checkmark-circle\" title=\"Correct\"></span>";
var feedbackIncorrect = "<span aria-hidden=\"true\" data-icon=\"&#e602;\" class=\"icon-cancel-circle\" title=\"Incorrect\"></span>";

var resultRange1 = "<span aria-hidden=\"true\" data-icon=\"&#e601;\" class=\"icon-confused\" alt=\"Level 1\"></span>";
var resultRange2 = "<span aria-hidden=\"true\" data-icon=\"&#e607;\" class=\"icon-neutral\" alt=\"Level 2\"></span>";
var resultRange3 = "<span aria-hidden=\"true\" data-icon=\"&#e60a;\" class=\"icon-smiley\" alt=\"Level 3\"></span>";
var resultRange4 = "<span aria-hidden=\"true\" data-icon=\"&#e609;\" class=\"icon-happy\" alt=\"Level 4\"></span>";

var issues = [];


// $('#intro button').click(function(){
// 	startGame();
// })

//Start the game
function startGame(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("card-item").style.display = "block";
	displayItem();
}


// Display the item content
function displayItem() {
	var item = document.getElementById("item");
	item.innerHTML = currentItem.stem;
}


// Display the next item
function displayNextItem() {	
	nextItem++;
	currentItem = items[nextItem];
	
	// Clear the form input field
	document.getElementById("fixResponseText").reset();

	document.getElementById("card-feedback").style.display = "none";
	document.getElementById("card-item").style.display = "block";

	if (nextItem === items.length) {
		currentItem = items[0];
		document.getElementById("card-item").style.display = "none";
		document.getElementById("results").style.display = "block";

		displayResults();

		} else {
			displayItem();
	}
}


// Display feedback for correct response
function displayFeedbackCorrect() {
	var feedbackEvaluation = document.getElementById("feedback-evaluation");
	feedbackEvaluation.innerHTML = feedbackCorrect;

	var feedback = document.getElementById("feedback-message");
	feedback.innerHTML = currentItem.feedbackCorrectMessage;

	var feedbackImage = document.getElementById("feedback-image");
	feedbackImage.setAttribute('src', currentItem.feedbackImage);
}


// Display feedback for incorrect response
function displayFeedbackIncorrect() {
	var feedbackEvaluation = document.getElementById("feedback-evaluation");
	feedbackEvaluation.innerHTML = feedbackIncorrect;

	var feedback = document.getElementById("feedback-message");
	feedback.innerHTML = currentItem.feedbackIncorrectMessage;

	var feedbackImage = document.getElementById("feedback-image");
	feedbackImage.setAttribute('src', currentItem.feedbackImage);

	// Push item issue into array
	issues.push(currentItem.issue);
}


// Evaluate no mistake / yes mistake response
function evaluateResponse(response) {
	if((currentItem.fix == true) && (response == false) && (currentItem.answer == false)) {
		var prompt = document.getElementById("prompt");
		prompt.innerHTML = currentItem.prompt;

		var hint = document.getElementById("hint");
		hint.innerHTML = currentItem.hint;

		document.getElementById("card-item").style.display = "none";
		document.getElementById("card-fix").style.display = "block";

		// Invoke evaluateFixResponse with enter key on input
		document.getElementById("user-fix-response").onkeydown = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
   			evaluateFixResponse();
   			}
		}

	} else {

		document.getElementById("card-item").style.display = "none";
		document.getElementById("card-feedback").style.display = "block";

		if(response == currentItem.answer) {
			displayFeedbackCorrect();
			tallyScore();
		} else {
			displayFeedbackIncorrect();
		}
	}
}


// Evaluate fix item response
function evaluateFixResponse() {
	var userFixResponse = document.getElementById("user-fix-response").value;

	document.getElementById("card-fix").style.display = "none";
	document.getElementById("card-feedback").style.display = "block";

	if(userFixResponse == currentItem.correct) {
		displayFeedbackCorrect();
		tallyScore();
	} else {
		displayFeedbackIncorrect();
	}
}


// Tally score
function tallyScore() {
	score = score + 20;
}


// Display results
function displayResults() {
	document.getElementById("score").innerHTML = score;

	// Display score range icon
	var resultEvaluation = document.getElementById("result-evaluation");

	if(score < 49) {
		resultEvaluation.innerHTML = resultRange1;
	} else if(score <= 69) {
		resultEvaluation.innerHTML = resultRange2;
	} else if(score <= 89) {
		resultEvaluation.innerHTML = resultRange3;
	} else {
		resultEvaluation.innerHTML = resultRange4;
	}

	displayIssues();
}


// Display issues with incorrect responses
function displayIssues() {
	var issueList = document.getElementById("issue-list");
	var issueListTitle = document.getElementById("issue-list-title");

	if(issues.length != 0) {
		issueList.innerHTML = "You may want to review:";

		for(var i = 0; i < issues.length; i++) {
			issueList.innerHTML += ("<p>" + issues[i] + "</p>");
		}
	}	
}
	

// Reset the game
function resetGame() {
	currentItem = items[0];
	nextItem = 0;
	score = 0;
	issues = [];

	document.getElementById("results").style.display = "none";
	document.getElementById("card-item").style.display = "block";

	displayItem();
}