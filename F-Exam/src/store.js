import { applyMiddleware, createStore } from "redux";
import RootReducers from "./redux/reducer";
import { thunk } from "redux-thunk";

const store = createStore(RootReducers,applyMiddleware(thunk))

export default store