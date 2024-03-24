const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your score", (score) => {

//Login
  if (score > 79 && score <= 100) {
    console.log(`You have Grade A!`);
  }else if (score >= 60 && score < 79 ){
    console.log('You have grade B!')
  }
  else if (score >= 49 && score < 59){
    console.log('You have grade C!')
  }
  else if (score >= 40 && score < 49){
    console.log ('You have grade D!')
  }
  else if (score >=0 && score < 40){
    console.log ('You have grade E!')
  }
  else {
    console.log ('please enter valid marks')
  }
  



  //Close 
  readline.close();
});
