const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

const mernStack = ['MongoDB', 'Express', 'React', 'Node']



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

