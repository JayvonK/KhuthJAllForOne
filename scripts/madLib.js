import { MadLibApi } from "./app.js";

let madLibInput1 = document.getElementById("madLibInput1");
let madLibInput2 = document.getElementById("madLibInput2");
let madLibInput3 = document.getElementById("madLibInput3");
let madLibInput4 = document.getElementById("madLibInput4");
let madLibInput5 = document.getElementById("madLibInput5");
let madLibInput6 = document.getElementById("madLibInput6");
let madLibInput7 = document.getElementById("madLibInput7");
let madLibInput8 = document.getElementById("madLibInput8");
let madLibInput9 = document.getElementById("madLibInput9");
let madLibInput10 = document.getElementById("madLibInput10");
let madLibDiv = document.getElementById("madLibDiv");
let madLibRun = document.getElementById("madLibRun");
let madLibAppear = document.getElementById("madLibAppear");
let madLibAgain = document.getElementById("madLibAgain");
let madLibResult = document.getElementById("madLibResult");

madLibRun.addEventListener('click', async (event) => {
    if(madLibInput1.value !== "" && madLibInput2.value !== "" && madLibInput3.value !== "" && madLibInput4.value !== "" && madLibInput5.value !== "" && madLibInput6.value !== "" && madLibInput7.value !== "" && madLibInput8.value !== "" && madLibInput9.value !== "" && madLibInput10.value !== "")
    {

        let result = await madLibAgain(madLibInput.value);
        madLibDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        madLibAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        madLibAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        madLibRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        madLibResult.textContent = result;
    }
})

madLibAgain.addEventListener('click', (event) => {
    madLibDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    madLibAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    madLibAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    madLibRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    madLibInput.value = "";
})