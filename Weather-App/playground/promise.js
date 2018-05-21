var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject('Must be numbers!');
            }
        });
    });
};

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey it worked!');
//         reject('Unable to fulfill promise!');
//     }, 2500);
    
// });

// somePromise
//     .then((message) => {
//     console.log('Success: ', message);
// }, (errorMsg) => {
//     console.log('Error: ', errorMsg);
// });

asyncAdd(1, 2).then((res) => {
    console.log('Results: ', res)
    return asyncAdd(res, '33');
}).then((res) => {
    console.log('Shld be 45', 35);
}).catch((errorMsg) => {
    console.log(errorMsg);
});