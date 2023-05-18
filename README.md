# node.js-password-generator

# About
Through this project, I've gained proficiency with if statements and logical thinking, as well as managing loops. Previously, I found these concepts challenging, but I now approach them with increased confidence.

Originally, I intended to use prompts to gather user input for the character type. However, upon reflection and experimentation, I discovered that allowing users to choose between accept and cancel provided a more efficient and intuitive experience. I also found that using a confirm window allowed me to use a single if statement to determine whether or not to include a character type. 

- Here is an example code of my though process for the character type:

```
 if (prompt("Do you want to include uppercase letters?")) {
      apc = apc.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      console.log(apc);
    }
    if (prompt("Do you want to include lowercase letters?")) {
      // add option for yes or no
      apc = apc.concat("abcdefghijklmnopqrstuvwxyz");
      console.log(apc);
    }
    if (prompt("Do you want to include numbers?")) {
      // add option for yes or no
      apc = apc.concat("0123456789");
      console.log(apc);
    }
    if (prompt("Do you want to include special characters?")) {
      // add option for yes or no
      apc = apc.concat("!@#$%^&*()_+");
      console.log(apc);
    }
```

# The Program
1. When the user clicks the generate password button, they are prompted to enter a number between 8 and 128.
2. If the user enters a number outside of the range, they are alerted to enter a number between 8 and 128.
3. If the user enters a number within the range, they are asked if they want to include lowercase, uppercase, numeric, and/or special characters.
4. If the user does not select any of the character types, they are alerted to select at least one character type.
    - the user can click cancel in the pop-up window to decline a character type
5. If the user selects at least one character type, a password is generated that matches the selected criteria and is displayed in the text box.
    - the user can also select multiple character types
6. If the user clicks the generate password button again, the password is replaced with a new password.


## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

# Link to Deployed Application
https://drewjordan414.github.io/node.js-password-generator/