// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // first prompt for the user. Must be between 8-128 charecters long
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
      window.confirm("Click OK to confirm including special charracters")
      return true;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
