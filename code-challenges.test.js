// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.



describe("codeMsg", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(codeMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeMsg(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//    ReferenceError: codeMsg is not defined

// b) Create the function that makes the test pass.
//create a function called codeMsg that takes a string as a parameter
//use a built in string method .replace to return a new string with specified characters replaced. we will use .return() multiple times on the string to get each character replacement.
//this method will only replace the first instance that it encounters. to replace  all of them, use regex with the global modifier g

//     Expected: "3cc3ntr1c"
// Received: "Ecc3ntr1c"

//I forgot to account for capitals - we can use the modifier i for case insensitive matching

const codeMsg = (string) => {
return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("containsLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(containsLetter(fruitArray, "a")).toEqual(["Mango", "Apricot", "Peach"])
        expect(containsLetter(fruitArray, "e")).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
//     ReferenceError: containsLetter is not defined

// b) Create the function that makes the test pass.
// create a function called containsLetter that takes in an array and a string (which should contain a single letter)
// iterate through each word in the array
// for each word, use the built in string method .includes() to check if that word contains the given letter
// the iterator should be a filter since we are removing items from the array

//     - Expected  - 1
// + Received  + 0

// Array [
//   "Mango",
// -   "Apricot",
//   "Peach",
// ]
// forgot to account for capitalization again! I will lowercase the value before using includes

const containsLetter = (array, string) => {
return array.filter(value => value.toLowerCase().includes(string))
}
//Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullhouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    const hand4 = [7, 2, 7, 2, 7]
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullhouse(hand1)).toEqual(true)
        expect(fullhouse(hand2)).toEqual(false)
        expect(fullhouse(hand3)).toEqual(false)
        expect(fullhouse(hand4)).toEqual(true)
    })
})

//     ReferenceError: fullhouse is not defined

// b) Create the function that makes the test pass.
// create a function called fullhouse that takes in an array as parameters
// create two variables which will be placeholders 
// iterate over the array assign the first two unique numbers to the placeholders. on each iteration it will check if it is equal to either of the placeholders and if so, assign the value to the placeholder name and add 1 to the count for that placeholder. if not, do nothing. 
// I did find in my research a method called countBy that I thought could be useful, but it only applied to objects, not arrays, and seemed to involve installing various JS librarues such as underscore, collect.js, or lodash
const fullhouse = (array) => {
    let num1 = "";
    let num2 = "";
    let count1 = 0;
    let count2 = 0;
    array.forEach((value) => {
      if (value == num1 || num1 == "") {
        num1 = value;
        count1 += 1;
      } else if (value == num2 || num2 == "") {
        num2 = value;
        count2 += 1;
      }
    });
    if ((count1 === 2 && count2 === 3) || (count1 === 3 && count2 === 2)) {
      return true;
    } else {
      return false;
    }
  };

  //Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total