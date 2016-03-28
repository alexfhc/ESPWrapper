var exec = require('cordova/exec');

exports.setDeviceWifi = function (wifiSSID,
                                  wifiKey,
                                  username,
                                  easylinkVersion,
                                  activateTimeout,
                                  activatePort,
                                  moduleDefaultUser,
                                  moduleDefaultPass,
                                  success, error) {
    exec(success, error, "ESPWrapper", "setDeviceWifi",
        [
            wifiSSID,
            wifiKey,
            username,
            easylinkVersion,
            activateTimeout,
            activatePort,
            moduleDefaultUser,
            moduleDefaultPass
        ]);
};
exports.sendDidVerification = function (did,
                                        success, error) {
    exec(success, error, "ESPWrapper", "sendDidVerification",
        [
            did
        ]);
};
exports.dealloc = function () {
    exec( null,null,"ESPWrapper", "dealloc",
        []);
};
