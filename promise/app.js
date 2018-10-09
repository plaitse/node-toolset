const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=aBTsD16tFUp0cXjC2AKt4GL9YJF8rSp2&location=${encodeURIComponent(encodedAddress)}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    let lat = response.data.results[0].locations[0].latLng.lat;
    let lng = response.data.results[0].locations[0].latLng.lng;
    let weatherUrl = `https://api.darksky.net/forecast/4a8ff306afe2ab59eec9772658252eba/${lat},${lng}`
    console.log(response.data.results[0].locations[0].latLng);
    return axios.get(weatherUrl);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    console.log('temp: ', temperature);
}).catch((error) => {
    console.log(error.message);
});

// PROMISE EXAMPLE
/*
let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500)
    });
};
asyncAdd(5, 7).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Result2: ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
*/