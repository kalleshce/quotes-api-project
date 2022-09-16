import { GET_AUTHORS_DATA, GET_AUTHORS_DATA_FAILURE, GET_AUTHORS_DATA_SUCCESS } from "../actions/constants"

const initialState = {
    isLoading: false,
    authorsData: {},
    error: null
}

export const authorsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHORS_DATA: {
            return { ...state, isLoading: true }
        }
        case GET_AUTHORS_DATA_SUCCESS: {
            return { ...state, authorsData: action.payload, isLoading: false }
        }
        case GET_AUTHORS_DATA_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state
    }
}