// Using console.log() print out the following statement:
//1.  The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

// Using console.log() print out the following quote by Mother Teresa:
//2. "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
 let strNum = '10';
 typeof(strNum)
let num = +strNum;
console.log(strNum == 10)

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let floatNum = parseFloat('9.8')

console.log(Math.round(floatNum))

//5. Check if 'on' is found in both python and jargon
let txt1 = "python";
let txt2 = "jargon";
console.log(txt1.includes("on") && txt2.includes("on"))

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"))


// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100) + 1)

// 8 Generate a random number between 50 and 100 inclusively.
const randomNum = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(randomNum);

//9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * (255 - 0 + 1)) + 0) 

// Access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';

const randomIndex = Math.floor(Math.random() * str.length);
const randomChar = str.charAt(randomIndex);

console.log(randomChar);

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');


// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.slice(31, 54));