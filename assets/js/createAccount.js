let continueButtonIsActive = false;

function handleInput() {
    const nameCharsCount = $('#name')[0].value.length;
    const emailCharsCount = $('#email')[0].value.length;
    const passwordCharsCount = $('#password')[0].value.length;

    $('#name').css('font-size', nameCharsCount === 0 ? '14px' : '16px');
    $('#email').css('font-size', emailCharsCount === 0 ? '14px' : '16px');
    $('#password').css('font-size', passwordCharsCount === 0 ? '14px' : '16px');

    Android.showToast('Hello world!');
    console.log('Atempt 1')
    
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
