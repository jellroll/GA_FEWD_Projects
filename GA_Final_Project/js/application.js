//Global variables
var items = [item0, item1, item2, item3, item4];
var currentItem = items[0];
var nextItem = 0;
var userPoints = 0;

var feedbackCorrect = "<span aria-hidden=\"true\" data-icon=\"&#e603;\" class=\"icon-checkmark-circle\" title=\"Correct\"></span>";
var feedbackIncorrect = "<span aria-hidden=\"true\" data-icon=\"&#e602;\" class=\"icon-cancel-circle\" title=\"Incorrect\"></span>";


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

	if(nextItem === items.length) {
		document.getElementById("card-item").style.display = "none";
		document.getElementById("card-feedback").style.display = "none";
		document.getElementById("report").style.display = "block";
		} else {
			displayItem();
	}

	console.log(currentItem);
	console.log(items.indexOf(currentItem));

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

		document.getElementById("userFixResponse").onkeydown = function(event) {
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
		} else {
			displayFeedbackIncorrect();
		}
	}
}


// Evaluate fix item response
function evaluateFixResponse() {
	var userFixResponse = document.getElementById("userFixResponse").value;

	document.getElementById("card-fix").style.display = "none";
	document.getElementById("card-feedback").style.display = "block";

	if(userFixResponse == currentItem.correct) {
		displayFeedbackCorrect();
	} else {
		displayFeedbackIncorrect();
	}
}


// Tally score
function tallyScore() {

}


// Display results
function displayResults() {

}


// Reset the game
function resetGame() {
	currentItem = items[0];

	document.getElementById("report").style.display = "none";
	document.getElementById("card-item").style.display = "block";

	displayItem();
}