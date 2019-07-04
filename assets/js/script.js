let continueButtonIsActive = false;

function handleInput() {
    const nameCharsCount = document.getElementById("name").value.length;
    const passwordCharsCount = document.getElementById("password").value.length;

    try {
        if (nameCharsCount !== 0 && passwordCharsCount !== 0) {
            if (!continueButtonIsActive) {
                window.webkit.messageHandlers.iOSToggleCreateAccountButton.postMessage(true);
                continueButtonIsActive = true
            }
        } else {
            if (continueButtonIsActive) {
                window.webkit.messageHandlers.iOSToggleCreateAccountButton.postMessage(false);
                continueButtonIsActive = false
            }
        }
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

function retrieveUserInfo() {
    const name = document.getElementById("name").value;

    try {
        window.webkit.messageHandlers.iOSSendUserInfo.postMessage(name);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
