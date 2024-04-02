// Importing the 'readline' module to take input from the user
const readline = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout, 
  });
  // Asking the user for their speed
  readline.question("What is your speed? ", (speed) => {
  
    // Checking if the speed is within the required limit
    if (speed <= 70 && speed > 0) {
      console.log('OK'); // If speed is within the limit, print 'OK'
    } else {
      // Calculating the points to be deducted if speed exceeds the limit
      let point = (speed - 70) / 5;
      if (point > 12) {
        console.log('Your license has been suspended'); // If points exceed 12, print licence has been suspended
      } else {
        console.log("Your points are " + point); // print the calculated points
      }
    }
    readline.close();
  });
  