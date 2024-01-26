import { OddOrEvenApi } from "./app.js";

let oddInput = document.getElementById("oddInput");
let oddDiv = document.getElementById("oddDiv");
let oddRun = document.getElementById("oddRun");
let oddAppear = document.getElementById("oddAppear");
let oddAgain = document.getElementById("oddAgain");
let oddResult = document.getElementById("oddResult");

oddRun.addEventListener('click', async (event) => {
    if (oddInput.value !== "") {
        let result = await OddOrEvenApi(oddInput.value);
        oddDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        oddAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        oddResult.textContent = result;
        oddAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        oddRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    }
})

oddAgain.addEventListener('click', (event) => {
    oddDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    oddAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    oddAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    oddRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    oddInput.value = "";
})