//Global variables
var items = [item0, item1, item2, item3, item4];
var currentItem = items[0];

var feedbackCorrect = "<span aria-hidden=\"true\" data-icon=\"&#e603;\" class=\"icon-checkmark-circle\" title=\"Correct\"></span>";
var feedbackIncorrect = "<span aria-hidden=\"true\" data-icon=\"&#e602;\" class=\"icon-cancel-circle\" title=\"Incorrect\"></span>";


//Start the game
function startGame(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("card-item").style.display = "block";

	displayItem();
}

// Display the item
function displayItem() {
	var item = document.getElementById("item");
	item.innerHTML = currentItem.stem;
}

// Evaluate response
function evaluateResponse(response) {
	if(currentItem.fix == true) {
		var prompt = document.getElementById("prompt");
		prompt.innerHTML = currentItem.prompt;

		var hint = document.getElementById("hint");
		hint.innerHTML = currentItem.hint;

		document.getElementById("card-item").style.display = "none";
		document.getElementById("card-fix").style.display = "block";

	} else {

		document.getElementById("card-item").style.display = "none";
		document.getElementById("card-feedback").style.display = "block";

		if(response == currentItem.answer) {
			var feedbackEvaluation = document.getElementById("feedback-evaluation");
			feedbackEvaluation.innerHTML = feedbackCorrect;

			var feedback = document.getElementById("feedback-message");
			feedback.innerHTML = currentItem.feedbackCorrectMessage;

			var feedbackImage = document.getElementById("feedback-image");
			feedbackImage.setAttribute('src', currentItem.feedbackImage);

		} else {
			var feedbackEvaluation = document.getElementById("feedback-evaluation");
			feedbackEvaluation.innerHTML = feedbackIncorrect;

			var feedback = document.getElementById("feedback-message");
			feedback.innerHTML = currentItem.feedbackIncorrectMessage;

			var feedbackImage = document.getElementById("feedback-image");
			feedbackImage.setAttribute('src', currentItem.feedbackImage);
		}
		console.log(currentItem);
	}
}

// Evaluate
function evaluateFixResponse() {
	var userFixResponse = document.getElementById("userFixResponse").value;

	document.getElementById("card-fix").style.display = "none";
	document.getElementById("card-feedback").style.display = "block";

	if(userFixResponse == currentItem.correct) {
		var feedbackEvaluation = document.getElementById("feedback-evaluation");
		feedbackEvaluation.innerHTML = feedbackCorrect;

		var feedback = document.getElementById("feedback-message");
		feedback.innerHTML = currentItem.feedbackCorrectMessage;

		var feedbackImage = document.getElementById("feedback-image");
		feedbackImage.setAttribute('src', currentItem.feedbackImage);

	} else {
		var feedbackEvaluation = document.getElementById("feedback-evaluation");
		feedbackEvaluation.innerHTML = feedbackIncorrect;

		var feedback = document.getElementById("feedback-message");
		feedback.innerHTML = currentItem.feedbackIncorrectMessage;

		var feedbackImage = document.getElementById("feedback-image");
		feedbackImage.setAttribute('src', currentItem.feedbackImage);
	}


		/*document.getElementById("userFixResponse").submit();
	document.getElementById("userFixResponse").addEventListener("keypress", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	});*/

	/*$("#fix-response").submit(function(event) {
		alert("hello");
		event.preventDefault();
		console.log(userResponse);
	});*/
}

/*function nextItem() {
	for (var i = 0; i < items.length; i++) {
	currentItem = items[i].stem;}
}*/






// Display fix response
function displayFix() {

}


// Display feedback to the fix response
function displayFeedback() {

}


// Tally score
function tallyScore() {

}


// Display results
function displayResults() {

}


// Reset game
function reset() {

}