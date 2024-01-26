import { NameTimeApi } from "./app.js";

let nTInput1 = document.getElementById("nTInput1");
let nTInput2 = document.getElementById("nTInput2");
let nTDiv = document.getElementById("nTDiv");
let nTAppear = document.getElementById("nTAppear");
let nTResult = document.getElementById("nTResult");
let nTRun = document.getElementById("nTRun");
let nTAgain = document.getElementById("nTAgain");

nTRun.addEventListener('click', async (event) => {
    if (nTInput1.value !== "" && nTInput2.value !== "") {
        let result = await NameTimeApi(nTInput1.value, nTInput2.value);
        nTDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        nTAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        nTAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        nTRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        nTResult.textContent = result;
    }
})

nTAgain.addEventListener('click', (event) => {
    nTDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center ";
    nTAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    nTInput1.value = "";
    nTInput2.value = "";
    nTAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    nTRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
})