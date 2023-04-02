const myArray = []
const getRandomArray = function getNumbers(length, min, max){
    for(i = 0; i < length; i++){ 
    let randomNumbers = Math.floor(Math.random() * (max - min) + min);
    myArray.push(randomNumbers);
    }
    return myArray
}
console.log(...getRandomArray(15, 1, 100))

const getAverage = (...numbers) => {
    const numbersFilter = numbers.filter((number) =>
        Number.isInteger(number));
    const sumArray = numbersFilter.reduce((total, current) =>
        total + current);
    const averageSum = sumArray / numbersFilter.length;
        return averageSum
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

const filterEvenNumbers = (...numbers) =>{
    const pairNumbers = numbers.filter((number) =>
    number % 2 !== 0);
    return pairNumbers
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

const getDividedByFive = (...numbers) =>{
    const byFiveNumber = numbers.filter((number) =>
    number % 5 === 0);
    return byFiveNumber
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

const countPositiveNumbers = (...numbers) =>{
    const countNumbers = numbers.filter((number) =>
    number > 0
    );
    return countNumbers.length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

const badWords = ['shit', 'fuck']
function replaceBadWords(string){
    const splitBadWord = string.split(' ');
    const replaceBad = splitBadWord.map((word) =>{
        for(i = 0; i < badWords.length; i++){
        word = word.replace(badWords[i], "****")
    }
    return word
});
    const goodWord = replaceBad.join(' ');
    return goodWord
}
console.log(replaceBadWords("Holly shit"))
