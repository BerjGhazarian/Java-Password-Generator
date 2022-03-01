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
