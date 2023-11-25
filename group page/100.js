var userCredentials = {
    "user1": "password1",
    "user2": "password2",
};

function appendToDisplay(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculate() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function validateLogin() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    if (userCredentials[enteredUsername] === enteredPassword) {
        // Username and password are correct, show the calculator
        document.getElementById("calculator-container").style.display = "flex";
        document.getElementById("login-form").style.display = "none";
    } else {
        // Username and password are incorrect, display an error message
        alert("Incorrect username or password. Access denied.");
    }
}
