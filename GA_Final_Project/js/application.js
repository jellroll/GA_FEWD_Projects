// Each game item and its attributes
var item0 = {
	"stem" : "I'll <span class=\"highlight\">definately</span> give you a call on Monday afternoon.",
	"answer" : false,
	"fix" : true
}

var item1 = {
	"stem" : "It's getting hot in here",
	"answer" : true,
	"fix" : true
}

var item2 = {
	"stem" : "I don't want to loose my spare change.",
	"answer" : false,
	"fix" : true
}

var item3 = {
	"stem" : "Sam ordered a sandwich, chips and soda.",
	"answer" : false,
	"fix" : true
}

// Global variables
var items = [item0, item1, item2, item3];
var currentItem = items[0];


// Start the game
function startGame(){
	document.getElementById("intro").style.display = "none";
	document.getElementById("card").style.display = "block";

	displayItem();
}

// Display the item
function displayItem() {
	var item = document.getElementById('item');
	item.innerHTML = currentItem.stem;
}


/*function nextItem() {
	for (var i = 0; i < items.length; i++) {
	currentItem = items[i].stem;}
}*/



// Evaluate response
function evaluateResponse() {
	//console.log(currentItem.answer);

}


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