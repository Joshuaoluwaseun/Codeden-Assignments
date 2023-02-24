// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

const currentYear = new Date().getFullYear(); // get the current year

// const birthYear = prompt("What year were you born?", "ENTER YEAR "); // prompt the user to enter their birth year

// let requiredAge = currentYear - birthYear; // calculate the user's age
// let minimumAge = 18;

// if (requiredAge >= minimumAge)
//     console.log("You are old enough to drive");
// else {
//     const yearsToWait = minimumAge - requiredAge;
//     console.log("you are left with " + yearsToWait + "  years to drive.")
// }



// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.

let yourAge = 55;
let myAge = 20;

let checkAge = yourAge - myAge

if (yourAge > myAge) console.log(`you are ${checkAge} years older than me`);
else console.log(" I am older than you.");


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
  let a =5
  let b = 4
//   4 is greater than 3
let nums = (a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);
console.log(nums)

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = 7;
 if (num % 2 === 0) console.log(`${num} is an even number`)
 else console.log(`${num} is an odd number`);
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.