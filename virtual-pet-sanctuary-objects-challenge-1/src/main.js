// complete the challenge here 👇

// 1 - Create Virtual Pet:
const createVirtualPet = (name, species, mood) => {
  return {
    name,
    species,
    mood,
  };
};

const virtualPetOne = createVirtualPet("Pixel", "dog", 0.8);
const virtualPetTwo = createVirtualPet("Bitsy", "cat", 0.6);
const virtualPetThree = createVirtualPet("Datastream", "fish", 0.5);

// 2 - Add to Sanctuary:
let petSanctuary = {};

const addToSanctuary = (virtualPet) => {
  petSanctuary[virtualPet.name] = virtualPet;
};
addToSanctuary(virtualPetOne);
addToSanctuary(virtualPetTwo);
addToSanctuary(virtualPetThree);

console.log(petSanctuary);

// 3 - Check Sanctuary:
const isPetInSanctuary = (petName) => {
  return petName in petSanctuary;
};

// --Sanctuary Check--
console.log("--Sanctuary Check--");
console.log("Pixel is in sanctuary:", isPetInSanctuary("Pixel"));
console.log("Glitch is in sanctuary:", isPetInSanctuary("Glitch"));

// 3 - Generate Pet Report:
const generatePetReport = () => {
  console.log("--Pet Report--");
  for (let petName in petSanctuary) {
    const pet = petSanctuary[petName];
    return `Name: ${petName}, Species: ${pet.species}, Mood: ${pet.mood}`;
  }
};

console.log(generatePetReport());

// 5 - Find Happy Pets:
const findHappyPets = (moodThreshold) => {
  console.log("--Happy Pets--");
  const happyPets = [];
  for (let petName in petSanctuary) {
    let pet = petSanctuary[petName];
    if (pet.mood > moodThreshold) {
      happyPets.push(pet);
    }
  }
  return happyPets;
};

console.log(findHappyPets(0.7));
