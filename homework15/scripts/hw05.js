const getAverage = (...numbers) => {
    const numbersFilter = numbers.filter((number) =>
        Number.isInteger(number));
    const sumArray = numbersFilter.reduce((total, current) =>
        total + current);
    const averageSum = sumArray / numbersFilter.length;
        return averageSum
}
let average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
export {average}