let continueButtonIsActive = false;

// User info (should be stored properly)
let name = "";
let email="";
let password = "";

function handleInput() {
    const nameCharsCount = document.getElementById("name").value.length;
    const emailCharsCount = document.getElementById("email").value.length;
    const passwordCharsCount = document.getElementById("password").value.length;

    document.getElementById('name').style.opacity = (nameCharsCount !== 0 ? '1' : '0.2');
    document.getElementById('email').style.opacity = (emailCharsCount !== 0 ? '1' : '0.2');
    document.getElementById('password').style.opacity = (passwordCharsCount !== 0 ? '1' : '0.2');

    try {
        if (nameCharsCount !== 0 && passwordCharsCount !== 0 && emailCharsCount !== 0) {
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
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    users[email] = {'name': name, 'password': password};

    try {
        window.webkit.messageHandlers.iOSSendUserInfo.postMessage(name);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
