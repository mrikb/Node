
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

// 8b2b983c728c61a171ad39a046b5fb03
// https://api.darksky.net/forecast/8b2b983c728c61a171ad39a046b5fb03/37.8267,-122.4233