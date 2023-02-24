// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// Prompt the user to enter a month and year


// Write a program which tells the number of days in a month, now consider leap year

const month = prompt('Enter a month: ');
const year = prompt('Enter a year: ');
        
        // Create a Date object with the user input
 const date = new Date(`${year}-${month}-01`);
        
        // Get the number of days in the month
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        
        // Output the result to the console
 console.log(`There are ${lastDay} days in the month of ${date.toLocaleString('default', { month: 'long' })} ${year}.`);

