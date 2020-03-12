import axiosApi from "../../axiosApi";

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';

const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});



export const fetchAlbums = (id) => {
    return async dispatch => {
        try{
            const response = await axiosApi.get('albums?artist=' + id);
            dispatch(fetchAlbumsSuccess(response.data));
        } catch(e){
            console.error(e);
        }
    }
};
