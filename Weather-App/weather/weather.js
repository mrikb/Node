const request = require('request');

var getWeather = (address, callback) => {
    request({
        url : `https://api.darksky.net/forecast/8b2b983c728c61a171ad39a046b5fb03/${address.Latitude},${address.Longitude}`,
        json: true
    },(error, response, body) => {
        if (error) {
            callback('Unable to connect');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                Address: address.Address,
                Temperature: body.currently.temperature,
                FeelsLike: body.currently.apparentTemperature
            });
        } 
    });
};

module.exports = {
    getWeather
}