function sumSalaries(x) {

    let sum = 0;
    for (let salary of Object.values(x)) {
      sum += salary;
    }
  
    return sum;
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) );