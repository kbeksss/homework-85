const mongoose = require('mongoose');
const config = require('./config');
const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collections){
        await mongoose.connection.db.dropCollection(coll.name);
    }
    const [artistOne, artistTwo, artistThree] = await Artist.create({
        name: 'Baahh Oioi',
        photo: 'fixtures/artistOne.jpeg',
        info: 'Some funny artist'
    },{
        name: 'Uhuhu Muhuhu',
        photo: 'fixtures/artistTwo.jpg',
        info: 'A dummy artist'
    },{
        name: 'Blaha Mlaha',
        photo: 'fixtures/artistThree.jpg',
        info: 'Silly artist'
    });

    const [albumOne, albumTwo, albumThree] = await Album.create({
        name: "Some funny album",
        artist: artistOne,
        date: '2005',
        coverImage: 'fixtures/albumOne.jpg',
    },{
        name: "Some dummy album",
        artist: artistTwo,
        date: '2007',
        coverImage: 'fixtures/albumTwo.jpg',
    },{
        name: "Some stupid album",
        artist: artistThree,
        date: '2010',
        coverImage: 'fixtures/albumThree.jpg',
    });
    await Track.create({
        name: 'Way to hell',
        album: albumOne,
        durationS: 159,
        number: 1
    }, {
        name: 'hello hello',
        album: albumOne,
        durationS: 150,
        number: 2
    },{
        name: 'Way Way',
        album: albumTwo,
        durationS: 120,
        number: 1
    },{
        name: 'Who are you',
        album: albumTwo,
        durationS: 168,
        number: 2
    },{
        name: 'Where are you',
        album: albumThree,
        durationS: 160,
        number: 1
    });

    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});
