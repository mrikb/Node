const request = require('request');

var getWeather = (address) => {
    request({
        url : `https://api.darksky.net/forecast/8b2b983c728c61a171ad39a046b5fb03/${address.Latitude},${address.Longitude}`,
        json: true
    },(error, response, body) => {
        if (error) {
            console.log('Unable to connect');
        } else if (response.statusCode === 400) {
            console.log('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            console.log(body.currently.temperature);
        } 
    });
};

module.exports = {
    getWeather
}