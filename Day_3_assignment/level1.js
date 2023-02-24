// Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Josh";
let lastName = "Fest";
let country = "Nigeria";
let city = "Lagos";
let age = 24;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
 
// Check if type of '10' is equal to 10
 console.log(typeof("10") === 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);
// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
console.log("Yes");
console.log("Hello");
console.log(34);
// Write three JavaScript statement which provide falsy value.
console.log(0);
console.log("");
console.log(undefined);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 // yes true
console.log(4 > 3 );

// 4 >= 3 // yes true
console.log(4 >= 3);

// 4 < 3   // No false
console.log(4 < 3);

// 4 <= 3   // No false 
console.log(4 <= 3);

// 4 == 4   // yes true
console.log(4 == 4);

// 4 === 4  /// true
console.log(4 === 4);

// 4 != 4   /// false
console.log(4 != 4);

// 4 !== 4  // false
console.log(4 !== 4);

// 4 != '4'   //false
console.log(4 != 4);// 4 == '4'

// 4 === '4'   //false
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12   ///true
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12   // false
console.log( 4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12   ///true
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12 ///true
console.log(4 > 3 || 10 > 12);

// !(4 > 3)   //false
console.log(!(4 > 3));

// !(4 < 3)   // true
console.log(!(4 < 3));
// !(false)  // true
console.log(!(false));

// !(4 > 3 && 10 < 12)  // false
console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12)  // true
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4') // true 
console.log(!(4 === '4'));

// There is no 'on' in both dragon and python
let str1 = "dragon";
let str2 = " python";

let newStr1 = str1.includes("on")
let newStr2 = str2.includes("on")

console.log(!(newStr1 === newStr2))

// Use the Date object to do the following activities
const today = new Date();
// What is the year today?
console.log(today.getFullYear())

// What is the month today as a number?
console.log(today.getMonth())

// What is the date today?
console.log(today);

// What is the day today as a number?
console.log(today.getDate())

// What is the hours now?
console.log(today.getHours())

// What is the minutes now?
console.log(today.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const thatDay = new Date(15767365);
console.log(thatDay)
console.log(today - thatDay);

