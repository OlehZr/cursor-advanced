function getSum(sum){
    let a = 18*10
    let b = 1.5*10
    let result = sum - (a + b)
    return result
}

function getRandomNumber(a,b){
    //Варіант2 return Math.floor(Math.random() * 10)

    let min = Math.min(a,b);
    let max = Math.max(a,b);
    return Math.floor(Math.random() * (max - min) + min)
}

function deleteLetters(letter, string){
    let letters = string.replaceAll(letter, "");
    return letters
}

function changeLetter(name){
    let str = name.toLowerCase();
    return str.charAt(0).toUpperCase() + str.substring(1)
}

function getRandomPassword(number = 8){
    let pass = "";
    for (i = 0; i < number; i++){
        pass += Math.floor(Math.random() * 10);
        //Варіант2 pass = pass + String(Math.floor(Math.random() * 10));
    }
    return pass
}

function isPalyndrom(word){
    return word == word.split("").reverse().join("");
}

document.writeln(`Функція No1: ${changeLetter("олЕг")}`);
document.writeln(`<br><br> Функція No2: ${getSum(1000)}`);
document.writeln(`<br><br> Функція No3: ${getRandomNumber(1,10)}`);
document.writeln(`<br><br> Функція No4: ${deleteLetters("a", "blablabla")}`);
document.writeln(`<br><br> Функція No5: ${getRandomPassword()}`); 
document.writeln(`<br><br> Функція No6: ${isPalyndrom("мадам")}`); 