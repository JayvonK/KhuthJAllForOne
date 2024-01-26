import { RestaurantPickerApi } from "./app.js";

let restaurantInput = document.getElementById("restaurantInput");
let restaurantDiv = document.getElementById("restaurantDiv");
let restaurantRun = document.getElementById("restaurantRun");
let restaurantAppear = document.getElementById("restaurantAppear");
let restaurantAgain = document.getElementById("restaurantAgain");
let restaurantResult = document.getElementById("restaurantResult");

restaurantRun.addEventListener('click', async (event) => {
    if(restaurantInput.value !== "")
    {
        let result = await RestaurantPickerApi(restaurantInput.value);
        restaurantDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
        restaurantAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
        restaurantAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
        restaurantRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
        restaurantResult.textContent = result;
    }
})

restaurantAgain.addEventListener('click', (event) => {
    restaurantDiv.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center";
    restaurantAppear.className = "lg:h-[275px] lg:w-[1066px] w-96 h-72 bg-[#161A30] flex items-center justify-center hidden";
    restaurantAgain.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16 hidden";
    restaurantRun.className = "lg:h-[120px] lg:w-[471px] bg-[#161A30] rounded-[100px] flex justify-center items-center hover:cursor-pointer w-56 h-16";
    restaurantInput.value = "";
})