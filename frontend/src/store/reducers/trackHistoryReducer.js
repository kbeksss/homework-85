import {FETCH_HISTORY_SUCCESS} from "../actions/trackHistoryActions";

const initialState = {
    trackHistory: []
};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY_SUCCESS:
            return {...state, trackHistory: action.history};
        default:
            return state;
    }
};

export default trackHistoryReducer;
