const MongoClient = require('mongodb').MongoClient;

//destructure

var user = {
    name: 'Rob',
    age: 35
}

var {name, age} = user;
console.log(name, age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MondoDB');
    }
    console.log('Connected to mongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //inser new doc to Users (name, age, location)

        db.collection('Users').insertOne({
        name: 'Mrik',
        age: 33,
        location: 'Palo Alto'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert Users');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});