require('dotenv').config()
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, console.log(`running on port ${SERVER_PORT}`));
        console.log("db connected... pause.. right there!..... enhance")
    })
    .catch(err => {console.log(err)});