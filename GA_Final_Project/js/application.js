// Each game item and its attributes
var item0 = {
	"stem" : "I'll <span class=\"highlight\">definately</span> give you a call on Monday afternoon.",
	"answer" : false,
	"fix" : true,
	"prompt" : "definately",
	"correct" : "definitely",
	"hint" : "Fix the spelling."
}

var item1 = {
	"stem" : "<span class=\"highlight\">It's</span> getting hot in here",
	"answer" : true,
	"fix" : true,
}

var item2 = {
	"stem" : "I don't want to <span class=\"highlight\">loose</span> my spare change.",
	"answer" : false,
	"fix" : true,
	"prompt" : "loose"
}

var item3 = {
	"stem" : "Sam ordered a sandwich, chips and soda.",
	"answer" : false,
	"fix" : true,
	"prompt" : "Sam ordered a sandwich, chips and soda."
}

// Global variables
var items = [item0, item1, item2, item3];
var currentItem = items[0];


// Start the game
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
	console.log(currentItem);
	console.log(response);

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


function evaluateFixResponse() {
	var userFixResponse = document.getElementById("userFixResponse").value;

	if(userFixResponse == currentItem.correct) {
		alert("Yay!");
	} else {
		alert("Boo!");
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