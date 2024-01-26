const SumApi = async (numOne, numTwo) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/Sum/EnterTwoNumbers/${numOne}/${numTwo}`);
    const data = await promise.text();
    console.log(data);
}

SumApi(2, 2);

const SayHelloApi = async (name) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/SayHello/Greeting/${name}`);
    const data = await promise.text();
    console.log(data);
}

SayHelloApi("jayvon");

const Reverse2Api = async (num) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/ReverseItNumbers/EnterNumber/${num}`);
    const data = await promise.text();
    console.log(data);
}

Reverse2Api(12553);

const Reverse1Api = async (alpha) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/ReverseItAlphanumeric/EnterAlphanumeric/${alpha}`);
    const data = await promise.text();
    console.log(data);
}

Reverse1Api("ewfaf1131");

const RestaurantPickerApi = async (category) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/RestaurantPicker/Category/${category}`);
    const data = await promise.text();
    console.log(data);
}

RestaurantPickerApi("seafood");

const OddOrEvenApi = async (num) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/OddOrEven/EnterANumber/${num}`);
    const data = await promise.text();
    console.log(data);
}

OddOrEvenApi(15);

const NameTimeApi = async (name, time) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/NameAndTime/EnterYourName/${name}/EnterTimeYouWokeUp/${time}`);
    const data = await promise.text();
    console.log(data);
}

NameTimeApi("Jayvon", "15:00");

const MadLibApi = async (celebrityName, animal, bodyPart, nounThatEndsWithS, wholeNumberGreaterThan1, time, height, adjective, name, condiment) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/MadLib/EnterCelebrityName/${celebrityName}/EnterAnimal/${animal}/EnterBodyPart/${bodyPart}/EnterNounThatEndsWithS/${nounThatEndsWithS}/EnterWholeNumberGreaterThan1/${wholeNumberGreaterThan1}/EnterTime/${time}/EnterHeight/${height}/EnterAdjective/${adjective}/EnterName/${name}/EnterCondiment/${condiment}`);
    const data = await promise.text();
    console.log(data)
}

MadLibApi("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");

const GreaterOrLessApi = async (num1, num2) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/GreaterOrLessThan/EnterTwoNumbers/${num1}/${num2}`);
    const data = await promise.text();
    console.log(data);
}

GreaterOrLessApi("15", "12");

const EightBallApi = async (question) => {
    const promise = await fetch(`https://khuthjallforone.azurewebsites.net/EightBall/AskMeYesOrNoQuestion/${question}`);
    const data = await promise.text();
    console.log(data);
}

EightBallApi("Am I smart?");
