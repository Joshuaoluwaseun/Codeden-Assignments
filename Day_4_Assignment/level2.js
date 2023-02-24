// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scores = 100;

if (scores >= 0 && scores < 50)  console.log('F')
else if(scores >= 50 && scores < 60) console.log('D');
else if (scores >= 60 && scores < 70)  console.log('C');
else if(scores >= 70 && scores < 80) console.log('B');
else if(scores >= 80 && scores < 100) console.log('A');
else  console.log('Invalid input, enter a number between 0 and 100');


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = 'january';

if (month === 'September'  || month === 'October' || month === 'October')
    console.log('The season is Autumn');
else if (month === 'December'  || month === 'January' ||month === 'February')
    console.log('The season is Winter');
else if (month === 'March'  || month === 'April' || month === 'May')
    console.log('The season is Spring');
else if (month === 'June'  || month === 'July' || month === 'August')
    console.log('The season is Summer');
else {
    console.log('Enter a valid month');
}


// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// prompt('What is the day today? ', 'enter day')
let dayEntered = prompt('What is the day today? ', 'enter day');

let day1 = 'Monday';
let day2 = 'Tuesday';
let day3 = 'Wednesday';
let day4 = 'Thursday';
let day5 = 'Friday';
let day6 = 'Saturday';
let day7 = 'Sunday';

if (dayEntered === day1 )
    console.log(`${day1} is a working day`);
else if (dayEntered === day2 )
    console.log(`${day2} is a working day`);
else if (dayEntered === day3 )
    console.log(`${day3} is a working day`);
else if (dayEntered === day4 )
    console.log(`${day4} is a working day`);
else if (dayEntered === day5 )
    console.log(`${day5} is a working day`);
else if (dayEntered === day6 )
    console.log(`${day6} is a Weekend`);
else if (dayEntered === day7 )
    console.log(`${day7} is a Weekend`);
else console.log('enter a valid day');