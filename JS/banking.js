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