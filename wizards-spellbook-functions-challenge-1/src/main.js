// complete the challenge here 👇

// 1 - Spell Declaration:
const potion = function createPotion(
  baseIngredient = "water",
  catalystIngredient = "moonstone dust",
  powerBooster = "dragon breath"
) {
  return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}!`;
};
console.log(potion());
console.log(potion("witch hazel"));
console.log(potion("toadstool extract", "pixie wings"));
console.log(potion("shadow essence", "vampire tears", "phoenix ash"));

// 2 - Enchantment Expression:
const castCharm = function (targetName) {
  return `May luck and fortune smile upon ${targetName}!`;
};
console.log(castCharm("Elara the Elf"));

// 3 - Arcane Arrow Function:
const calculateSpellPower = (wizardAge) => wizardAge * 10;
console.log("Spell Power:", calculateSpellPower(25));

// 4 - Spellbook Array:
const castFireball = (powerLevel) => {
  return `Fireball blazes with power ${powerLevel}!`;
};

const summonWaterSpout = (powerLevel) => {
  return `Water spout surges with power ${powerLevel}!`;
};

const callLightning = (powerLevel) => {
  return `Lightning strikes with power ${powerLevel}!`;
};

const elementalSpells = [castFireball, summonWaterSpout, callLightning];

for (let i = 0; i < elementalSpells.length; i++) {
  console.log(elementalSpells[i](i + 1));
}

// 5 - Magical Condition:
function determineSpellStrength(powerLevel) {
  if (powerLevel < 50) {
    return "Weak";
  } else if (powerLevel >= 50 && powerLevel <= 100) {
    return "Moderate";
  } else {
    return "Strong";
  }
}

console.log(determineSpellStrength(30));
console.log(determineSpellStrength(75));
console.log(determineSpellStrength(150));

// 6 - Familiar's Task (Callback Function):
function transformIngredients(ingredients, transformFn) {
  return ingredients.map((ingredient) => transformFn(ingredient));
}

console.log(
  transformIngredients(
    ["newt eyes", "toe of frog", "wool of bat", "tongue of dog"],
    (ingredient) => `enchanted ${ingredient}`
  )
);
