var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, type) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        type: type
    };
};

getCarInfo = function (car) {
    return car.make + " " + car.model + ": " + car.year + " " + car.color + " " + car.type;
};

car1 = buildCar("Toyota", "Camry", 2020, "Red", "Sedan");
car2 = buildCar("Tesla", "Model S", 2022, "Black", "Electric");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
