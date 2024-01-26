import { EightBallApi } from "./app.js";

let eightInput = document.getElementById("eightInput");
let eightDiv = document.getElementById("eightDiv");
let eightRun = document.getElementById("eightRun");
let eightAppear = document.getElementById("eightAppear");
let eightAgain = document.getElementById("eightAgain");
let eightResult = document.getElementById("eightResult");

eightRun.addEventListener('click', async (event) => {
    if(eightInput.value !== "")
    {
        let result = await EightBallApi(eightInput.value);
        eightDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        eightAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        eightAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        eightRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        eightResult.textContent = result;
    }
})

eightAgain.addEventListener('click', (event) => {
    eightDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    eightAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    eightAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    eightRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    eightInput.value = "";
})