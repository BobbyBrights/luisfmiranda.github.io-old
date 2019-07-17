const ONE_SECOND_IN_MILLISECONDS = 1000;

let baseCcy = 'gbp';

let exchangeRates = {
    'eur-cad': 1.47324,
    'eur-chf': 1.11331,
    'eur-gbp': 0.89971,
    'eur-nok': 9.66234,
    'eur-usd': 1.12514,

    'gbp-cad': 1.63454,
    'gbp-chf': 1.23816,
    'gbp-eur': 1.11146,
    'gbp-jpy': 135.620,
    'gbp-nok': 10.7255,
    'gbp-nzd': 1.88082,
    'gbp-usd': 1.25140,
    'gbp-zar': 17.5251,

    'usd-cad': 1.31324,
    'usd-chf': 0.99423,
    'usd-nok': 8.58234,
    'usd-jpy': 108.465,
    'usd-gbp': 0.79910,
    'usd-eur': 0.88877,
    'usd-zar': 13.9923,
};

updateExchangeRates();
setInterval(updateExchangeRates, ONE_SECOND_IN_MILLISECONDS);

function updateExchangeRates() {
    fetchPrices();
}

function fetchPrices() {
    $('.currencyListing').hide();

    Object.keys(exchangeRates).forEach((key) => {
      const priceChange = 1 + ((0.00005 * Math.random()) * (Math.random() < 0.5 ? -1 : 1));
      exchangeRates[key] *= priceChange;

      if (key === 'gbp-jpy' || key === 'usd-jpy') {
        $('#' + key).text(exchangeRates[key].toFixed(2));
      } else if (key === 'gbp-nok' || key === 'gbp-zar' || key === 'usd-zar') {
        $('#' + key).text(exchangeRates[key].toFixed(3));
      } else {
        $('#' + key).text(exchangeRates[key].toFixed(4));
      }
    });

    if (baseCcy === 'gbp') {
      $('.gbpListing').show();
    } else if (baseCcy === 'eur') {
      $('.eurListing').show();
    } else if (baseCcy === 'usd') {
      $('.usdListing').show();
    }
}

function selectEur() {
  $('#selectedCurrency img').attr("src", "../../assets/img/flags/EUR.png");
  $('#baseCcyAbbr').text('EUR');
  baseCcy = 'eur'
}

function selectGbp() {
  $('#selectedCurrency img').attr("src", "../../assets/img/flags/GBP.png");
  $('#baseCcyAbbr').text('GBP');
  baseCcy = 'gbp'
}

function selectUsd() {
  $('#selectedCurrency img').attr("src", "../../assets/img/flags/USD.png");
  $('#baseCcyAbbr').text('USD');
  baseCcy = 'usd'
}

function goToServicesButtonClicked() {
    try {
        // the postMessage function must send something, even if it's null
        window.webkit.messageHandlers.iOSGoToServices.postMessage(null);
    } catch (err) {
        console.log('Unable to reach the mobile layer:', err);
    }
}

function updateNameOnDashboard(name) {
  $('#name-on-dashboard').text(name);
}