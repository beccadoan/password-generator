// Assignment code here
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = lowerCaseStr.split("");
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperCase = upperCaseStr.split("");
var numberStr = "1234567890";
var numbers = numberStr.split("");

var bodyDiv = document.querySelector(".card-body");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newFormEl = document.createElement("form");
  bodyDiv.innerHTML = 
            '<form>' +
            '<div class="form-group">' +
              '<input type="checkbox" name="lowercase" value="lowercase" checked>' +
              '<label for="lowercase"> Include Lowercase</label><br>' +
              '<input type="checkbox" id="uppercase" name="uppercase" value="uppercase" checked>' +
              '<label for="uppercase"> Include Uppercase</label><br>' +
              '<input type="checkbox" id="numbers" name="numbers" value="numbers" checked>' +
              '<label for="numbers"> Include Numbers</label><br>' +
              '<input type="checkbox" id="special" name="special" value="special" checked>' +
              '<label for="special"> Include Special Characters</label><br>' +
              '<input type="text" name="" placeholder="Enter Password Length"/>' +
            '</div>' +
            '<button id="createPW" class="btn">Create Your Password</button>' +
            '</form>';
  // bodyDiv.innerHTML = 
  //           '<textarea readonly id="password" placeholder= "Your Secure Password" aria-label="Generated Password"></textarea>';
  var generatePassword = function(){
    return "This is your password";
  }
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  var displayPassword = function(){
    bodyDiv.innerHTML = 
            '<textarea readonly id="password" placeholder= "Your Secure Password" aria-label="Generated Password"></textarea>';
    var generatePassword = function(){
        return "This is your password";
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  createPW.addEventListener("click", displayPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
