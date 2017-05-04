import {createStore, combineReducers, applyMiddleware} from 'redux';
import greetingReducer from './greetingReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export type state = {
    greeting: string;
}

const store = createStore(
    combineReducers({
        greeting: greetingReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;