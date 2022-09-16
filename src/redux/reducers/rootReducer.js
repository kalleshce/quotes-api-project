import { combineReducers } from "redux";
import { userProfileReducer } from "./userProfileReducer";

export const reducer = combineReducers({
    userProfile: userProfileReducer
})