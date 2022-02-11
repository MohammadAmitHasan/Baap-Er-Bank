// Converting function to number from input field
function getInputNumber(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
}
// Converting function from text field
function getTextNumber(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const text = textField.innerText;
    const newAmount = parseFloat(text);
    return newAmount;
}
// All field updating function
function updateTextFieldNumber(textFieldId, inputFieldId, withdraw) {
    // Balance field and amount
    const balanceField = document.getElementById('total-balance');
    const balance = getTextNumber('total-balance');

    // Input Field and amount
    const input = getInputNumber(inputFieldId);
    const textField = document.getElementById(textFieldId);
    // Text field
    const amount = getTextNumber(textFieldId);
    // Validation for unwanted input
    if (input > 0) {
        if (withdraw == true) {
            // Validation for higher withdraw request from balance
            if (balance > input) {
                textField.innerText = input + amount;
                balanceField.innerText = balance - input;
            }
            else {
                alert('Not Enough Balance');
            }
        }
        else {
            textField.innerText = input + amount;
            balanceField.innerText = balance + input;
        }
    }
    else {
        alert('Wrong Input');
    }
}
// Deposit Event
document.getElementById('deposit-btn').addEventListener('click', function () {
    updateTextFieldNumber('deposited-amount', 'deposit-input', false);
});
// Withdraw Event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    updateTextFieldNumber('withdraw-amount', 'withdraw-input', true);
});