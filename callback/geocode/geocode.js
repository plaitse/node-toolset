const request = require('request');

module.exports = (address, callback) => {

    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=aBTsD16tFUp0cXjC2AKt4GL9YJF8rSp2&location=${encodeURIComponent(encodedAddress)}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        } else {
            callback('Unable to connect to Google servers');
        }
    });
};
