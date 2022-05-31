// Assignment code here
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberStr = "1234567890";
var specialCharStr = "~`@#$%^&*()_+=-[]{};:?/><,.";

var bodyDiv = document.querySelector(".card-body");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newFormEl = document.createElement("form");
  // put password checklist in card body;
  bodyDiv.innerHTML = 
            '<div class="form-group">' +
              '<input type="checkbox" name="lowercase" id="lowercase" checked>' +
              '<label for="lowercase"> Include Lowercase</label><br>' +
              '<input type="checkbox" id="uppercase" name="uppercase" id="uppercase" checked>' +
              '<label for="uppercase"> Include Uppercase</label><br>' +
              '<input type="checkbox" id="numbers" name="numbers" id="numbers" checked>' +
              '<label for="numbers"> Include Numbers</label><br>' +
              '<input type="checkbox" id="special" name="special" id="special" checked>' +
              '<label for="special"> Include Special Characters</label><br>' +
              '<input type="text"id="pw-length" placeholder="Enter Password Length"/>' +
            '</div>' +
            '<button id="createPW" class="btn">Create Your Password</button>';

  

  var displayPassword = function(){
    var lowercaseInputEl = document.querySelector("#lowercase").checked;
    var uppercaseInputEl = document.querySelector("#uppercase").checked;
    var numberInputEl = document.querySelector("#numbers").checked;
    var specialInputEl = document.querySelector("#special").checked;
    var passwordLength = parseInt(document.querySelector("#pw-length").value);
    
    var generatePassword = function(){
      if(!(lowercaseInputEl || uppercaseInputEl || numberInputEl || specialInputEl)){
        alert("must check at least one box");
        writePassword();
      }
        var newPasswordArray = "";
        if(lowercaseInputEl){
          newPasswordArray+=lowerCaseStr;
        }
        if(uppercaseInputEl){
          newPasswordArray+=upperCaseStr;
        }
        if(numberInputEl){
          newPasswordArray+=numberStr;
        }
        if(specialInputEl){
          newPasswordArray+=specialCharStr;
        }
        newPasswordArray = newPasswordArray.split("");
        console.log(newPasswordArray.length);
        var finalPassword = "";
        for(var i = 0; i < passwordLength; i++){
          var myNumber = randomNumberGenerator(0, newPasswordArray.length);
          finalPassword+=newPasswordArray[myNumber];
        }
        return finalPassword;
    }
    var password = generatePassword();
    bodyDiv.innerHTML = 
            '<textarea readonly id="password" placeholder= "Your Secure Password" aria-label="Generated Password"></textarea>';

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  createPW.addEventListener("click", displayPassword);
}
function randomNumberGenerator(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
