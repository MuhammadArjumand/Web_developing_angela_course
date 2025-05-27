function bmiCalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    return bmi;
}
var weight = prompt("Enter your weight in kilograms:");
var height = prompt("Enter your height in meters:");
var bmi = bmiCalculator(weight,height)
if (bmi<18.5){
    alert("you are underweight.");
} else if (bmi<=18.5 && bmi>=24.9) {
    alert("you have a normal weight");
} else {
    alert("you are overweight.");
}