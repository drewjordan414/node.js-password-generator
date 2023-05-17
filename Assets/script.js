// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  return "hello"
}

// ask for length of the password
  // prompt
// check the length provided by the user is a number in between 8 and 128
// confirm : 4 for uppercase, lowercase, numeric, special characters
  // save it to a variable
// check if one of the uppercase or lowercase or numeric or special characters is there
  // combine the confirmed arrays
// create an array for uppercase letters, lowercase letters, numeric, special characters
// create an array variable to have a new password with length provided by the user []
// random item form combined array and push it to new password array and do this step up to the length of user input
// return the new password
