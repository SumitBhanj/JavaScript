// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}
console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
