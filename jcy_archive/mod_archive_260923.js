// hook ads of con.viva.

// frida debug test
let PangleRewardVideoAnonymousClass1 = Java.use("com.bytedance.msdk.adapter.pangle.PangleRewardLoader$PangleRewardVideo$1");
PangleRewardVideoAnonymousClass1["onRewardVideoAdLoad"].implementation = function (tTRewardVideoAd) {
    send(`PangleRewardVideoAnonymousClass1.onRewardVideoAdLoad is called: tTRewardVideoAd=${tTRewardVideoAd}`);
    // this["onRewardVideoAdLoad"](tTRewardVideoAd);
};
let PangleFullVideoAdAnonymousClass1 = Java.use("com.bytedance.msdk.adapter.pangle.PangleFullVideoLoader$PangleFullVideoAd$1");
PangleFullVideoAdAnonymousClass1["onFullScreenVideoAdLoad"].implementation = function (tTFullScreenVideoAd) {
    send(`PangleFullVideoAdAnonymousClass1.onFullScreenVideoAdLoad is called: tTFullScreenVideoAd=${tTFullScreenVideoAd}`);
    // this["onFullScreenVideoAdLoad"](tTFullScreenVideoAd);
};

// hook SplashAD showAd()
let WMSplashAdonSplashAd = Java.use("com.windmill.sdk.splash.WMSplashAd");
WMSplashAdonSplashAd["onSplashAdSuccessLoad"].implementation = function (str) {
    send(`WMSplashAd.onSplashAdSuccessLoad is called: str=${str}`);
    // this["onSplashAdSuccessLoad"](str);
};
let IWMSplashAdListener = Java.use("com.windmill.windmill_ad_plugin.splashAd.IWMSplashAdListener");
// pass SplashAd close callback
IWMSplashAdListener["$init"].implementation = function (splashAd, methodChannel) {
    send(`IWMSplashAdListener.$init is called: splashAd=${splashAd}, methodChannel=${methodChannel}`);
    this["$init"](splashAd, methodChannel);
    var channel = this.channel.value;
    channel["invokeMethod"]("onAdClosed", null);
};
let SplashAd = Java.use("com.windmill.windmill_ad_plugin.splashAd.SplashAd");
SplashAd["isReady"].implementation = function (methodCall) {
    send(`SplashAd.isReady is called: methodCall=${methodCall}`);
    // let result = this["isReady"](methodCall);
    // send(`SplashAd.isReady result=${result}`);
    // return result;
    return false;
};
SplashAd["load"].implementation = function (methodCall) {
    send(`SplashAd.load is called: methodCall=${methodCall}`);
    // let result = this["load"](methodCall);
    // send(`SplashAd.load result=${result}`);
    // return result;
    return null;
};
IWMSplashAdListener["onSplashAdSuccessLoad"].implementation = function (str) {
    send(`IWMSplashAdListener.onSplashAdSuccessLoad is called: str=${str}`);
    // this["onSplashAdSuccessLoad"](str);
};

//hook interactionAd
let IWMIntersititialAdListener = Java.use("com.windmill.windmill_ad_plugin.interstitial.IWMIntersititialAdListener");
IWMIntersititialAdListener["$init"].implementation = function (interstitialAd, methodChannel) {
    send(`IWMIntersititialAdListener.$init is called: interstitialAd=${interstitialAd}, methodChannel=${methodChannel}`);
    this["$init"](interstitialAd, methodChannel);
    var channel = this.channel.value;
    channel["invokeMethod"]("onAdClosed", null);
};
let InterstitialAd = Java.use("com.windmill.windmill_ad_plugin.interstitial.InterstitialAd");
InterstitialAd["isReady"].implementation = function (methodCall) {
    send(`InterstitialAd.isReady is called: methodCall=${methodCall}`);
    // let result = this["isReady"](methodCall);
    // send(`InterstitialAd.isReady result=${result}`);
    // return result;
    return false;
};
InterstitialAd["load"].implementation = function (methodCall) {
    send(`InterstitialAd.load is called: methodCall=${methodCall}`);
    // let result = this["load"](methodCall);
    // send(`InterstitialAd.load result=${result}`);
    // return result;
    return null;
};
InterstitialAd["getCacheAdInfoList"].implementation = function (methodCall) {
    send(`InterstitialAd.getCacheAdInfoList is called: methodCall=${methodCall}`);
    // let result = this["getCacheAdInfoList"](methodCall);
    // send(`InterstitialAd.getCacheAdInfoList result=${result}`);
    // return result;
    return null;
};
InterstitialAd["showAd"].implementation = function (methodCall) {
    send(`InterstitialAd.showAd is called: methodCall=${methodCall}`);
    // let result = this["showAd"](methodCall);
    // send(`InterstitialAd.showAd result=${result}`);
    // return result;
    return null;
};

// hook feadAd
let NativeAd = Java.use("com.windmill.windmill_ad_plugin.feedAd.NativeAd");
NativeAd["showAd"].implementation = function (viewGroup, jSONObject) {
    send(`NativeAd.showAd is called: viewGroup=${viewGroup}, jSONObject=${jSONObject}`);
    // this["showAd"](viewGroup, jSONObject);
    return null;
};

// hook fullscreenads
let GDTRewardVideoAdaptershowAd = Java.use("com.windmill.gdt.GDTRewardVideoAdapter");
GDTRewardVideoAdaptershowAd["showAd"].implementation = function (activity, hashMap, map) {
    send(`GDTRewardVideoAdapter.showAd is called: activity=${activity}, hashMap=${hashMap}, map=${map}`);
    // this["showAd"](activity, hashMap, map);
    return null;
};

// hook reward video
let GDTRewardVideoAdapterisReady = Java.use("com.windmill.gdt.GDTRewardVideoAdapter");
GDTRewardVideoAdapterisReady["isReady"].implementation = function () {
    send(`GDTRewardVideoAdapter.isReady is called`);
    // let result = this["isReady"]();
    // send(`GDTRewardVideoAdapter.isReady result=${result}`);
    // return result;
    return false;
};
let IWMRewardAdListener = Java.use("com.windmill.windmill_ad_plugin.reward.IWMRewardAdListener");
IWMRewardAdListener["$init"].implementation = function (rewardVideoAd, methodChannel) {
    send(`IWMRewardAdListener.$init is called: rewardVideoAd=${rewardVideoAd}, methodChannel=${methodChannel}`);
    this["$init"](rewardVideoAd, methodChannel);
    var channel = this.channel.value;
    channel["invokeMethod"]("onAdClosed", null);
};