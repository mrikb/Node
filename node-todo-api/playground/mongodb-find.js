const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MondoDB');
    }
    console.log('Connected to mongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b04974a316bf3d733d8f555')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to Fetch Todos');
    // });

    db.collection('Users').find({
        name: 'Mrik'
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to Fetch Todos');
    });

    db.close();
});