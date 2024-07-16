var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 3));

// 1. Find the index of where the word 'go' starts in the message string
var goIndex = message.indexOf("go");
console.log("The word 'go' starts at index: " + goIndex);

// 2. Use indexOf and substr to display the word 'choose' from the message string
var chooseIndex = message.indexOf("choose");
var chooseLength = "choose".length;
console.log("The word 'choose': " + message.substr(chooseIndex, chooseLength));

// 3. Use lastIndexOf to find the index of the 'oo' in the word 'Moon' of the message string
var lastOoIndex = message.lastIndexOf("oo");
console.log("The last 'oo' in the word 'Moon' starts at index: " + lastOoIndex);
