// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Sumit";
let lastName = "Bhanj";
let country = "India";
let city = "Bhubneswar";
let age = 20;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  
console.log(typeof lastName);   
console.log(typeof country);    
console.log(typeof city);       
console.log(typeof age);        
console.log(typeof isMarried);  
console.log(typeof year);
console.log('\n');     

// Check if type of '10' is equal to 10
console.log('10' === 10);
console.log('\n');  

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log('\n');

// Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
console.log(undefined == null) 
console.log(3 > 2)
console.log(3 == '3')
// ii. Write three JavaScript statement which provide falsy value.
console.log(undefined === null) 
console.log(NaN == NaN)         
console.log(NaN === NaN)  
console.log('\n');      

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);       
console.log(4 >= 3);      
console.log(4 < 3);       
console.log(4 <= 3);      
console.log(4 == 4);      
console.log(4 === 4);     
console.log(4 != 4);      
console.log(4 !== 4);     
console.log(4 != '4');    
console.log(4 == '4');    
console.log(4 === '4');  
console.log(!('python'.length == 'jargon'.length));
console.log('\n');

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);     
console.log(4 > 3 && 10 > 12);     
console.log(4 > 3 || 10 < 12);     
console.log(4 > 3 || 10 > 12);     
console.log(!(4 > 3));             
console.log(!(4 < 3));             
console.log(!false);              
console.log(!(4 > 3 && 10 < 12));  
console.log(!(4 > 3 && 10 > 12));  
console.log(!(4 === '4')); 
console.log(!('dragon'.includes("on") && 'python'.includes("on")));
console.log('\n');

// Use the Date object to do the following activities
let now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()+1);
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds since Jan 1, 1970:", now.getTime());


 
