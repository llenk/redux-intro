import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// the action is whatever you dispatch
// if the state is undefined, it gets the default value of an empty object
// these reducers run when the app starts
const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('First reducer', action);
        return state+1;
    }
    else if (action.type === 'REMOVE') {
        return state-1;
    }
    return state; //it will yell at you if you don't return something
    //
}

const secondReducer = (state = [], action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log('Second reducer', action);
        return [ ...state, 'oreo'];
    }
    return state;
}

const thirdReducer = (state = [], action) => {
    if (action.type === 'SUBMIT') {
        return [ ...state, action.val];
    }
    return state;
}

//this can only take in one reducer
//this is a shortcut for firstReducer: firstReducer
const storeInstance = createStore(
    //combine reducers and do some extra validation
    combineReducers({
        firstReducer,
        secondReducer,
        thirdReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
