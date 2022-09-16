import axios from "axios"
import { GET_RANDOM_QUOTE, GET_RANDOM_QUOTE_FAILURE, GET_RANDOM_QUOTE_SUCCESS } from "./constants"


const getRandomQuote = () => {
    return {
        type: GET_RANDOM_QUOTE
    }
}

const getRandomQuoteSuccess = (data) => {
    return {
        type: GET_RANDOM_QUOTE_SUCCESS,
        payload: data
    }
}
const getRandomQuoteFailure = (err) => {
    return {
        type: GET_RANDOM_QUOTE_FAILURE,
        payload: err
    }
}

export const getAllRandomQuote = () => {
    return (dispatch) => {
        dispatch(getRandomQuote)
        axios.get('https://staging.quotable.io/random')
            .then(res => dispatch(getRandomQuoteSuccess(res.data)))
            .catch(err => dispatch(getRandomQuoteFailure(err)))
    }
}