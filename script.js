// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCletter = "abcdefghijklmnopqrstuvwxyz"
var upCletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Num = "0123456789"
var symb = "({';[])-*&^%$#@!~`<>,."
var passwordString = ""

var howManyChar = prompt("How many characters do you want?")

var wantLowCase = confirm("Do you want lower case letters?")

var wantUpperCase = confirm("Do you want upper case letters?")

var wantNumbers = confirm("Do you want numbers?")

var wantSymbols = confirm("Do you want symbols?")

function generatePassword() {
  if(wantLowCase) {
    listAllChar = listAllChar.concat(lowCletter)
  }
  if(wantUpperCase) {
    listAllChar = listAllChar.concat(upCletter);
  }
  if(wantNumbers) {
    listAllChar = listAllChar.concat(Num)
  }
  if(wantSymbols) {
    listAllChar = listAllChar.concat(symb);
  
  }
  // Next, I want to be able to create this password using the variable I created and function
var newPassword = ""
// This loop will loop x amount of times
  for (var i = 0; i < howManyChar; i++) {
    
    // Need a variable that grabs a random character from the list created using the function and loop
    var grabRandomFromList = listAllChar[Math.floor(Math.grabRandomFromList() * listAllChar.length)]
    newPassword = newPassword.concat(grabRandomFromList)
  }

  return newPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);