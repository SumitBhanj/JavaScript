// Write a program which tells the number of days in a month
let month = prompt("Enter a month:");
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

let days;
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    days = 31;
    break;

  case "April":
  case "June":
  case "September":
  case "November":
    days = 30;
    break;

  case "February":
    days = 28; 
    break;

  default:
    console.log("Invalid month name.");
    break;
}
console.log(`${month} has ${days} days.`);

// Write a program which tells the number of days in a month, now consider leap year.
let month1 = prompt("Enter a month:");
let year1 = prompt("Enter a year:");
month1 = month1.charAt(0).toUpperCase() + month1.slice(1).toLowerCase();
year1 = Number(year1);

let days1;

switch (month1) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    days1 = 31;
    break;

  case "April":
  case "June":
  case "September":
  case "November":
    days1 = 30;
    break;

  case "February":
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      days1 = 29;
    } else {
      days1 = 28;
    }
    break;

  default:
    console.log("Invalid month name.");
    break;
}

if (days) {
  console.log(`${month1} ${year1} has ${days1} days.`);
}
