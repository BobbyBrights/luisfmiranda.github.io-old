function goToServicesButtonClicked() {
    try {
        window.webkit.messageHandlers.iOSGoToServices.postMessage();
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}
