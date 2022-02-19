function getTextNumber(fieldName) {
    const textField = document.getElementById(fieldName);
    const inputNumber = parseFloat(textField.innerText);
    return inputNumber;
}
// Function for updating status
function updateStatus(inputField, textField) {
    const input = document.getElementById(inputField);
    const inputNumber = parseFloat(input.value);
    input.value = '';
    // Unwanted input validation
    if (inputNumber > 0) {
        document.getElementById(textField).innerText = inputNumber + getTextNumber(textField);
    }
    else {
        alert('Invalid Input');
    }
}
// Update balance
function updateBalance() {
    const totalDeposit = getTextNumber('deposited-amount');
    const totalWithdraw = getTextNumber('withdraw-amount');
    document.getElementById('total-balance').innerText = totalDeposit - totalWithdraw;
}
// Deposit Event Handle
document.getElementById('deposit-btn').addEventListener('click', function () {
    updateStatus('deposit-input', 'deposited-amount');
    updateBalance();
});
// Withdraw Event Handle
document.getElementById('withdraw-btn').addEventListener('click', function () {
    updateStatus('withdraw-input', 'withdraw-amount');
    updateBalance();
});