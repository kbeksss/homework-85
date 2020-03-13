import React, {useEffect, useState} from 'react';
import {fetchTracks} from "../store/actions/tracksReducer";
import {Card, Container} from "reactstrap";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Album = (props) => {
    const [albumName, setAlbumName] = useState('');
    useEffect(() => {
        props.fetchTracks(props.match.params.albumId);
        setAlbumName(() => {
            let album = props.albums.filter(album => {
                return album._id === props.match.params.albumId;
            });
            if(album.length){
                return album[0].name;
            } else{
                return 'undefined'
            }
        })
    }, []);

    return (
        <Container className='mt-5'>
            <NavLink to='/'>Home</NavLink>
            <h2>Artist: {props.artists.length ? props.artists[0].name : 'Unknown'}</h2>
            <h2>Album: {albumName}</h2>
            <h3>Tracks</h3>
            {props.tracks.map(track => (
                <Card className='p-4 my-4' key={track._id}>
                    <p>Number: {track.number}</p>
                    <p>Name: {track.name}</p>
                    <p>Duration: {track.durationS} seconds</p>
                </Card>
            ))}
        </Container>
    );
};

const mapStateToProps = state => ({
    tracks: state.tracks.tracks,
    artists: state.artists.artists,
    albums: state.albums.albums,
});
const mapDispatchToProps = dispatch => ({
    fetchTracks: (albumId) => dispatch(fetchTracks(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
