/* eslint-disable @stylistic/js/semi */
/* eslint-disable @stylistic/js/quotes */
/*
 *  Complete the challenge requirements here
 * Requirements
 */

/*
 *1 - Declare a variable that can never be assigned a new value, Call it javascript
 * give it the value king
 */

const javascript = "king";

// 2 - log this variable to the console
console.log(javascript);

/*
 * 3 - What type data type is this? string
 * 4 - Which keyword did you use to define it? let or const? const
 * 5 - Try re-assigning a new value to it on the next line. What happens? (Once complete, you can remove this failed re-assignment)
 */

const jsIsHard = javascript.includes("hard");
console.log("the javascript variable includes the word hard?", jsIsHard);

// 3 - Declare another variable called age
let age = 12;
console.log("Age", age);
// Update the value to 13
age = 13;
console.log("Age", age);

// 4 - Declare a variable called isPreppingForExam, set it to true and log
const isPreppingForExam = true;
console.log("isPreppingForExam", isPreppingForExam);

// 5 - Declare a variable called isOlderThan8
const isOlderThan8 = age > 8;
console.log("isOlderThan8", isOlderThan8); // boolean

// 6 - Finally, declare a variable called thisVarHasNoValue
let thisVarHasNoValue;
console.log("thisVarHasNoValue", thisVarHasNoValue); // undefined
