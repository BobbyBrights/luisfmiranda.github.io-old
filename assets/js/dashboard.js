function goToServicesButtonClicked() {
    try {
        // the postMessage function must send something, even if it's null
        window.webkit.messageHandlers.iOSGoToServices.postMessage(null);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
