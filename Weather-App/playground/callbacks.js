// var getUser = (id, callback) => {
//     var user = {
//         id: id,
//         name: 'Vikram'
//     };

//     setTimeout(() => {
//         callback(user);
//     }, 3000);
    
// };

// var getUser2 = (id) => {
//     console.log('getUser2',id);
// }

// getUser2('Mrik');

// getUser(31, (userObj) => {
//     console.log(userObj);
// });

var addParam = (a,b) => a+b;
var subParam = (a,b) => a-b;

var operation = (a,b,callback2) => {
    console.log('Here');
    return callback2(a,b);
};

// console.log(addParam(1,2));
// console.log(operation(1,2,addParam));
console.log(operation(1,2,subParam));