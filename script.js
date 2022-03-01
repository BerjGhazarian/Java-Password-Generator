<<<<<<< HEAD
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let userInput;

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var passwordLenght = "8-128";
var specialChar = "!@#$%^&*()";
var selectedChar = "";

function generatePassword(){
    passwordLenght = prompt("Enter number of characters you want");
        if (passwordLenght < 8 || passwordLenght > 128) {
            alert("Erorr! Must choose numbers between 8 to 128");
    return 
}
let yesupperChar = window.confirm("Would you like capitols?");
        if (userInput){
            userInput.push(upperChar)
        }
let yeslowerChar = window.confirm("Would you like lowercase letters?");
        if(userInput){
            userInput.push(lowerChar)
        }
let numberChar = window.confirm("Would you like numbers?");
        if(userInput){
            userInput.push(numberChar)
        }
let specialChar = window.confirm("Would you like special characters?");
        if(userInput){
            userInput.push(specialChar)
        }
    
}

generateBtn.addEventListener("click", writePassword);
=======
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let userInput = []

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");
var numberChar = "0123456789".split("");
var passwordLenght = "8-128".split("");
var specialChar = "!@#$%^&*()".split("");
var selectedChar = "".split("");

function generatePassword(){
    passwordLenght = prompt("Enter number of characters you want");
        if (passwordLenght < 8 || passwordLenght > 128) {
            alert("Erorr! Must choose numbers between 8 to 128");
    return generatePassword();
}
let isUpperChar = window.confirm("Would you like capitols?");
        if (isUpperChar){
            userInput.push(upperChar)
        }
let isLowerChar = window.confirm("Would you like lowercase letters?");
        if(isLowerChar){
            userInput.push(lowerChar)
        }
let isNumberChar = window.confirm("Would you like numbers?");
        if(isNumberChar){
            userInput.push(numberChar)
        }
let isSpecialChar = window.confirm("Would you like special characters?");
        if(isSpecialChar){
            userInput.push(specialChar)
        }
    console.log(passwordLenght);
    for (var i = 0; i < generatePassword(passwordLenght); i++){
        var randomIndex = Math.floor(Math.random() * selectedChar.length);
        password += selectedChar[randomIndex]
    }
    return generatePassword();
}

generateBtn.addEventListener("click", writePassword);
>>>>>>> 33f066635639d62d7f4e81ee09048a02dfce4f1d
