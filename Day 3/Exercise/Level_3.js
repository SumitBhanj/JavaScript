// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const now1 = new Date();
let year1 = now1.getFullYear();
let month1 = now1.getMonth() + 1;
let date1 = now1.getDate();
let hours2 = now1.getHours();
let minutes1 = now1.getMinutes();

if (month1 < 10) month1 = '0' + month1;
if (date1 < 10) date1 = '0' + date1;
if (hours2 < 10) hours2 = '0' + hours2;
if (minutes1 < 10) minutes1 = '0' + minutes1;

let formattedTime = `${year1}-${month1}-${date1} ${hours2}:${minutes1}`;
console.log(formattedTime);