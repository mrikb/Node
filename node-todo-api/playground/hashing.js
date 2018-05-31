const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log('token', token);
var decoded = jwt.verify(token, '123abc');
console.log('de token', decoded);






// var message = 'I am user 3';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHas = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHas === token.hash) {
//     console.log('OK');
// } else {
//     console.log('NOT OK');
// }