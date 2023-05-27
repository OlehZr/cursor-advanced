function changeLetter(name){
    let str = name.toLowerCase();
    return str.charAt(0).toUpperCase() + str.substring(1)
}
let letters = changeLetter('олЕг');
export { letters }