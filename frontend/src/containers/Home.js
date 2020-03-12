import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchArtists} from "../store/actions/artistsActions";
import {Card, Container} from "reactstrap";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";

const Home = (props) => {
    useEffect(() => {
        props.fetchArtists();
    }, []);
    const openArtist = (id) => {
        props.history.push('/artist/'+id);
    };
    return (
        <Container className='mt-5'>
            {props.artists.map(artist => (
                <Card className='my-3' key={artist._id} onClick={() => openArtist(artist._id)}>
                    <ImageThumbnail image={artist.photo}/>
                    <h2>{artist.name}</h2>
                </Card>
            ))}
        </Container>
    );
};


const mapStateToProps = state => ({
    artists: state.artists.artists,
});
const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
