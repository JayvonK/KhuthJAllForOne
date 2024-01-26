import { Reverse1Api } from "./app.js";

let rv2Input = document.getElementById("rv2Input");
let rv2Div = document.getElementById("rv2Div");
let rv2Run = document.getElementById("rv2Run");
let rv2Appear = document.getElementById("rv2Appear");
let rv2Again = document.getElementById("rv2Again");
let rv2Result = document.getElementById("rv2Result");

rv2Run.addEventListener('click', async (event) => {
    if(rv2Input.value !== "")
    {
        let result = await Reverse1Api(rv2Input.value);
        rv2Div.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        rv2Appear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        rv2Again.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        rv2Run.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        rv2Result.textContent = result;
    }
})

rv2Again.addEventListener('click', (event) => {
    rv2Div.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    rv2Appear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    rv2Again.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    rv2Run.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    rv2Input.value = "";
})