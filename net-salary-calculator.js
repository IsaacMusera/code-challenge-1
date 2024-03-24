const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your salary", (salary) => {
  //Variables
  let paye = 0;
  let nhif = 0;
  let nssf = 0;

  if (salary <= 24000) {
    paye = (10 / 100) * salary;
  } else if (salary >= 24000 && salary < 32333) {
    paye = (25 / 100) * salary;
  } else if (salary >= 32334 && salary < 500000) {
    paye = (30 / 100) * salary;
  } else if (salary >= 500001 && salary < 800000) {
    paye = (32 / 100) * salary;
  } else if (salary >= 800000) {
    paye = (35 / 100) * salary;
  }

  //////////nhif
  if (salary < 5999) {
    nhif = 150;
  } else if (salary >= 6000 && salary < 7999) {
    nhif = 300;
  } else if (salary >= 8000 && salary < 11999) {
    nhif = 400;
  } else if (salary >= 12000 && salary < 14999) {
    nhif = 500;
  } else if (salary >= 15000 && salary < 19999) {
    nhif = 600;
  } else if (salary >= 20000 && salary < 24999) {
    nhif = 750;
  } else if (salary >= 25000 && salary < 29999) {
    nhif = 850;
  } else if (salary >= 30000 && salary < 34999) {
    nhif = 900;
  } else if (salary >= 35000 && salary < 39999) {
    nhif = 950;
  } else if (salary >= 40000 && salary < 44999) {
    nhif = 1000;
  } else if (salary >= 45000 && salary < 49999) {
    nhif = 1100;
  } else if (salary >= 50000 && salary < 59999) {
    nhif = 1200;
  } else if (salary >= 60000 && salary < 69999) {
    nhif = 1300;
  } else if (salary >= 70000 && salary < 79999) {
    nhif = 1400;
  } else if (salary >= 80000 && salary < 89999) {
    nhif = 15000;
  } else if (salary >= 90000 && salary < 99999) {
    nhif = 1600;
  } else if (salary >= 100000) {
    nhif = 1700;
  }
  ///////////nssf

  let nssf2 = (6 / 100) * salary;

  if (nssf2 <= 7000) {
    nssf = nssf2;
  } else {
    nssf = 7000;
  }

  var netSalary = salary - paye - nhif - nssf;

  console.log("Paye", paye);
  console.log("NHIF", nhif);
  console.log("NSSF", nssf);
  console.log("NET SALARY", netSalary);

  //Close
  readline.close();
});
