import { GET_QUOTES_LIST, GET_QUOTES_LIST_FAILURE, GET_QUOTES_LIST_SUCCESS } from "./constants";
import axios from 'axios';

const getQuotes = () => {
    return {
        type: GET_QUOTES_LIST
    }
}

const getQuotesSuccess = (data) => {
    return {
        type: GET_QUOTES_LIST_SUCCESS,
        payload: data
    }
}

const getQuotesFailure = (err) => {
    return {
        type: GET_QUOTES_LIST_FAILURE,
        payload: err
    }
}

export const getAllQuotesList = () => {
    return (dispatch) => {
        dispatch(getQuotes())
        axios.get('https://api.quotable.io/quotes')
            .then(res => dispatch(getQuotesSuccess(res.data)))
            .catch(err => dispatch(getQuotesFailure(err)))
    }
}