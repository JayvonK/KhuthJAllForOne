import { SayHelloApi } from "./app.js";

let helloInput = document.getElementById("helloInput");
let helloDiv = document.getElementById("helloDiv");
let helloRun = document.getElementById("helloRun");
let helloAppear = document.getElementById("helloAppear");
let helloAgain = document.getElementById("helloAgain");
let helloResult = document.getElementById("helloResult");

helloRun.addEventListener('click', async (event) => {
    if(helloInput.value !== "")
    {
        let result = await SayHelloApi(helloInput.value);
        helloDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        helloAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        helloAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        helloRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        helloResult.textContent = result;
    }
})

helloAgain.addEventListener('click', (event) => {
    helloDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    helloAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    helloAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    helloRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    helloInput.value = "";
})