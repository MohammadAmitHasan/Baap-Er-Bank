document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'beta@bap.com' && userPassword == 'secret') {
        window.location.href = './banking.html';
    }
});