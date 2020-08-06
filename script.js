// Assignment Code
var passLengthEl = prompt("How many character long password would you like?", "");
var upperCharEl = confirm("Do you want upper case letters in the password?");
var lowerCharEl = confirm("Do you want lower case letters in the password?");
var numberCharEl = confirm("Do you want numbers in the password?");
var specialCharEl = confirm("Do you want special characters in the password?");
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['~',
                    '`',
                    '!',
                    '@',
                    '#',
                    '$',
                    '%',
                    '^',
                    '&',
                    '*',
                    '(',
                    ')',  
                    '-',
                    '_',
                    '+',
                    '=',
                    '[',
                    ']',
                    '{',
                    '}',
                    '|',
                    ';',
                    ',',
                    '/',
                    ':',
                    '<',
                    '>',
                    '?'];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var passwordLength = parseInt(passLengthEl);
  var passwordMerge = [];
  if (passwordLength < 7 || passwordLength > 128){
    return alert("Please pick a password length between 8 and 128.");
  }else {
    if(upperCharEl){
      passwordMerge = passwordMerge.concat(upperCaseLetters);
    }
    if(lowerCharEl){
      passwordMerge = passwordMerge.concat(lowerCaseLetters);
    }
    if(numberCharEl){
      passwordMerge = passwordMerge.concat(numberChar);
    }
    if(specialCharEl){
      passwordMerge = passwordMerge.concat(specialChar);
    }
    var passwordRandom = [];
    for (var i = 0; i < passwordLength; i++){
      var randomNum = Math.floor(Math.random() * passwordMerge.length);
      passwordRandom.push(passwordMerge[randomNum]); 
    }
    return passwordRandom.join('');
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
