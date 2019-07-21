let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

SumOfSalaries=0
for (let key in salaries){
    SumOfSalaries+=salaries[key]
}

console.log(SumOfSalaries)