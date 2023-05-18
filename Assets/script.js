// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// instructs the user how to operate the password generator
var instruct = alert("Please click the generate password button to start the process");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  // connecting the password to the id password in the html
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  // password varible is equal to the generatePassword function
  var password = generatePassword()
  // connecting the password to the id password in the html
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}
// listen to generate button
generateBtn.addEventListener("click", writePassword);
// generate password function
function generatePassword() {
  // add an empty array to store the password
  var password = ''; // empty string to store the password
  // line 36,,,, you might be giving me some trouble
  var passwordLength = prompt("Enter a length between 8 and 128 characters long"); 
  // loop to check if the password is between 8 and 128 chars
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128");
    console.log(passwordLength);
    return;
  }
  apc = ''; // all possible characters
  if (confirm("Do you want to include special characters?")) {
    apc += '!@#$%^&*()_+';
  }
  if (confirm("Do you want to include numbers?")) {
    apc += '0123456789';
  }
  if (confirm("Do you want to include lowercase letters?")) {
    apc += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (confirm("Do you want to include uppercase letters?")) {
    apc += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (apc === ''){
    alert("Please select at least one character type");
    return;
  }
  for (var i=0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * apc.length);
    password += apc[random];
  }
  return password;
}

