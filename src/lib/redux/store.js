import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    events: eventsRedicer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));