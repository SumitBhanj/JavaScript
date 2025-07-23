// Write a code which can give grades to students according to theirs scores:80-100, A70-89, B60-69, C50-59, D0-49, F
let score = prompt("Enter your score:");
score = parseInt(score);

switch (true) {
  case (score >= 80 && score <= 100):
    console.log("Grade: A");
    break;
  case (score >= 70 && score <= 79):
    console.log("Grade: B");
    break;
  case (score >= 60 && score <= 69):
    console.log("Grade: C");
    break;
  case (score >= 50 && score <= 59):
    console.log("Grade: D");
    break;
  case (score >= 0 && score < 50):
    console.log("Grade: F");
    break;
  default:
    console.log("Invalid score. Please enter a number between 0 and 100.");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :September, October or November, the season is Autumn.December, January or February, the season is Winter.March, April or May, the season is SpringJune, July or August, the season is Summer
let month = prompt("Enter the month:");
month = month.trim().toLowerCase(); // Normalize input

switch (month) {
  case 'september':
  case 'october':
  case 'november':
    console.log("The season is Autumn.");
    break;

  case 'december':
  case 'january':
  case 'february':
    console.log("The season is Winter.");
    break;

  case 'march':
  case 'april':
  case 'may':
    console.log("The season is Spring.");
    break;

  case 'june':
  case 'july':
  case 'august':
    console.log("The season is Summer.");
    break;

  default:
    console.log("Invalid month entered.");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What is the day today?");
day = day.trim().toLowerCase();

if (day === "saturday" || day === "sunday") {
  let formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(`${formattedDay} is a weekend.`);
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
  let formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(`${formattedDay} is a working day.`);
} else {
  console.log("Invalid day entered.");
}

