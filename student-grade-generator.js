// Importing the 'readline' module to take input from the user
const readline = require("readline").createInterface({
  input: process.stdin, 
  output: process.stdout, 
});

// Asking the user for their score
readline.question("What is your score? ", (score) => {

  // Grading according to input of the user
  
  // If score is between 80 and 100 , Grade A
  if (score > 79 && score <= 100) {
    console.log(`You have Grade A!`);
  }
  // If score is between 60 and 79 , Grade B
  else if (score >= 60 && score < 79 ){
    console.log('You have Grade B!');
  }
  // If score is between 49 and 59 , Grade C
  else if (score >= 49 && score < 59){
    console.log('You have Grade C!');
  }
  // If score is between 40 and 49 , Grade D
  else if (score >= 40 && score < 49){
    console.log ('You have Grade D!');
  }
  // If score is between 0 and 39 , Grade E
  else if (score >=0 && score < 40){
    console.log ('You have Grade E!');
  }
  // If score is not there write valid marks
  else {
    console.log ('Please enter valid marks!');
  }

  
  readline.close();
});
