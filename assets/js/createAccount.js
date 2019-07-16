let continueButtonIsActive = false;

// User info (should be stored properly)
let name = "";
let email="";
let password = "";

function handleInput() {
    const nameCharsCount = $('#name')[0].value.length;
    const emailCharsCount = $('#email')[0].value.length;
    const passwordCharsCount = $('#password')[0].value.length;

    
    $('#name').css('font-size', nameCharsCount === 0 ? '14px' : '16px');
    $('#email').css('font-size', emailCharsCount === 0 ? '14px' : '16px');
    $('#password').css('font-size', passwordCharsCount === 0 ? '14px' : '16px');

    
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
    name = $('#name');
    email = $('#email');
    password = $('#password');

    users[email] = {'name': name, 'password': password};

    try {
        window.webkit.messageHandlers.iOSSendUserInfo.postMessage(name);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
