// Function for updating status
function updateStatus(inputField, textField, isWithdraw) {
    const input = document.getElementById(inputField);
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);
    input.value = '';
    // Unwanted input validation
    if (inputNumber > 0) {
        const total = document.getElementById(textField);
        const totalText = total.innerText;
        const totalNumber = parseFloat(totalText);

        const balance = document.getElementById('balance');
        const balanceText = balance.innerText;
        const balanceNumber = parseFloat(balanceText);
        // Withdraw operation
        if (isWithdraw == true) {
            // Validation for higher withdraw than balance
            if (balanceNumber > totalNumber) {
                total.innerHTML = totalNumber + inputNumber;
                balance.innerText = balanceNumber - inputNumber;
            }
            else {
                alert('Not enough Money');
            }
        }
        // Deposit Operation
        else {
            total.innerHTML = totalNumber + inputNumber;
            balance.innerText = balanceNumber + inputNumber;
        }
    }
    else {
        alert('Invalid Input');
    }
}

// Deposit Event Handle
document.getElementById('deposit-btn').addEventListener('click', function () {
    updateStatus('deposit-input', 'total-deposit', false);
});

// Withdraw Event Handle
document.getElementById('withdraw-btn').addEventListener('click', function () {
    updateStatus('withdraw-input', 'total-withdraw', true);
});