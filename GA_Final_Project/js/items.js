//Each game item and its attributes
var item0 = {
	"stem" : "I'll <span class=\"highlight\">definately</span> give you a call on Monday afternoon.",
	"answer" : false,
	"fix" : true,
	"prompt" : "definately",
	"correct" : "definitely",
	"hint" : "Fix the spelling.",
	"feedbackCorrectMessage" : "Hooray! You are de<span class=\"highlight\">fin</span>itely correct!",
	"feedbackIncorrectMessage" : "That's de<span class=\"highlight\">fin</span>itely a fixable problem.",
	"feedbackImage" : "img/hint-fish.png"
}

var item1 = {
	"stem" : "How <span class=\"highlight\">ironic</span>. I can't find a knife, but I found 10,000 spoons in this drawer.",
	"answer" : false,
	"fix" : false,
	"correct" : "Ironic",
	"feedbackCorrectMessage" : "Yes. Something is <span class=\"highlight\">ironic</span> when it's <b>opposite</b> to what you would expect.",
	"feedbackIncorrectMessage" : "<span class=\"highlight\">Ironic</span> doesn't just describe an unfortunate situtation. Something is <em>ironic</em> when it's <b>opposite</b> to what you would expect.",
	"feedbackImage" : "img/hint-iron.png"
}

var item2 = {
	"stem" : "<span class=\"highlight\">It's</span> getting hot in here.",
	"answer" : true,
	"fix" : false,
	"feedbackCorrectMessage" : "Right on! Use the apostrophe in <span class=\"highlight\">it's</span> to shorten \"it is\" (e.g. It's raining.).",
	"feedbackIncorrectMessage" : "Actually, we do use the apostrophe in <span class=\"highlight\">it's</span> to mean \"it is\" (e.g. It's raining.).",
	"feedbackImage" : "img/hint-blank.png"
}

var item3 = {
	"stem" : "She dove into the water, <span class=\"highlight\">irregardless</span> of the cold temperature.",
	"answer" : false,
	"fix" : false,
	"correct" : "lose",
	"feedbackCorrectMessage" : "Good eye. <span class=\"highlight\">Irregardless</span> is not a real word.",
	"feedbackIncorrectMessage" : "<span class=\"highlight\">Irregardless</span> is not a real word! Use the word <em>regardless</em> instead.",
	"feedbackImage" : "img/hint-rabbit.png"
}

var item4 = {
	"stem" : "Harry <span class=\"highlight\">drunk</span> his glass of butterbeer in five minutes.",
	"answer" : false,
	"fix" : true,
	"prompt" : "<em>drunk</em> or <em>drank</em>?",
	"correct" : "drank",
	"hint" : "What's the simple past of <span class=\"highlight\">drink</span>?",
	"feedbackCorrectMessage" : "That's right. <em>Drank</em> is the simple past of <em>drink</em>.",
	"feedbackIncorrectMessage" : "Close. <em>Drunk</em> is the past tense of <em>drink</em> when used with <em>have</em>.",
	"feedbackImage" : "img/hint-blank.png"
}