const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};

function getMiddleTaxes(){
    return this.tax * this.middleSalary
};

let myTaxes = getMiddleTaxes.call(ukraine);
export {myTaxes}