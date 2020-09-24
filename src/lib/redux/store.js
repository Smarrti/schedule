import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import eventsReducer from "./eventsReducer";

let rootReducer = combineReducers({
    eventsPage: eventsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
