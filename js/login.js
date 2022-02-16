document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    // console.log(userPass);
    if (emailField.value == '123@gmail.com' && passField.value == '123') {
        window.location.href = 'banking.html'
    }
})


