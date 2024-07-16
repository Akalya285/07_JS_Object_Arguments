var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

var getBig = function (str) {
    return str.toUpperCase();
};

var getSmall = function (str) {
    return str.toLowerCase();
};

// Test the getBig function
console.log(getBig("Earth"));
console.log(getBig("Mars"));
console.log(getBig("Neptune"));

// Test the getSmall function
console.log(getSmall("EARTH"));
console.log(getSmall("MARS"));
console.log(getSmall("NEPTUNE"));
