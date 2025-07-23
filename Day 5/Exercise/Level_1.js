// Declare an empty array;
let emptyArray = [];


// Declare an array with more than 5 number of elements
let numbers = [10, 20, 30, 40, 50, 60];


// Find the length of your array
console.log(numbers.length); 


// Get the first item, the middle item and the last item of the array
let first = numbers[0];
let middle = numbers[Math.floor(numbers.length / 2)];
let last = numbers[numbers.length - 1];
console.log(first, middle, last); 


// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [42, 'Hello', true, null, undefined, {name: 'Sumit'}, [1, 2, 3]];
console.log(mixedDataTypes.length);


// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);


// Print the number of companies in the array
console.log(itCompanies.length); 


// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);


// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}


// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}


// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company not found');
}

// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let char of itCompanies[i].toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    console.log(itCompanies[i]); 
  }
}


// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));


// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));


// Slice out the middle IT company or companies from the array
let mid = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(mid - 1, mid + 1)); 
} else {
  console.log(itCompanies.slice(mid, mid + 1)); 
}


// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);


// Remove the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);


// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);


// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies); 

