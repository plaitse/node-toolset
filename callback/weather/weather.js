const request = require('request');

module.exports = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/4a8ff306afe2ab59eec9772658252eba/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};
