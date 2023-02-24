// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// c eg. 20120-01-02 07:05

const now = new Date("2020-01-02 07:05");
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';  // determine if it's AM or PM
const twelveHours = hours % 12 || 12; // convert to 12-hour format

const timeString = `${year}-${month}-${day}  ${twelveHours}:${minutes} ${ampm}`;
console.log(timeString);
 