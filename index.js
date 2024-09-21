// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://anoopsinghcs119:vnr1etWzbYtVJ9RD@monkan0.7l3bq.mongodb.net/";
// const client = new MongoClient(uri);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(1109, () => {
    console.log('Server is running on port 3000');
});


