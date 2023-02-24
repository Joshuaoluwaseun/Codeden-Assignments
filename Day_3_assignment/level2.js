// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

let base = prompt('type base', 'enter number here');
let height = prompt('type height', 'enter number here');
    
let area = 0.5 * base * height
console.log('area: ' + area)



// Write a script that prompt the user to enter 
// side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)


// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let sideA = prompt('First Side', 'type the number');
let sideB = prompt('Second Side', 'type the number');
let sideC = prompt('Third Side', 'type the number');

const perimeter = firstSide + secondSide + thirdSide;
console.log('Perimeter: ' + perimeter)


// Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Length', 'enter the number');
let width = prompt('width', 'enter the width');

let areaOfRectangle = length * width;
console.log('Area of rectangle is ' + areaOfRectangle);

let perimeterOfRectangle = 2 * (length + width);
console.log('The perimeter of rectangle is ' + perimeterOfRectangle);


// Get radius using prompt and calculate the area of a circle
//  (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Raduis', 'enter the radius');

let pi = Math.PI || 3.14;
let areaOfCircle  = pi * radius * radius;
console.log('Area of Circle is ' + areaOfCircle);

let circumferenceOfCircle = 2 * pi * radius;
console.log('Circumference of Circle is ' + circumferenceOfCircle) 


// Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slope = 2;
const xIntercept = 1; // x-intercept is (1, 0)
const yIntercept = -2; // y-intercept is (0, -2)


// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope2 = (y2 - y1) / (x2 - x1);

console.log("The slope between the points (2, 2) and (6, 10) is " + slope2);


// Compare the slope of above two questions.
// The slope between the points (2, 2) and (6, 10) is 2, as calculated
//  in the previous question using the formula m = (y2 - y1) / (x2 - x1).

// The equation y = 2x - 2, given in the first question, is already in slope-intercept form,
//  where the coefficient of x is the slope. Therefore, the slope of this line is 2.


// As we can see, the slopes of both questions are the same, which is 2.



// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.  // No idea



// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = 40;
let rateOfHours = 28;
const weeklyEarning = hours * rateOfHours;
console.log('Your weekly earnings is: ' + weeklyEarning);


// If the length of your name is greater than 7 say, your name is long else say your name is short.
let lengthOfName = firstName.length;

if (lengthOfName > 7) console.log("your name is too long")
else console.log("your name is short");

// Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.


let myAge = 250
let yourAge = 25
// I am 225 years older than you.



// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

const currentYear = new Date().getFullYear(); // get the current year

const birthYear = prompt("What year were you born?", "ENTER YEAR "); // prompt the user to enter their birth year

let requiredAge = currentYear - birthYear; // calculate the user's age
let minimumAge = 18;

if (requiredAge >= minimumAge)
    console.log("You are eligible to drive");
else {
    const yearsToWait = minimumAge - requiredAge;
    console.log("will be allowed to drive after " + yearsToWait + "  years.")
}



// Write a script that prompt the user to enter number of years. 
// Calculate the number of seconds a person can live. Assume some one lives just hundred years
const years = prompt("Enter the number of years: ", "enter here");

const secondsPerYear = 365 * 24 * 60 * 60; // calculate the number of seconds per year
const maxAge = 100; // assume someone lives just 100 years

const totalSeconds = years * secondsPerYear; // calculate the total number of seconds

const secondsRemaining = (maxAge - years) * secondsPerYear; // calculate the number of seconds remaining if someone lives 100 years

console.log(`You have lived for ${totalSeconds}} seconds.`);

let time  = new Date().getTime()
console.log(time);

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm