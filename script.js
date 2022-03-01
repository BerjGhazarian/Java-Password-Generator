var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let userInput = []
var passArray = []


var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");
var numberChar = "0123456789".split("");
var passwordLength = "8-128".split("");
var specialChar = "!@#$%^&*()".split("");
var selectedChar = "".split("");

function generatePassword(){
    passwordLength = prompt("Enter number of characters you want");
    if(isNaN(passwordLength)) {
        alert("You did not enter a number!!")
        return generatePassword();
    }
        if (passwordLength < 8 || passwordLength > 128) {
            alert("Erorr! Must choose numbers between 8 to 128");
    return generatePassword();
}
let isUpperChar = window.confirm("Would you like capitols?");
        if (isUpperChar){
            generateSelectedArray(upperChar)
        }
let isLowerChar = window.confirm("Would you like lowercase letters?");
        if(isLowerChar){
            generateSelectedArray(lowerChar)
        }
let isNumberChar = window.confirm("Would you like numbers?");
        if(isNumberChar){
            generateSelectedArray(numberChar)
        }
let isSpecialChar = window.confirm("Would you like special characters?");
        if(isSpecialChar){
            generateSelectedArray(specialChar)
        }
    console.log(userInput);
    generatePasswordArray(passwordLength);
    return passArray.join("");
}
    function generateSelectedArray(characterArray){
        for (let i = 0; i < characterArray.length; i++) {
            const character = characterArray[i];
            userInput.push(character)
        }

    }
    function generatePasswordArray(numberOfChar){
        for (let i = 0; i < numberOfChar; i++) {
           var randomIndex = Math.floor(Math.random() * userInput.length);
            passArray.push(userInput[randomIndex]);
        }
    }
generateBtn.addEventListener("click", writePassword);
