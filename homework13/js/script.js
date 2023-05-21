function* createIdGenerator(){
    let id = 0;
    for(let i = 0; i < Infinity; i++){
        id += 1;
        yield id;
    };
};
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);


const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const newTitle = document.querySelector('.title');

function* newFontGenerator(size){
    let initialSize = size;
    for(let i = 0; i < Infinity; i++){
        const sizeValue = yield initialSize;
        if(sizeValue === "up"){
            initialSize += 2;
            newTitle.style.fontSize = initialSize + "px";
        };
        if(sizeValue === "down"){
            initialSize -= 2;
            newTitle.style.fontSize = initialSize + "px";
        };
    };
};
const fontGenerator = newFontGenerator(14);
btnUp.addEventListener(('click'), () => {
    fontGenerator.next("up");
});
btnDown.addEventListener(('click'), () => {
    fontGenerator.next("down");
});