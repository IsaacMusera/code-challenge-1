const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("What is your speed", (speed) => {
  
  //Login
    if (speed <= 70 && speed >0){
        console.log('OK')
    }else {
        let point = (speed -70)/5
        if(point > 12){
            console.log('Your lisence has been suspended')
        }
             else {
                console.log("Your points are" + point)
            }
        }
    
    
  
  
  
    //Close 
    readline.close();
  });
  