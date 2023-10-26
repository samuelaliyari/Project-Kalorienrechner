const heightInput = document.body.querySelector("#bodyHeight");
const ageInput = document.body.querySelector("#age");
const weightInput = document.body.querySelector("#weight");
// const genderInput = document.body.querySelector("form input[type='radio']");
const palInput = document.body.querySelector("#movement");
const submitButton = document.body.querySelector("button");
const grundCal = document.body.querySelector("#baseCal");
const grundJ = document.body.querySelector("#baseJ");
const totalCal = document.body.querySelector("#totalCal");
const totalJ = document.body.querySelector("#totalJ");
const maleCheck = document.body.querySelector("#male");
const femaleCheck = document.body.querySelector("#female");


function calculate() {
    event.preventDefault();
    const male = maleCheck.checked;
    const female = femaleCheck.checked;
    const pal = Number(palInput.value);
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const age = Number(ageInput.value);
    
    if (male) {
        let grundCalorie = Math.floor(66.47 + (13.7 * weight) + (5 * height) - (6.8 * age)) / 1000;
        grundCal.textContent = parseFloat(grundCalorie).toFixed(2)
        totalCal.textContent = parseFloat(pal * grundCalorie).toFixed(2)
        grundJ.textContent = parseFloat(grundCalorie * 4.184).toFixed(2)
        totalJ.textContent = parseFloat(pal * grundCalorie * 4.184).toFixed(2)
        
    }
    if (female) {
        let grundCalorie = Math.floor(655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) / 1000;
        grundCal.textContent =  parseFloat(grundCalorie).toFixed(2)
        totalCal.textContent = parseFloat(pal * grundCalorie).toFixed(2)
        grundJ.textContent = parseFloat(grundCalorie * 4.184).toFixed(2)
        totalJ.textContent = parseFloat(pal * grundCalorie * 4.184).toFixed(2)
    }
    
}