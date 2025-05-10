// Spaceship Initialization
let fuelLevel = 100;
let oxygenLevel = 100;
const crewMembers = 5;
let alienEncounters = 0;
let distanceTraveled = 0;

// 1. Get Going:
// distanceTraveled = 153;
distanceTraveled = 70;

// 2. Resource Management:
const fuelReduction = distanceTraveled / 10;
fuelLevel = fuelLevel - fuelReduction * 5;
console.log(
  `Fuel reductions: ${fuelReduction}, Current fuel level: ${fuelLevel}`
);
// Fuel is low when there are 30 or less units left
const isFuelLow = fuelLevel <= 30;
console.log(`Fuel is low: ${fisFuelLow}`);

// 3. Oxygen Consumption:
let oxygenConsumed = (distanceTraveled / 100) * crewMembers;
oxygenLevel -= oxygenConsumed;
console.log(`New oxygen level ${oxygenLevel}`);

const isOxygenLow = oxygenLevel < 20;
console.log(`Oxygen is low: ${isOxygenLow}`);

// 4. Alien Encounters
alienEncounters = distanceTraveled % 2 !== 0;
console.log(`Crew encountered aliens: ${alienEncounters}`);

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled;
