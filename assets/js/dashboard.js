let exchangeRates = {
    'gbp/usd': 0
};

function updateExchangeRates() {
    fetchPrices();
}

function fetchPrices() {
    // build and send the request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://rate-client.eu-west-1.elasticbeanstalk.com/getrate');
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("Fetched.")
        } else {
            console.log(xhr);
        }
    };

    xhr.onerror = () => {
        console.log("Unable to fetch prices.")
    };
}

function goToServicesButtonClicked() {
    try {
        // the postMessage function must send something, even if it's null
        window.webkit.messageHandlers.iOSGoToServices.postMessage(null);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

