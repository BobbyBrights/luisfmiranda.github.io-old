let loginButtonIsActive = false;

function handleLoginInput() {
    const emailCharsCount = $('#email')[0].value.length;
    const passwordCharsCount = $('#password')[0].value.length;

    $('#email').css('font-size', emailCharsCount === 0 ? '14px' : '16px');
    $('#password').css('font-size', passwordCharsCount === 0 ? '14px' : '16px');

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

function loadSignUpPage() {
    try {
        window.webkit.messageHandlers.loadSignUpPage.postMessage('');
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
