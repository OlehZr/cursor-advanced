const samsung = 15.678;
const apple = 123.965;
const xiaomi = 90.2345;
const cash = 500;

const maxPrice = Math.max(samsung,apple,xiaomi);
console.log ("Максимальне число", maxPrice);

const minPrice = Math.min(samsung,apple,xiaomi)
console.log ("Мінімальне число", minPrice);

const price = samsung + apple + xiaomi;
console.log("Вартість", price);

const samsungFloor = Math.floor(samsung);
const appleFloor = Math.floor(apple);
const xiaomiFloor = Math.floor(xiaomi);

const priceFloor = samsungFloor + appleFloor + xiaomiFloor;
console.log("Округлення", priceFloor);

const hundredsPrice = Math.floor(priceFloor/100)*100;
console.log("Округлення до сотень", hundredsPrice);

const booleanPrice = priceFloor / 2 ? true : false;
console.log("Булеве значення:", booleanPrice);

const sum = cash - price;
console.log("Сума решти:", sum);

const averageValue = price / 3;
console.log("Середнє значення:", averageValue.toFixed(2))

const discount = Math.random();
console.log("Знижка", discount.toFixed(2));

const sumPay = price - discount;
console.log("Сума до оплати", sumPay.toFixed(2));

const profit = (price / 2) - discount;
console.log("Прибуток", profit.toFixed(2));
