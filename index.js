var generateButton = document.getElementById('generateButton');
var passwordOutput = document.getElementById('passwordOutput');

generateButton.addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSymbols = document.getElementById('includeSymbols').checked;

    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    var validChars = '';

    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    var password = '';
    
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordOutput.textContent = password;
});
