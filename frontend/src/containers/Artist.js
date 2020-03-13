import React, {useEffect} from 'react';
import {Card, Container} from "reactstrap";
import {fetchAlbums} from "../store/actions/albumsActions";
import {connect} from "react-redux";
import ImageThumbnail from "../components/ImageThumbnail/ImageThumbnail";
import {NavLink} from "react-router-dom";

const Artist = (props) => {
    useEffect(() => {
        props.fetchAlbums(props.match.params.id);
        // eslint-disable-next-line
    }, []);
    const openAlbum = (albumId) => {
        props.history.replace('/album/' + albumId);
    };
    return (
        <Container>
            <NavLink to='/'>Home</NavLink>
            <h2>Artist's albums</h2>

            {props.albums.map(album => (
                <Card className='my-3' key={album._id} onClick={() => openAlbum(album._id)}>
                    <ImageThumbnail image={album.coverImage}/>
                    <p>{album.name}</p>
                    <p>{album.date}</p>
                </Card>
            ))}
        </Container>
    );
};

const mapStateToProps = state => ({
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: (id) => dispatch(fetchAlbums(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
