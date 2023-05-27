function getRandomChinese(length){
    return new Promise((resolve) => {
        let result = "";
        let i = 0;
        while(i < length){ 
            i++;       
            const sign = Date.now().toString().slice(-5);
            let converted = String.fromCharCode(sign);
            result += converted;
            setTimeout(function() { 
                resolve(result);
            }, i*50);
        };
    }).then((result) => (result))
};
let randomChinese = getRandomChinese(4);
export { randomChinese };
