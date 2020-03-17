import axiosApi from "../../axiosApi";
import {push} from 'connected-react-router';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


export const registerUserRequest = () => ({type: REGISTER_USER_REQUEST});
export const registerUserSuccess = (user) => ({ type: REGISTER_USER_SUCCESS, user});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

export const loginUserRequest = () => ({type: LOGIN_USER_REQUEST});
export const loginUserSuccess = (user) => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = (e) => ({type: LOGIN_USER_FAILURE, e});


export const registerUser = userData => {
    return async dispatch => {
        try{
            dispatch(registerUserRequest());
            const response = await axiosApi.post('/users', userData);
            dispatch(registerUserSuccess(response.data));
            dispatch(push('/'));
        } catch (error){
            if(error.response){
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'Network error or no internet'}));
            }
        }
    }
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            dispatch(loginUserRequest());
            const response = await axiosApi.post('/users/sessions', userData);
            dispatch(loginUserSuccess(response.data));
            dispatch(push('/'));
        } catch (e){
            if(e.response){
                dispatch(loginUserFailure(e.response.data));
            } else {
                dispatch(loginUserFailure({global: 'Network error or no internet'}));
            }
        }
    }
};
