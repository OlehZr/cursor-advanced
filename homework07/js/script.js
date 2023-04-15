const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

function getMyTaxes(salary){
    console.log(this.tax * salary)
}
getMyTaxes.call(ukraine, 1500);


function getMiddleTaxes(){
    return this.tax * this.middleSalary
}
console.log(getMiddleTaxes.call(ukraine));


function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(ukraine));

function getMySalary(){
        setInterval(() => {
            const salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
            const taxes = this.tax * salary;
            const profit = salary - taxes;
            console.log({salary, taxes, profit});
        }, 10000)
}
getMySalary.call(ukraine)

// function getMySalary(count){
//     const result = {};
//     result.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
//     result.taxes = count.tax * result.salary;
//     result.profit = result.salary - result.taxes;
//     console.log(result)
// }
// setInterval(getMySalary, 10000, ukraine)