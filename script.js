var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var chars = "";
var newPass = "";
var charTypes = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  var passLength = prompt("Please choose a password length (8 - 128)");
  if (passLength >= 8 && passLength <= 128) {
  } else {
    console.log("Denied");
    alert("Please pick an accepted password length (8 - 128)");
    return;
  }

  var passLower = prompt("Would you like lowercase characters? (y or n)");
  if (passLower === "y") {
    chars += charTypes.lowercase;
  }

  var passUpper = prompt("Would you like uppercase characters? (y or n)");
  if (passUpper === "y") {
    console.log("Accepted Upper");
    chars += charTypes.uppercase;
  }

  var passNum = prompt("Would you like numerical characters? (y or n)");
  if (passNum === "y") {
    chars += charTypes.numbers;
  }
  var passSpecial = prompt("Would you like special characters? (y or n)");
  if (passSpecial == "y") {
    chars += charTypes.special;
  }

  for (i = 0; i < passLength; i++) {
    var randomPass = Math.floor(Math.random() * chars.length);
    newPass += chars.substring(randomPass, randomPass + 1);
  }

  return newPass;
}

generateBtn.addEventListener("click", writePassword);
