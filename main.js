"use strict";
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
console.log("\n");
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85));
console.log(assignGrade(55));
console.log("\n");
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12));
console.log(categorizeAge(18));
console.log(categorizeAge(25));
