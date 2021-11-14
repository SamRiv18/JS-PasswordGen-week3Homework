// Assignment Code
var generateBtn = document.querySelector("#generate");

//holds boolean inputs from user
var confirmSymbolChar;
var confirmNumericChar;
var confirmLowerChar;
var confirmUpperChar;

var userChoices= [confirmSymbolChar, confirmNumericChar, confirmLowerChar, confirmUpperChar];

var valueSym;
var valueDwn;
var valueNum;
var valueUp;

var randomSymbol = '!"#$%&\'()*+,-./:;<=>@[\\]^-`{|}~';

// sets a object of the random functions
var rndmFunction= {
    symbol: getRandomSymbol,
    numeric: getRandomNumeric,
    lowerCase: getRandomLower,
    upperCase: getRandomUpper
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// random generators******************************************************************

function getRandomSymbol(){
    return randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
}

function getRandomNumeric(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);   
}




//*************************************************************************************

//gets input form the user 
function generatePassword(){

    var mypassword = "";

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
      
      
      var typesOfArray= [{confirmLowerChar},{confirmNumericChar},{confirmUpperChar}, {confirmSymbolChar}].filter
      (
          item => Object.values(item)[0]
      );
      
      
      if (!confirmSymbolChar && !confirmNumericChar && !confirmLowerChar && !confirmUpperChar){
          return 'must cumbit somthing';
        }

        for(i = 0; i < charLengthPrompt; i++){
            typesOfArray.forEach(prefrence => {
                var functionName = Object.keys(prefrence)[0];
                console.log('funName: ', functionName);
                mypassword += rndmFunction[functionName]();

            });
        }
        

};