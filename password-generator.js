//CHROME EXTENSION: PASSWORD GENERATOR

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// define function
function generatePassword(length = 12, useUpper = true, useDigits = true, useSymbols = true) {
    let characters = lowercase;
    if (useUpper) characters += uppercase;
    if (useDigits) characters += digits;
    if (useSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// hook it to the DOM
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const useUpper = document.getElementById("uppercase").checked;
    const useDigits = document.getElementById("digits").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, useUpper, useDigits, useSymbols);
    document.getElementById("result").value = password;
  });
});
