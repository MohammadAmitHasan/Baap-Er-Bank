// Deposit event handle
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Get the new deposit amount
    const newDeposit = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(newDeposit.value);
    // Get previous total deposit
    const totalDepositedAmount = document.getElementById('deposited-amount');
    // Calculate total Deposited
    const newTotalDepositAmount = parseFloat(totalDepositedAmount.innerText) + newDepositAmount;
    // Assign the new deposited amount
    totalDepositedAmount.innerText = newTotalDepositAmount;
    // Update Balance
    const balance = document.getElementById('total-balance');
    balance.innerText = parseFloat(balance.innerText) + newDepositAmount;

    // Clear the deposit field
    newDeposit.value = '';

});

// Withdraw event handle
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Get the withdraw amount
    const newWithdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = newWithdrawInput.value;
    const withdrawAmount = parseFloat(withdrawValue);
    //update Balance
    const balance = document.getElementById('total-balance');
    const balanceAmount = parseFloat(balance.innerText);
    if (balanceAmount > withdrawAmount) {
        balance.innerText = balanceAmount - withdrawAmount;
        // Get the previous withdraw total
        const withdrawTotal = document.getElementById('withdraw-amount');
        const withdrawTotalValue = parseFloat(withdrawTotal.innerText);
        const withdrawTotalAmount = withdrawAmount + withdrawTotalValue;
        // Set the new withdraw value
        withdrawTotal.innerText = withdrawTotalAmount;

        // Clear withdraw input
        newWithdrawInput.value = '';
    }
    else {
        alert('Not Enough Money');
    }

})