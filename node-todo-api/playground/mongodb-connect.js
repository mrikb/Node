const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MondoDB');
    }
    console.log('Connected to mongoDB server.');

    db.close();
});