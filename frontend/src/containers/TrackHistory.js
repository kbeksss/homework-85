import React, {useEffect} from 'react';
import {fetchHistory} from "../store/actions/trackHistoryActions";
import {connect} from "react-redux";
import {Container} from "reactstrap";

const TrackHistory = (props) => {
    useEffect(() => {
        if(props.user){
            props.fetchHistory();
        } else {
            props.history.replace('/');
        }
    }, []);
    return (
        <Container>
            {props.trackHistory.map(history => (
                <div className='border-top border-bottom my-5' key={history._id}>
                    <h4><b>Artist:</b> {history.track.album.artist.name}</h4>
                    <h4><b>Track name</b> {history.track.name}</h4>
                    <h4><b>Datetime</b> {history.datetime}</h4>
                </div>
            ))}

        </Container>
    );
};
const mapStateToProps = state => ({
    user: state.users.user,
    trackHistory: state.trackHistory.trackHistory
});
const mapDispatchToProps = dispatch => ({
    fetchHistory: () => dispatch(fetchHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);
