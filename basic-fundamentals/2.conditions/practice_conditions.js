// 1. Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2

let weight = 65;
let height = 1.76784;
let BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log("you are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("you are obese.");
}
console.log(BMI);
