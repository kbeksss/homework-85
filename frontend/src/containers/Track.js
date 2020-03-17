import React, {useEffect, useState} from 'react';
import {Container} from "reactstrap";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import axiosApi from "../axiosApi";

const Track = (props) => {
    const [track, setTrack] = useState(null);
    const addToTrackHistory = async (userToken) => {
        try{
            await axiosApi.post('/track_history', {track: props.match.params.id}, {headers: {'Authorization': 'Token ' + userToken}});
        } catch(e){
            console.error(e);
        }
    };
    useEffect(() => {
        if(props.user){
            let [singleTrack] = props.tracks.filter(track => track._id === props.match.params.id);
            let [album] = props.albums.filter(album => album._id === singleTrack.album);
            setTrack({...singleTrack, album});
            addToTrackHistory(props.user.token).catch(e => console.error(e));
        }
        // eslint-disable-next-line
    }, []);
    console.log(track);
    return (
        <Container>
            {props.user && track ? (
                <>
                    <h2>Album Name: {track.album.name}</h2>
                    <h3>Track Name: {track.name}</h3>
                    <h4>Duration: {track.durationS} seconds</h4>
                </>
            ) : (
                <h2><NavLink to='/register'>Sign up</NavLink>  or <NavLink to='/login'>Login</NavLink></h2>
            )}
        </Container>
    );
};

const mapStateToProps = state => ({
    user: state.users.user,
    albums: state.albums.albums,
    tracks: state.tracks.tracks
});

export default connect(mapStateToProps)(Track);
