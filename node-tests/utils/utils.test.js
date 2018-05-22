const expect = require('expect');
const utils = require('./util');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44);
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
    
});

it('it should async add two number', (done) => {
    utils.asynAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
    })
});

it('should square a number', () => {
    var res = utils.square(4);
    if (res !== 16) {
        throw new Error(`Expected 16, but got ${res}.`);
    }
});