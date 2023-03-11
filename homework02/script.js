let N;
let M;
let sum = 0;
while (!(Number.isInteger(N))||N < 0) {
    N = +prompt('Введіть ціле число')
}
console.log(N)

while (!(Number.isInteger(M))||M < N) {
    M = +prompt("Введіть ціле число більше за попереднє")
}
console.log(M)

const evenNumbers = confirm("Пропускати парні числа?")
console.log(evenNumbers)

for(let i = N; i <= M; i++){
    if(!(i % 2 === 0)) { 
        sum = i + sum
    }
    else {
    if(evenNumbers === true) 
        sum = i + sum
}
}
console.log(sum)

const result = "Число N =" + N + "\nЧисло M =" + M + "\nПропускати парні числа? -" + evenNumbers + "\nСума =" + sum
alert(result)