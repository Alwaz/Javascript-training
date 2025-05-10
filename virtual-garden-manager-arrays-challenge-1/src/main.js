// complete the challenge here 👇

// 1 - Plant Your Seeds:
const garden = ["Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"];
console.log(`Initial garden: ${garden}`);

// 2 - Garden Growth:
garden.push("Pumpkin");
const seeds = ["Sunflower"];
garden.unshift(...seeds);
console.log(`Updated garden: ${garden}`);

const noOfPlants = garden.length;
console.log(`Number of plants: ${noOfPlants}`);

// 3 - Harvest Time:
const lastRemovedPlant = garden.pop();
const firstRemovedPlant = garden.shift();
console.log(`Harvested: ${firstRemovedPlant} and ${lastRemovedPlant}`);

// 4 - Garden Maintenance:
const seedToReplace = "Cucumber";

const index = garden.indexOf(seedToReplace);
garden[index] = "Bell Pepper";

console.log(`Replaced plant at index: ${index}`);
console.log(`Garden after replacement: ${garden}`);

// 5 - Garden Health Check:
const hasWeed = garden.includes("Weeds");
console.log(`Garden includes Weeds: ${hasWeed}`);
