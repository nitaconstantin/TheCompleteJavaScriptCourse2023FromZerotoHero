/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const BMIMark = markWeight / (markHeight * markHeight);
const BMIJohn = johnWeight / (johnHeight * johnHeight);

const markHigherBMI =
  BMIMark > BMIJohn
    ? "Mark has the higher BMI:" + BMIMark
    : "John has the higher BMI:" + BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
