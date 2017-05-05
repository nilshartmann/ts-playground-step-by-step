import {createStore, combineReducers, applyMiddleware} from 'redux';
import greetingReducer from './greetingReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        greeting: greetingReducer
    },
    composeWithDevTools(applyMiddleware(thunk))
));

export default store;