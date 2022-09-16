import { combineReducers } from "redux";
import { authorsDataReducer } from "./authorsDataReducer";
import { quotesListReducer } from "./quotesListReducer";
import { randomQuoteReducer } from "./randomQuoteReducer";

export const reducer = combineReducers({
    quotesList: quotesListReducer,
    randomQuote: randomQuoteReducer,
    authorsData: authorsDataReducer
})