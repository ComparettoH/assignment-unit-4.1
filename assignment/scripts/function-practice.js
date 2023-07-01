console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let names = [];
function helloName(newName) {
  console.log('learned new name:', newName);
  //push new name into our names array
names.push(newName);
//once addition is confirmed in array send greeting
let greeting = console.log('Hello,', newName, '!');
return greeting;
}

// Remember to call the function to test
helloName( 'Hannah');
helloName( 'Vinny' );
helloName( 'Dude' );

console.log('New names learned are:', names)

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
console.log('in addNumbers', firstNumber, secondNumber );
let answer = firstNumber + secondNumber;
return answer;
}

console.log('Test 22 + 3 =', addNumbers(22,3))
console.log('Test -9 + 37 =', addNumbers(-9,37))
console.log('Test 3.14 + 87 =', addNumbers(3.14,87))
console.log('Test 5 + -100 =', addNumbers(5,-100))

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
console.log('in multiplyThree:', num1, num2, num3);
let answer = num1 * num2 * num3;
return answer;
}

console.log('Test 2x5x8 =', multiplyThree(2,5,8))
console.log('Test 1x0x9 =', multiplyThree(1,0,9))
console.log('Test 3x7x9 =', multiplyThree(3,7,9))
console.log('Test 11x6x4 =', multiplyThree(11,6,4))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    console.log('This', number, 'is positive')
    return true;
  }
  else if (number <= 0){
    console.log('This', number, 'is negative or zero.')
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array = [ 'paper', 'notebook', 'pen', 'eraser'];

function getLast() {
  let lastItem = array[array.length-1];
  return lastItem;
}

console.log('Last item in array is:', getLast())

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arrayBeingSearched = [];

function find(value, array) {
if (value == array){
  console.log('In find, these match:')
  return true;
}
else {console.log('Nope not here');
return false;}
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}