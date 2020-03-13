import axiosApi from "../../axiosApi";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

const fetchTracksSuccess = (tracks) => ({type: FETCH_TRACKS_SUCCESS, tracks});


export const fetchTracks = (albumId) => {
    return async dispatch => {
        try {
            const response = await axiosApi.get('tracks?album=' + albumId);
            dispatch(fetchTracksSuccess(response.data));
        } catch(e) {
            console.error(e);
        }
    }
};
