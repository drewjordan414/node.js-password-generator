# node.js-password-generator

# About
In this project I got more comfortable with if statements and think through the logic as well as loops. Before this project, I was struggling a bit with them, however now i'm feeling more confident.

# The Program
1. When the user clicks the generate password button, they are prompted to enter a number between 8 and 128.
2. If the user enters a number outside of the range, they are alerted to enter a number between 8 and 128.
3. If the user enters a number within the range, they are asked if they want to include lowercase, uppercase, numeric, and/or special characters.
4. If the user does not select any of the character types, they are alerted to select at least one character type.
    - the user can click cancel in the pop-up window to decline a character type
5. If the user selects at least one character type, a password is generated that matches the selected criteria and is displayed in the text box.
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