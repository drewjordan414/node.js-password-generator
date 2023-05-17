// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
var instruct = prompt("Enter a password between 8 and 128 characters long");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// listen to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // add an empty array to store the password
  var apc = [];
  var password = '';
  var passwordLength = prompt("Enter a password between 8 and 128 characters long");
  // loop to check if the password is between 8 and 128 chars
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128");
    return;
  }
}

// confirm to include uppercase letters, lowercase letters, numeric, special characters
if(confirm("Do you want to include uppercase letters?")) {
  apc = apc.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
} 
if(confirm("Do you want to include lowercase letters?")) {
  apc = apc.concat("abcdefghijklmnopqrstuvwxyz");
}
if (confirm("Do you want to include numbers?")) {
  apc = apc.concat("0123456789");
}
if (confirm("Do you want to include special characters?")) {
  apc = apc.concat("!@#$%^&*()_+");
}

// check if one of the uppercase or lowercase or numeric or special characters is there



// generate the password

























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
