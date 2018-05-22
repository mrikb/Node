module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x*x;

module.exports.asynAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b), 2500
    });
}