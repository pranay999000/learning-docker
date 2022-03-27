const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;

mongoose
    .connect('mongodb://database:duracell@database:27017/?authSource=admin')
    .then(() => console.log('Successfully connected to database'))
    .catch((e) => console.log(e));

app.get('/', (req, res) => {
    res.send('<h2>Hi There!!</h2>');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
