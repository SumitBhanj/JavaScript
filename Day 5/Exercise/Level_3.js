const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
// Find the median age(one middle item or two middle items divided by two)
ages.sort((a, b) => a - b);
let median;
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  median = (ages[mid - 1] + ages[mid]) / 2;
} else {
  median = ages[mid];
}
console.log("Sorted ages:", ages);
console.log("Median age:", median);
// Find the average age(all items divided by number of items)
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const average = sum / ages.length;
console.log("Average age:", average);
// Find the range of the ages(max minus min)
const minAge1 = Math.min(ages);
const maxAge1 = Math.max(ages);
const range = maxAge1 - minAge1;
console.log("Range of ages:", range);
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const sum1 = ages.reduce((a, b) => a + b, 0);
const average1 = sum / ages.length;
const minAge2 = Math.min(ages);
const maxAge2 = Math.max(ages);
const diffMin = Math.abs(minAge2 - average1);
const diffMax = Math.abs(maxAge2 - average1);
console.log("abs(min - average):", diffMin);
console.log("abs(max - average):", diffMax);

const firstTen = countries.slice(0, 10);
console.log(firstTen);


// Find the middle country(ies) in the countries array
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia','Finland', 'Germany', 'Hungary', 'Ireland', 'Japan','Kenya', 'India', 'Brazil'];

const middleIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
  const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
  console.log("Middle countries:", middleCountries);
} else {
  console.log("Middle country:", countries[middleIndex]);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const middle = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, middle);
const secondHalf = countries.slice(middle);
console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);