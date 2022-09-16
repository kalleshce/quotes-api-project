import axios from "axios"
import { GET_AUTHORS_DATA, GET_AUTHORS_DATA_FAILURE, GET_AUTHORS_DATA_SUCCESS } from "../actions/constants"

const getAuthorsData = () => {
    return {
        type: GET_AUTHORS_DATA
    }
}

const getAuthorsDataSuccess = (data) => {
    return {
        type: GET_AUTHORS_DATA_SUCCESS,
        payload: data
    }
}
const getAuthorsDataFailure = (error) => {
    return {
        type: GET_AUTHORS_DATA_FAILURE,
        payload: error
    }
}

export const getAllAuthorsData = () => {
    return (dispatch) => {
        dispatch(getAuthorsData())
        axios.get('https://api.quotable.io/authors')
            .then(res => dispatch(getAuthorsDataSuccess(res.data)))
            .catch(err => dispatch(getAuthorsDataFailure(err)))
    }
}
