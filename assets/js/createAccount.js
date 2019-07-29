let continueButtonIsActive = false;

function handleInput() {
    const nameCharsCount = $('#name')[0].value.length;
    const emailCharsCount = $('#email')[0].value.length;
    const passwordCharsCount = $('#password')[0].value.length;

    $('#name').css('font-size', nameCharsCount === 0 ? '14px' : '16px');
    $('#email').css('font-size', emailCharsCount === 0 ? '14px' : '16px');
    $('#password').css('font-size', passwordCharsCount === 0 ? '14px' : '16px');

    alert('Alert shown');
    
    try {
        if (nameCharsCount !== 0 && passwordCharsCount !== 0 && emailCharsCount !== 0) {
            if (!continueButtonIsActive) {
                toggleCreateAccountButton();
                continueButtonIsActive = true;
            }
        } else {
            if (continueButtonIsActive) {
                toggleCreateAccountButton();
                continueButtonIsActive = false;
            }
        }
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

function toggleCreateAccountButton() {
    console.log('Trying to toggle the "Create account" button...');
    if (typeof window.webkit != 'undefined') { // iOS
        console.log('-- In a web view on iOS');
        window.webkit.messageHandlers.iOSToggleCreateAccountButton.postMessage('');
    } else if (typeof androidLayer != 'undefined') { // Android
        console.log('-- In a web view on Android');
        androidLayer.toggleCreateAccountButton();
    } else {
        console.log('-- Not in a web view')
    }
}

function retrieveUserInfo() {
    const name = $('#name')[0].value;
    const email = $('#email')[0].value;
    const token = atob(name);

    try {
        window.webkit.messageHandlers.iOSSendUserInfo.postMessage({
            name: name,
            email: email,
            token: token
        });
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

function saveSomethingImportant(message) {
    console.log('Before:', somethingImportant, message);
    somethingImportant = message;
    console.log('After:', somethingImportant, message);
}

function loadSomethingImportant() {
    console.log(somethingImportant);
}
