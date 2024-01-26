import { SumApi } from "./app.js";

let sumDiv = document.getElementById("sumDiv");
let sumAppear = document.getElementById("sumAppear");
let sumRun = document.getElementById("sumRun");
let sumAgain = document.getElementById("sumAgain");
let sumInput1 = document.getElementById("sumInput1");
let sumInput2 = document.getElementById("sumInput2");
let sum = document.getElementById("sum");

sumRun.addEventListener('click', async (event) => {
    if (sumInput1.value !== "" && sumInput2.value !== "") {
        let answer = await SumApi(sumInput1.value, sumInput2.value);
        sumDiv.className += " hidden";
        sumAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center"
        sum.textContent = answer;
        console.log(answer);
        sumRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        sumAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 ";
    }
})

sumAgain.addEventListener('click', (event) => {
    sumRun.className = "h-[120px] w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer";
    sumAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    sumDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    sumAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    sumInput1.value = "";
    sumInput2.value = "";
})