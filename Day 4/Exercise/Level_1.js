// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age:");
age = parseInt(age);
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let waitYears = 18 - age;
  console.log(`You are left with ${waitYears} year${waitYears > 1 ? 's' : ''} to drive.`);
}


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25;
let yourAge = prompt("Enter your age:");
yourAge = parseInt(yourAge);

if (yourAge > myAge) {
  let diff = yourAge - myAge;
  console.log(`You are ${diff} year${diff > 1 ? 's' : ''} older than me.`);
} else if (yourAge < myAge) {
  let diff = myAge - yourAge;
  console.log(`I am ${diff} year${diff > 1 ? 's' : ''} older than you.`);
} else {
  console.log("We are the same age.");
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using.
// if else
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
// ternary operator
let c = 4;
let d = 3;
console.log(c > d ? `${c} is greater than ${d}` : `${c} is less than ${c}`);


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number:");
number = parseInt(number);

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

