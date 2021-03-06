const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const users = require('./app/users');
const trackHistory = require('./app/trackhistory');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8000;

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    app.use('/artists', artists);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.use('/users', users);
    app.use('/track_history', trackHistory);

    app.listen(port, () => {
        console.log('Server is running on port: ', port);
    })
};

run().catch(e => console.error(e));
