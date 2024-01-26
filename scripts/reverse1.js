import { Reverse1Api } from "./app.js";

let rvInput = document.getElementById("rvInput");
let rvDiv = document.getElementById("rvDiv");
let rvRun = document.getElementById("rvRun");
let rvAppear = document.getElementById("rvAppear");
let rvAgain = document.getElementById("rvAgain");
let rvResult = document.getElementById("rvResult");

rvRun.addEventListener('click', async (event) => {
    if(rvInput.value !== "")
    {
        let result = await Reverse1Api(rvInput.value);
        rvDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        rvAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        rvAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        rvRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        rvResult.textContent = result;
    }
})

rvAgain.addEventListener('click', (event) => {
    rvDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    rvAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    rvAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    rvRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    rvInput.value = "";
})