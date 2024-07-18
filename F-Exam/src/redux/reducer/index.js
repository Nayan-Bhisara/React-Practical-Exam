import { combineReducers } from "redux";
import UserReducer from "./reducer";

const RootReducers  = combineReducers ({
    user : UserReducer
})

export default RootReducers;