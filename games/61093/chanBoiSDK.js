var showRewardedAd = function(success, failback) {
    window.onSuccessCallback = success;
    window.onFailedCallback = failback;

    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
    }
}

var showInterstitialAd = function(success, failback) {
    window.onSuccessCallback = success;
    window.onFailedCallback = failback;

    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
    }
}

window.SDK_OPTIONS = {
    gameId: "ep1klxup1xxefe9ucbga0r283x2lvc2m",
    onEvent: function (a) {
        switch (a.name) {
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                // Howler.mute(true)
            break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                // Howler.mute(false)
                if (window.onSuccessCallback) {
                    window.onSuccessCallback()
                    window.onSuccessCallback = null
                }
            break;
            case "SDK_READY":
            // when sdk is ready
            break;
            case "AD_SDK_FINISHED": 
                if (window.onSuccessCallback) {
                    window.onSuccessCallback()
                    window.onSuccessCallback = null
                }
            break;
            case "AD_CANCELED" :
                if (window.onFailedCallback) {
                    window.onFailedCallback();
                    window.onFailedCallback = null
                }
            break;
        }
    }
};
 (function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
 })(document, "script", "gamemonetize-sdk"); 