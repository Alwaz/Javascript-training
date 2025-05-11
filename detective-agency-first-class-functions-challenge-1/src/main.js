// complete the challenge here 👇

// 1. Analyze Evidence
// My soultion
export function analyzeEvidence(result, callback, initialValue) {
  let acc, startIndex;

  if (!Array.isArray(result)) {
    console.error("First argument must be an array");
  }
  if (typeof callback !== "function") {
    console.error("Second argument must be function");
  }
  if (result.length === 0 || initialValue === undefined) {
    console.error("Empty array with no initial value");
  }
  // if initialValue, use that as acc start from 0
  if (initialValue) {
    acc = initialValue;
    startIndex = 0;
  } else {
    // use first index as acc and start from 1
    acc = result[0];
    startIndex = 1;
  }
  // loop through the array starting from startIndex
  for (let i = startIndex; i < result.length; i++) {
    // Call the callback function with accumulator, current value, index, and the original array
    acc = callback(acc, result[i], i, result);
  }
  return acc;
}

// Actual solution
// export function analyzeEvidence(array, callback, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < array.length; i++) {
//     acc = callback(acc, array[i]);
//   }
//   return acc;
// }

const evidence = [2, 4, 6, 8];
const totalEvidence = analyzeEvidence(evidence, (acc, val) => acc + val, 0);
console.log("Output:", totalEvidence);

// 2. Enhance Investigation Skills
export function createSkillEnhancer(n) {
  return (skillLevel) => {
    return skillLevel * n;
  };
}

const doubleSkill = createSkillEnhancer(2);
console.log("Output:", doubleSkill(5));

// 3. Track Suspect Movements

export function trackMovements(locationArray, callbackFn) {
  locationArray.forEach((location, index) => {
    setTimeout(() => {
      callbackFn(location);
    }, index * 200);
  });
}

const locations = ["Park", "Mall", "Cafe"];
trackMovements(locations, (location) => {
  console.log(`Suspect spotted at: ${location}`);
});

// 4. Combine Investigation Techniques
export function composeTechniques(...params) {
  if (params.length === 0) {
    return (x) => x;
  }

  return (value) => {
    return params.reduceRight((result, fn) => fn(result), value);
  };
}

const addForensics = (x) => x + " with Forensic Analysis";
const addInterrogation = (x) => x + " with Interrogation";
const combinedTechnique = composeTechniques(addInterrogation, addForensics);
console.log(combinedTechnique("Investigation"));

// 5. Filter Suspect List

export function filterSuspects(suspectsArray, predicateFunc) {
  let suspectFound = [];

  if (!Array.isArray(suspectsArray)) {
    console.error("First argument must be an array");
  }
  if (typeof predicateFunc !== "function") {
    console.error("Second argument must be function");
  }
  if (suspectsArray.length === 0) {
    return;
  }

  for (const element of suspectsArray) {
    const suspectShouldBeAdded = predicateFunc(element);
    if (suspectShouldBeAdded) {
      suspectFound = element;
    }
  }
  return suspectFound;
}

const suspects = [
  { name: "Alice", age: 30, location: "Park" },
  { name: "Bob", age: 25, location: "Mall" },
  { name: "Charlie", age: 35, location: "Cafe" },
];
const isAtPark = (suspect) => suspect.location === "Park";
const suspectsAtPark = filterSuspects(suspects, isAtPark);
console.log(suspectsAtPark);
