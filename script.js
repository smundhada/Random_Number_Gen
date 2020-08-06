// Assignment Code
//Setting up global variables to use throughout the code
var passLengthEl;
var upperCharEl;
var lowerCharEl;
var numberCharEl;
var specialCharEl;
var passwordLength;
var generateBtn = document.querySelector("#generate");

//Setting up the arrays for different types of criteria for password characters
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|',';',',','/',':','<','>','?'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generating the password based on the user inputs
function generatePassword(){

  //calls the password length function 
  getPasswordLength();

  var passwordMerge = [];
  
  //Checks the user criterias and merges the different type of array into one. 
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

    //generating the random password based on the password length required. 
    var passwordRandom = [];
    for (var i = 0; i < passwordLength; i++){
      var randomNum = Math.floor(Math.random() * passwordMerge.length);
      passwordRandom.push(passwordMerge[randomNum]); 
    }

    return passwordRandom.join('');//returns the random password
}

//Asking the user for the password length
function getPasswordLength(){
  passLengthEl = prompt("How many character long password would you like?", "");
  passwordLength = parseInt(passLengthEl);
  checkPasswordLength(passwordLength); //Checking if the password is between the required characters. 
}

//Checking if the password is between the required characters.
function checkPasswordLength(passwrd_Length){

  if (passwrd_Length < 7 || passwrd_Length > 128){
    alert("Please pick a password length between 8 and 128 characters.");
    getPasswordLength();
  }
  else {
    getCriteria();
  }
}

//Asking the user for the password criterias
function getCriteria(){
  upperCharEl = confirm("Do you want upper case letters in the password?");
  lowerCharEl = confirm("Do you want lower case letters in the password?");
  numberCharEl = confirm("Do you want numbers in the password?");
  specialCharEl = confirm("Do you want special characters in the password?");
  checkCriteria(); //Checking if the atleast one password criteria is sent. 
}

//Checking if the atleast one password criteria is sent.
function checkCriteria(){
    if(upperCharEl === false && lowerCharEl  === false && numberCharEl  === false && specialCharEl === false ){
      alert("Please pick atleast one password criteria.");
      getCriteria();
    }
}
