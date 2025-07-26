//Q1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// In a for loop using let, the variable is block-scoped and not accessible outside the loop.
/* for(let i=0; i<=10; i++){
    console.log(i);
    
}
console.log("\n");

// In a while and do while loop, if let i is declared outside, it remains accessible and modifiable after the loop ends.
let i=0;
while(i<=10){
    console.log(i);
    i++;
}
console.log("\n");

// That is why we needed to re-initialize value of i.
i=0;
do{
    console.log(i);
    i++;
}while(i<=10)

console.log("\n"); */

//Q2 Iterate 10 to 0 using for loop, do the same using while and do while loop

/* for(let j=10; j>=0; j--){
    console.log(j);
    
}
console.log("\n");

let j=10;
while(j>=0){
    console.log(j);
    j--;
}
console.log("\n");

j=10;
do{
    console.log(j);
    j--;
}while(j>=0) */

//Q3 Iterate 0 to n using for loop
/* let n = 10; 
for (let i = 0; i <= n; i++) {
  console.log(i);
} */

// Q4
/* #
   ##
   ###
   ####
   #####
   ######
   #######*/

/* for(let i=0; i<=6; i++){
    let row = "";
    for(let j=0; j<=i; j++){
        row += "#";
    }
    console.log(row);
} */

// Q5
/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */

/* for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
} */

// Q6
/*  i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

/* console.log("i\t i^2\t i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t ${i ** 2}\t ${i ** 3}`);
} */

// Q7 Use for loop to iterate from 0 to 100 and print only even numbers
/* for (let i=0; i<=100; i++){
  if(i%2==0){
    console.log(i);
  }
} */

// Q8 Use for loop to iterate from 0 to 100 and print only odd numbers
/* for(let i=0; i<=100; i++){
  if(i%2!=0){
    console.log(i);
  }
} */

// Q9 Use for loop to iterate from 0 to 100 and print only prime numbers
/* for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
} */

// Q10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/* let sum = 0;
for(let i=0; i<=100; i++){
  sum+=i;
}
console.log(sum); */

// Q11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/* let sumOfOdd=0;
let sumOfEven=0;
for(let i=0; i<=100; i++){
  if(i%2==0){
    sumOfEven+=i;
  }
  else{
    sumOfOdd+=i;
  }
} 
console.log('The sum of all evens from 0 to 100 is '+sumOfEven+'. And the sum of all odds from 0 to 100 is '+sumOfOdd); */

// Q12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

/* const arr = [sumOfOdd, sumOfEven];
console.log(arr); */

// Q13 Develop a small script which generate array of 5 random numbers
/* let arr = [];
for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 100) + 1; 
  arr.push(randomNum);
}
console.log(arr); */

// Q14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
/* let uniqueNum = new Set();
while (uniqueNum.size < 5) {
  let randNum = Math.floor(Math.random() * 100) + 1; 
  uniqueNum.add(randNum);
}

let arr = [uniqueNum];
console.log(arr); */

// Q15 Develop a small script which generate a six characters random id: 5j2khz
const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
for (let i = 0; i < 6; i++) {
  id += char[Math.floor(Math.random() * char.length)];
}
console.log(id);
