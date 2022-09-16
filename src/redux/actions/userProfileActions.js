import axios from "axios"
import { GET_USER_DATA, GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS } from "../actions/constants"

const getUserProfile = () => {
    return {
        type: GET_USER_DATA
    }
}
const getUserProfileSuccess = (data) => {
    return {
        type: GET_USER_DATA_SUCCESS,
        payload: data
    }
}
const getUserProfileFailure = (error) => {
    return {
        type: GET_USER_DATA_FAILURE,
        payload: error
    }
}

export const getAllUserData = () => {
    return (dispatch) => {
        dispatch(getUserProfile())
        axios.get('https://randomuser.me/api/')
            .then(res => dispatch(getUserProfileSuccess(res.data)))
            .catch(err => dispatch(getUserProfileFailure(err)))
    }
}