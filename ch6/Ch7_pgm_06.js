var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

var spaces = function (spaceLength) {
  var space = "                                        ";
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return space.substr(0, spaceLength);
};

var emptyBox = function (width) {
  width = Math.max(0, width);
  width = Math.min(40, width);
  
  if (width < 2) {
      console.log("Width too small to draw a box");
      return;
  }
  
  var horizontalLine = line(width);
  var middleLine = "=" + spaces(width - 2) + "=";
  
  console.log(horizontalLine);
  for (var i = 0; i < 3; i++) {
      console.log(middleLine);
  }
  console.log(horizontalLine);
};

// Test line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("line(" + i + "): " + line(i));
}

// Test spaces function
console.log("spaces(10): '" + spaces(10) + "'");
console.log("spaces(20): '" + spaces(20) + "'");
console.log("spaces(50): '" + spaces(50) + "'");

// Test emptyBox function
emptyBox(12);
emptyBox(5);
emptyBox(40);
emptyBox(1);
