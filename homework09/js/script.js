// document.addEventListener("DOMContentLoaded", function(){

    function generateBlocks(){
        let element = document.querySelector('#blocks');
        element.innerHTML = "";
        
        for (let i = 0; i < 25; i++){
            let block = document.createElement("div");
            block.style.background = `rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            
            element.append(block);
        }
    }
    generateBlocks();
    
    function generateBlocksInterval(){
        setInterval(generateBlocks, 1000);
    }
    generateBlocksInterval();

// });