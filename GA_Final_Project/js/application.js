//Each game item and its attributes
var item0 = {
	"stem" : "I'll <span class=\"highlight\">definately</span> give you a call on Monday afternoon.",
	"answer" : false,
	"fix" : true,
	"prompt" : "definately",
	"correct" : "definitely",
	"hint" : "Fix the spelling.",
	"feedbackCorrectMessage" : "You are de<span class=\"highlight\">fin</span>itely correct!",
	"feedbackIncorrectMessage" : "That's de<span class=\"highlight\">fin</span>itely a fixable problem.",
	"feedbackImage" : "img/hint-fish.png"
}

var item1 = {
	"stem" : "How ironic",
	"answer" : false,
	"fix" : false,
	"feedback" : "Ironic means bla"
}

var item2 = {
	"stem" : "<span class=\"highlight\">It's</span> getting hot in here",
	"answer" : true,
	"fix" : true,
	"prompt" : "<span class=\"highlight\">It's</span> getting hot in here"
}

var item3 = {
	"stem" : "I don't want to <span class=\"highlight\">loose</span> my spare change.",
	"answer" : false,
	"fix" : true,
	"prompt" : "I don't want to <span class=\"highlight\">loose</span> my spare change."
}

var item4 = {
	"stem" : "Sam ordered a sandwich, chips and soda.",
	"answer" : false,
	"fix" : true,
	"prompt" : "Sam ordered a sandwich, chips and soda."
}


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
		console.log("There's no fix it. Show response.");
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