import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMidlewarenk from 'redux-thunk';
import {AdsReducer} from "./AdsReducer";

let reducers = combineReducers({
    Ads: AdsReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMidlewarenk)))
window.store = store

export default store