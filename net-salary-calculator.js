// calculates the net salary of an employee
function calculateNetSalary(basicSalary, benefits) {

  
  const taxRate = 0.2
 
  const nhifRate = 0.1
 
  const nssfRate = 0.2

  // Calculate gross salary 
  const grossSalary = basicSalary + benefits;

  // Calculate tax by multiplying gross salary with tax rate
  const tax = grossSalary * taxRate;
  // Calculate NHIF deductions by multiplying gross salary with NHIF rate
  const nhif = grossSalary * nhifRate;
  // Calculate NSSF deductions by multiplying gross salary with NSSF rate
  const nssf = grossSalary * nssfRate;

  // Calculate net salary by subtracting tax, NHIF, and NSSF deductions from gross salary
  const netSalary = grossSalary - (tax + nhif + nssf);

  // Return an object containing all the calculated values
  return {
    grossSalary, 
    tax, 
    nhif, 
    nssf, 
    netSalary 
  };
}

// Set basic salary and benefits for an employee
const basicSalary = 59000; 
const benefits = 4500; 

// Calculate net salary 
const result = calculateNetSalary(basicSalary, benefits);

// Printing the results
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary); 
console.log("Tax:", result.tax); 
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf); 
console.log("Net Salary:", result.netSalary); 