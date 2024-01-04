const weight = document.querySelector("#weight");
const heigth = document.querySelector("#height");
let para = document.querySelector("#paragraph");

function bmiCalculation(inp1, inp2){
    inp1 = weight.value;
    inp2 = heigth.value;
    const bmi = Math.floor(inp1 / Math.pow(inp2,2));
    return bmi;
}


function feetInMeter (heigthInFeet){
    heigthInFeet = heigthInFeet * 0.3048;
    return heigthInFeet;
}


document.querySelector("#bmiForm").addEventListener("submit", function(event){
    event.preventDefault();
    para.textContent = "Your Bmi Is " + bmiCalculation();
    console.log(para);
});

document.querySelectorAll("#converter input")[1].addEventListener("click", function(e){
    e.preventDefault();
    const ans = feetInMeter(document.querySelector("#heightInM").value);
    document.querySelector("#ansConverter").textContent = "Height in M is " + ans;
});

document.querySelector("#converter .btn2").addEventListener("click", function(e){
    e.preventDefault();
    const ans = feetInMeter(document.querySelector("#heightInM").value);
    ans.select;
    navigator.clipboard.writeText(ans);


});
