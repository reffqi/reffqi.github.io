/*
var phi = 3.14;
var power = 2;
var radius = 0;
var calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
var area21 = calculateArea(radius);

radius = 7;
var area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);
*/

let phi = 3.14;
let power = 2;
let radius = 0;
let calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
const area21 = calculateArea(radius);

radius = 7;
const area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);
