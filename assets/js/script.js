let continueButtonIsActive = false;

function handleInput() {
    const emailCharsCount = document.getElementById("email").value.length;
    const passwordCharsCount = document.getElementById("password").value.length;

    try {
        if (emailCharsCount !== 0 && passwordCharsCount !== 0) {
            if (!continueButtonIsActive) {
                console.log('Continue button: on');
                window.webkit.messageHandlers.iOSCreateAccountButton.postMessage(true);
                continueButtonIsActive = true
            }
        } else {
            if (continueButtonIsActive) {
                console.log('Continue button: off');
                window.webkit.messageHandlers.iOSCreateAccountButton.postMessage(false);
                continueButtonIsActive = false
            }
        }
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
