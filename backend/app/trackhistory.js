const express = require('express');
const mongoose = require('mongoose');
const TrackHistory = require('../models/TrackHistory');
const Track = require('../models/Track');
const Album = require('../models/Album');
const auth = require('../middleware/auth');

const ObjectId = mongoose.Types.ObjectId;

const router = express.Router();

router.post('/', auth, async (req, res) => {

    const track = await Track.findById(req.body.track);
    if(!track){
        return res.status(401).send({error: "No such track"});
    }
    const dateTime = new Date();
    const trackHistory = new TrackHistory({...req.body, datetime: dateTime.toISOString(), user: req.user._id});

    try{
        await trackHistory.save();
        res.send(trackHistory);
    } catch(e){
        res.status(400).send(e);
    }
});

router.get('/', auth, async (req, res) => {
    try{
        const trackHistoriesData = await TrackHistory.find({user: ObjectId(req.user._id)}).populate( {path : 'track', populate: {path: 'album', populate: {path: 'artist'}}});
        res.send(trackHistoriesData);
    } catch(e) {
        res.status(404).send({message: e})
    }
});

module.exports = router;
