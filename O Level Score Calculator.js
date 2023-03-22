// Terms of Use:
const termsOfUse = prompt("Please enter your marks out of 100, or as a percentage. Type 'y' to agree.")

// Verification of TOS and score prompts:
if (termsOfUse === 'y') {
const englishScoree = prompt("What is your english score?");
const motherTongueScoree = prompt("What is your mother tongue score?");
const mathScoree = prompt("What is your math score?");
const chemistryScoree = prompt("What is your chemistry score?");
const physicsScoree = prompt("What is your physics score?");
const biologyScoree = prompt("What is your biology score?");
const historyScoree = prompt("What is your history score?");

const englishScore = englishScoree; // All out of 100
const motherTongueScore = motherTongueScoree; 
const mathScore = mathScoree;
const chemistryScore = chemistryScoree;
const physicsScore = physicsScoree;
const biologyScore = biologyScoree;
const historyScore = historyScoree;

// Points Declarations:
let englishPoints = "";
let motherTonguePoints = "";
let mathPoints = "";
let chemistryPoints = "";
let physicsPoints = "";
let biologyPoints = "";
let historyPoints = "";

// Score Calculator:

if (englishScore >= 75 && englishScore <= 100) {
    englishPoints = 1;
} else if (englishScore >= 70 && englishScore < 75) {
    englishPoints = 2;
} else if (englishScore >= 65 && englishScore < 70) {
    englishPoints = 3;
} else if (englishScore >= 60 && englishScore < 65) {
    englishPoints = 4;
} else if (englishScore >= 55 && englishScore < 60) {
    englishPoints = 5;
} else if (englishScore >= 50 && englishScore < 55) {
    englishPoints = 6;
} else if (englishScore >= 45 && englishScore < 50) {
    englishPoints = 7;
} else if (englishScore >= 40 && englishScore < 45) {
    englishPoints = 8;
} else if (englishScore < 40) {
    englishPoints = 9;
} else {
    console.log("Error, re-enter english marks.")
}

if (motherTongueScore >= 75 && motherTongueScore <= 100) {
    motherTonguePoints = 1;
} else if (motherTongueScore >= 70 && motherTongueScore < 75) {
    motherTonguePoints = 2;
} else if (motherTongueScore >= 65 && motherTongueScore < 70) {
    motherTonguePoints = 3;
} else if (motherTongueScore >= 60 && motherTongueScore < 65) {
    motherTonguePoints = 4;
} else if (motherTongueScore >= 55 && motherTongueScore < 60) {
    motherTonguePoints = 5;
} else if (motherTongueScore >= 50 && motherTongueScore < 55) {
    motherTonguePoints = 6;
} else if (motherTongueScore >= 45 && motherTongueScore < 50) {
    motherTonguePoints = 7;
} else if (motherTongueScore >= 40 && motherTongueScore < 45) {
    motherTonguePoints = 8;
} else if (motherTongueScore < 40) {
    motherTonguePoints = 9;
} else {
    console.log("Error, re-enter mother tongue marks.")
}

if (mathScore >= 75 && mathScore <= 100) {
    mathPoints = 1;
} else if (mathScore >= 70 && mathScore < 75) {
    mathPoints = 2;
} else if (mathScore >= 65 && mathScore < 70) {
    mathPoints = 3;
} else if (mathScore >= 60 && mathScore < 65) {
    mathPoints = 4;
} else if (mathScore >= 55 && mathScore < 60) {
    mathPoints = 5;
} else if (mathScore >= 50 && mathScore < 55) {
    mathPoints = 6;
} else if (mathScore >= 45 && mathScore < 50) {
    mathPoints = 7;
} else if (mathScore >= 40 && mathScore < 45) {
    mathPoints = 8;
} else if (mathScore < 40) {
    mathPoints = 9;
} else {
    console.log("Error, re-enter math marks.")
}

if (chemistryScore >= 75 && chemistryScore <= 100) {
    chemistryPoints = 1;
} else if (chemistryScore >= 70 && chemistryScore < 75) {
    chemistryPoints = 2;
} else if (chemistryScore >= 65 && chemistryScore < 70) {
    chemistryPoints = 3;
} else if (chemistryScore >= 60 && chemistryScore < 65) {
    chemistryPoints = 4;
} else if (chemistryScore >= 55 && chemistryScore < 60) {
    chemistryPoints = 5;
} else if (chemistryScore >= 50 && chemistryScore < 55) {
    chemistryPoints = 6;
} else if (chemistryScore >= 45 && chemistryScore < 50) {
    chemistryPoints = 7;
} else if (chemistryScore >= 40 && chemistryScore < 45) {
    chemistryPoints = 8;
} else if (chemistryScore < 40) {
    chemistryPoints = 9;
} else {
    console.log("Error, re-enter chemistry marks.")
}

if (physicsScore >= 75 && physicsScore <= 100) {
    physicsPoints = 1;
} else if (physicsScore >= 70 && physicsScore < 75) {
    physicsPoints = 2;
} else if (physicsScore >= 65 && physicsScore < 70) {
    physicsPoints = 3;
} else if (physicsScore >= 60 && physicsScore < 65) {
    physicsPoints = 4;
} else if (physicsScore >= 55 && physicsScore < 60) {
    physicsPoints = 5;
} else if (physicsScore >= 50 && physicsScore < 55) {
    physicsPoints = 6;
} else if (physicsScore >= 45 && physicsScore < 50) {
    physicsPoints = 7;
} else if (physicsScore >= 40 && physicsScore < 45) {
    physicsPoints = 8;
} else if (physicsScore < 40) {
    physicsPoints = 9;
} else {
    console.log("Error, re-enter physics marks.")
}

if (biologyScore >= 75 && biologyScore <= 100) {
    biologyPoints = 1;
} else if (biologyScore >= 70 && biologyScore < 75) {
    biologyPoints = 2;
} else if (biologyScore >= 65 && biologyScore < 70) {
    biologyPoints = 3;
} else if (biologyScore >= 60 && biologyScore < 65) {
    biologyPoints = 4;
} else if (biologyScore >= 55 && biologyScore < 60) {
    biologyPoints = 5;
} else if (biologyScore >= 50 && biologyScore < 55) {
    biologyPoints = 6;
} else if (biologyScore >= 45 && biologyScore < 50) {
    biologyPoints = 7;
} else if (biologyScore >= 40 && biologyScore < 45) {
    biologyPoints = 8;
} else if (biologyScore < 40) {
    biologyPoints = 9;
} else {
    console.log("Error, re-enter biology marks.")
}

if (historyScore >= 75 && historyScore <= 100) {
    historyPoints = 1;
} else if (historyScore >= 70 && historyScore < 75) {
    historyPoints = 2;
} else if (historyScore >= 65 && historyScore < 70) {
    historyPoints = 3;
} else if (historyScore >= 60 && historyScore < 65) {
    historyPoints = 4;
} else if (historyScore >= 55 && historyScore < 60) {
    historyPoints = 5;
} else if (historyScore >= 50 && historyScore < 55) {
    historyPoints = 6;
} else if (historyScore >= 45 && historyScore < 50) {
    historyPoints = 7;
} else if (historyScore >= 40 && historyScore < 45) {
    historyPoints = 8;
} else if (historyScore < 40) {
    historyPoints = 9;
} else {
    console.log("Error, re-enter history marks.")
}

console.log("The following are your points in the sequence of English, Mother Tongue, Math, Chemistry, Physics, Biology and History")

console.log(`The following is your subject points: ${englishPoints}, ${motherTonguePoints}, ${mathPoints}, ${chemistryPoints}, ${physicsPoints}, ${biologyPoints}, ${historyPoints}`)

console.log("You can add your points together: one language + one math/science + one humanity + next three best subjects")
} else {
    console.log("We are sorry. We can't process your data because you didn't agree to the terms of use. Please re-run the code.")
}