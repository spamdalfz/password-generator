// Assignment code here

function generatePassword() {

  function getChoice(currentOption) {
    var userChoice = ""
    var messagePrompt = 'Would you like ' + currentOption + ' characters?';
    userChoice = (window.confirm(messagePrompt));

    return userChoice;

  }

  // arrays for each character/character type - passwordArray will be populated with if statements 
  var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbersArray = "0123456789".split("");
  var specialCharArray = "!@#$%^&*()+?/-:;[]{}.<>=_`|~".split("");
  var passwordArray = [];

  var passwordLength = getPasswordLength();

  // This loop makes sure at least one character type is chosen
  var charTypeSelected = false;
  while (charTypeSelected == false) {
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var numericCharacters = getChoice("numeric");
    var specialCharacters = getChoice("special");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
      charTypeSelected = true;
    } else {
      window.alert("Please select at least one character type.")
    }
  }

  // if statements determine the user choices and then combine them to 'passwordArray'
  if (lowerCase) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }
  if (upperCase) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }
  if (numericCharacters) {
    passwordArray = passwordArray.concat(numbersArray);
  }
  if (specialCharacters) {
    passwordArray = passwordArray.concat(specialCharArray);
  }

  // selects random elements from passwordArray and converts them into a string
  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * (passwordArray.length))
    passwordString += passwordArray[index];
  }

  return passwordString;
}

//prompts user for password length
function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));

    // makes sure choice is a number
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }

  return userChoice;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);