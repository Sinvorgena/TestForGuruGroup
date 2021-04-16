import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMidlewarenk from 'redux-thunk';
import {AdsReducer} from "./AdsReducer";

let redusers = combineReducers({
    Ads: AdsReducer
})

let store = createStore(redusers, applyMiddleware(thunkMidlewarenk))

window.store = store

export default store