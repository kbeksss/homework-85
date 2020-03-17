import axiosApi from "../../axiosApi";

export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';

const fetchHistorySuccess = (history) => ({type: FETCH_HISTORY_SUCCESS, history});

export const fetchHistory = () => {
    return async (dispatch, getState) => {
        try{
            const user = getState().users.user;
            const response = await axiosApi.get('/track_history', {headers: {"Authorization": "Token " + user.token}});
            dispatch(fetchHistorySuccess(response.data));
        } catch(e){
            console.error(e);
        }
    }
};
