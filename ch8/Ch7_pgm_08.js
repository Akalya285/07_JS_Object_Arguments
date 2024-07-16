var message = "We choose to go to the Moon!";

// Log specific parts of the message
console.log(message.substr(21, 5)); // Moon!
console.log(message.substr(15, 10)); // go to the
console.log(message.substr(0, 9));   // We choose

// Investigate omitting the second argument
console.log(message.substr(15));     // "go to the Moon!"

// Using negative numbers as arguments
console.log(message.substr(-5, 5));  // Moon!
console.log(message.substr(-9));     // the Moon!

// Further testing negative start and large lengths
console.log(message.substr(-9, 4));  // the 
console.log(message.substr(-15, 20)); // to go to the Moon!
