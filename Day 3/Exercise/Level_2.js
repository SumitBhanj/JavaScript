// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base:");
let height = prompt("Enter height:");
base = parseFloat(base);
height = parseFloat(height);
let area = 0.5 * base * height;
console.log("The area of the triangle is " + area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
let perimeter = a + b + c;
console.log("The perimeter of the triangle is " + perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter the length of the rectangle:");
let width = prompt("Enter the width of the rectangle:");
length = parseFloat(length);
width = parseFloat(width);
let area1 = length * width;
let perimeter1 = 2 * (length + width);
console.log("The area of the rectangle is " + area1);
console.log("The perimeter of the rectangle is " + perimeter1);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius of the circle:");
radius = parseFloat(radius);
const pi = 3.14;
let area2 = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log("The area of the circle is " + area2);
console.log("The circumference of the circle is " + circumference);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let slope = 2;
let yIntercept = -2;
let xIntercept = (0 + 2) / 2;
console.log("Slope (m):", slope);
console.log("Y-intercept (b):", yIntercept);
console.log("X-intercept:", xIntercept);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x3 = 2, y3 = 2;
let x4 = 6, y4 = 10;
let slope3 = (y4 - y3) / (x4 - x3);
console.log("The slope between (2, 2) and (6, 10) is:", slope);

// Compare the slope of above two questions.
let slope4 = 2;
let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope from equation (m1):", slope1);
console.log("Slope from points (m2):", slope2);

if (slope1 === slope2) {
  console.log("Both slopes are equal.");
} else {
  console.log("Slopes are different.");
}

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let a1 = 0;
let a2 = -1;
let a3 = -2;
let a4 = -3;
let a5 = -4;

let b1 = a1 * a1 + 6 * a1 + 9;
let b2 = a2 * a2 + 6 * a2 + 9;
let b3 = a3 * a3 + 6 * a3 + 9;
let b4 = x4 * a4 + 6 * a4 + 9;
let b5 = a5 * a5 + 6 * a5 + 9;

console.log("x = 0, y =", b1);   
console.log("x = -1, y =", b2);  
console.log("x = -2, y =", b3);  
console.log("x = -3, y =", b4);   
console.log("x = -4, y =", b5);  

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
hours = parseFloat(hours);
ratePerHour = parseFloat(ratePerHour);
let weeklyEarning = hours * ratePerHour;
console.log("Your weekly earning is " + weeklyEarning);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name:");
if (name.length > 7) {
  console.log("Your name is long.");
} else {
  console.log("Your name is short.");
}

// Compare your first name length and your family name length and you should get this output
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);
} else if (firstName.length < lastName.length) {
  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}.`);
} else {
  console.log('Your first name and family name are of equal length.');
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let currentYear = new Date().getFullYear();
let birthYear = prompt("Enter birth year:");
birthYear = parseInt(birthYear);
let age = currentYear - birthYear;
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive.`);
} else {
  let yearsToWait = 18 - age;
  console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} year(s).`);
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt("Enter number of years you live:");
years = parseInt(years);
let seconds = years * 365 * 24 * 60 * 60;
console.log(`You lived ${seconds} seconds.`);

// Create a human readable time format using the Date time object
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours1 = now.getHours();
let minutes = now.getMinutes();

if (month < 10) month = '0' + month;
if (date < 10) date = '0' + date;
if (hours1 < 10) hours = '0' + hours1;
if (minutes < 10) minutes = '0' + minutes;

let format1 = `${year}-${month}-${date} ${hours1}:${minutes}`;
let format2 = `${date}-${month}-${year} ${hours1}:${minutes}`;
let format3 = `${date}/${month}/${year} ${hours1}:${minutes}`;
console.log(format1);
console.log(format2);
console.log(format3);


