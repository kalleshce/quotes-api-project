import { GET_QUOTES_LIST, GET_QUOTES_LIST_FAILURE, GET_QUOTES_LIST_SUCCESS } from '../actions/constants'

const initialState = {
    isLoading: false,
    quotesListData: {},
    error: null
}

export const quotesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUOTES_LIST: {
            return { ...state, isLoading: true }
        }
        case GET_QUOTES_LIST_SUCCESS: {
            return { ...state, quotesListData: action.payload, isLoading: false }
        }
        case GET_QUOTES_LIST_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}