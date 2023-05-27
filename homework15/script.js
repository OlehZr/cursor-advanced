import { averageValue } from "./scripts/hw01.js";
import { letters } from "./scripts/hw03.js";
import { pairs } from "./scripts/hw04.js";
import { average } from "./scripts/hw05.js";
import { bestStudent } from "./scripts/hw06.js";
import { myTaxes } from "./scripts/hw07.js";
import { stud } from "./scripts/hw08.js";
import { randomChinese } from "./scripts/hw11.js";

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#hw_1").innerHTML += averageValue;
    document.querySelector("#hw_3").innerHTML += letters;
    document.querySelector("#hw_4").innerHTML += pairs;
    document.querySelector("#hw_5").innerHTML += average;
    document.querySelector("#hw_6").innerHTML += bestStudent;
    document.querySelector("#hw_7").innerHTML += myTaxes;
    document.querySelector("#hw_8").innerHTML += stud.getInfo();
    document.querySelector("#hw_11").innerHTML += randomChinese;
});
