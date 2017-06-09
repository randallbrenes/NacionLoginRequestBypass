function blockNacionLoginRequest(details) {
    return {
        cancel: true
    };
}

function blockUrls(patterns) {
    if (chrome.webRequest.onBeforeRequest.hasListener(blockNacionLoginRequest))
        chrome.webRequest.onBeforeRequest.removeListener(blockNacionLoginRequest);

    if (patterns.length) {
        chrome.webRequest.onBeforeRequest.addListener(blockNacionLoginRequest, {
            urls: patterns
        }, ['blocking']);
    }
}

var urlPatterns = ['https://gln.evolok.net/acd/api/3.0/authorize/json?*']
blockUrls(urlPatterns);