let loginButtonIsActive = false;

function handleLoginInput() {
    const emailCharsCount = document.getElementById("email").value.length;
    const passwordCharsCount = document.getElementById("password").value.length;

    document.getElementById('email').style.opacity = (emailCharsCount !== 0 ? '1' : '0.2');
    document.getElementById('password').style.opacity = (passwordCharsCount !== 0 ? '1' : '0.2');

    try {
        if (emailCharsCount !== 0 && passwordCharsCount !== 0) {
            if (!loginButtonIsActive) {
                window.webkit.messageHandlers.iOSToggleLoginButton.postMessage(true);
                loginButtonIsActive = true
            }
        } else {
            if (loginButtonIsActive) {
                window.webkit.messageHandlers.iOSToggleLoginButton.postMessage(false);
                loginButtonIsActive = false
            }
        }
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

function loginUser() {
    const email = document.getElementById("email").value;

    try {
        window.webkit.messageHandlers.iOSSendToken.postMessage('(name for ' + email + ')');
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
