// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
var instruct = alert("Please click the generate password button to start the process");

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
  // spc logic
//   if (spc, num, lowercase, uppercase === "yes", "Yes", "YES") {
//     apc = apc.concat(spc, num, lowercase, uppercase);
//     console.log(apc);
//   } else if (spc === "no", "No", "NO") {
//     console.log(apc);
//   } else (spc !== "yes", "Yes", "YES", "no", "No", "NO"); {
//     alert("Please enter yes or no");
//     console.log(apc);
//     return;
//   }

  //loop
  // for(generatePassword(i=0; i < passwordLength; i++)){
  //   var random = Math.floor(Math.random() * apc.length);
  //   console.log(random);
  //   password += apc[random];

  //   return password;
  // }


    // if (prompt("Do you want to include uppercase letters?")) {
    //   apc = apc.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    //   console.log(apc);
    // }
    // if (prompt("Do you want to include lowercase letters?")) {
    //   // add option for yes or no
    //   apc = apc.concat("abcdefghijklmnopqrstuvwxyz");
    //   console.log(apc);
    // }
    // if (prompt("Do you want to include numbers?")) {
    //   // add option for yes or no
    //   apc = apc.concat("0123456789");
    //   console.log(apc);
    // }
    // if (prompt("Do you want to include special characters?")) {
    //   // add option for yes or no
    //   apc = apc.concat("!@#$%^&*()_+");
    //   console.log(apc);
    // }

    // check if one of the uppercase or lowercase or numeric or special characters is there
//     if (apc.passwordLength === 0) {
//       alert("Please select at least one character type");
//       return;
//     }


//     // generate the password
//     for (var i = 0; i < passwordLength; i++) {
//       var random = Math.floor(Math.random() * apc.length);
//       password += apc[random];

//       return password;
//     }
// }

