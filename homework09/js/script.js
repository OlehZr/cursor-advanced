// document.addEventListener("DOMContentLoaded", function(){

    function generateBlocks(){
        let element = document.querySelector('#blocks');
        // element.innerHTML = "";
        
        for (let i = 0; i <= 25; i++){
            let block = document.createElement("div");
            block.style.background = generateColor();
            // block.style.background = `rgb(${Math.floor(Math.random() * 255)}, 
            // ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            block.classList.add('box');
            element.append(block);
        }
    }
    generateBlocks();

    function generateColor(){
        let boxes = document.querySelectorAll('.box')

        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.background = `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        }
    }

    function generateBlocksInterval(){
        setInterval(generateColor, 1000);
    }
    generateBlocksInterval();

// });