// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCletter = "abcdefghijklmnopqrstuvwxyz"
var upCletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Num = "0123456789"
var symb = "({';[])-*&^%$#@!~`<>,."


function randomLowerCase() {
  console.log(lowCletter[Math.floor(Math.random() * lowCletter.length)]);
}

function randomUpperCase() {
  console.log(upCletter[Math.floor(Math.random() * 26)]);
}

function randomNumber() {
  console.log(Num[Math.floor(Math.random() * Num.length)]);
}

function randomSymbol() {
  console.log(symb[Math.floor(Math.random() * symb.length)]);
}


var howManyChar = prompt("How many characters do you want?")

var wantLowCase = confirm("Do you want lower case letters?")

var wantUpperCase = confirm("Do you want upper case letters?")

var wantNumbers = confirm("Do you want numbers?")

var wantSymbols = confirm("Do you want symbols?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);