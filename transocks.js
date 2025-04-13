let BaseFragment = Java.use("com.fobwifi.transocks.common.base.BaseFragment");
BaseFragment["I0"].implementation = function (aVar) {
    console.log(`BaseFragment.I0 is called: aVar=${aVar}`);
    let result = this["I0"](aVar);
    console.log(`BaseFragment.I0 result=${result}`);
    return result;
};