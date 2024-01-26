import { GreaterOrLessApi } from "./app.js";

let greaterDiv = document.getElementById("greaterDiv");
let greaterAppear = document.getElementById("greaterAppear");
let greaterResult = document.getElementById("greaterResult");
let greaterRun = document.getElementById("greaterRun");
let greaterAgain = document.getElementById("greaterAgain");
let greaterInput1 = document.getElementById("greaterInput1");
let greaterInput2 = document.getElementById("greaterInput2");


greaterRun.addEventListener('click', async (event) => {
    if(greaterInput1.value !== "" && greaterInput2.value !== "")
    {
        let result = await GreaterOrLessApi(greaterInput1.value, greaterInput2.value);
        greaterDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        greaterAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        greaterResult.textContent = result;
        greaterAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 ";
        greaterRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    }
})

greaterAgain.addEventListener('click', (event) => {
        greaterInput1.value = "";
        greaterInput2.value = "";
        greaterDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        greaterAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        greaterAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        greaterRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 ";

})