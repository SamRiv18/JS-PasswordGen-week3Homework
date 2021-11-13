// Assignment Code
var generateBtn = document.querySelector("#generate");

//holds boolean inputs from user
var confirmSymbolChar;
var confirmNumericChar;
var confirmLowerChar;
var confirmUpperChar;

var randomSymbol = '!"#$%&\'()*+,-./:;<=>@[\\]^-`{|}~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// random generators******************************************************************
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);   
}

function getRandomNumeric(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    return randomSymbol [Math.floor(Math.random()*randomSymbol.length)];
}

//*************************************************************************************

//gets input form the user 
function generatePassword(){

    //first prompt for the user must be between 8-128 characters long
    var charLengthPrompt = window.prompt("How many charecters would you like your password to contain?");
  
    // closes program if user hits cancel on the first promt
    if (!charLengthPrompt){
        return;
    }
  
    else if (charLengthPrompt < 8){
        window.alert("Password length must be at least 8 characters.")
        return;
      }
  
    else if(charLengthPrompt > 128){
      window.alert("Password length must be less than 128 characters.")
      return;
    }
  
    else if(isNaN(charLengthPrompt)){
      window.alert("Password length must be provided as a number.")
      return;
    }
  
    else{
       confirmSymbolChar = window.confirm("Click OK to confirm including special charracters");
       confirmNumericChar = window.confirm("Click OK to confirm including numeric charracters");
       confirmLowerChar = window.confirm("Click OK to confirm including Lowercase charracters");
       confirmUpperChar = window.confirm("Click OK to confirm including Upppercase charracters");
       
      }
};