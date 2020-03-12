import axiosApi from "../../axiosApi";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';


const fetchArtistsSuccess = (artists) => ({type: FETCH_ARTISTS_SUCCESS, artists});


export const fetchArtists = () => {
    return async dispatch => {
        try{
            const response = await axiosApi.get('artists');
            dispatch(fetchArtistsSuccess(response.data));
        } catch(e){
            console.error(e);
        }
    }
};
