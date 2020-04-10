const metroDefault = require('metro-config/src/defaults/defaults.js');

module.exports = {
    resolver: {
        assetExts: metroDefault.assetExts.concat(['md']),
    }
};