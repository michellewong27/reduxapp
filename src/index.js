import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//store controls the state
//it has methods for controlling what goes in & out of state
    //getState -> returns the state
    //dispatch -> changes the state

//define default state as its own variable
const defaultState = {
    likes: 0,
    text: "",
    darkMode: false,
    things: []
}
//createStore requires the reducer function as its argument
const store = createStore(reducer);

//job of reducer is to return new state
function reducer(prevState = defaultState, action){
    console.log("state", prevState)
    console.log("action", action)
    //whatever is returned from this function BECOMES your newv state
        //return an object, (right now ->allows us to always return previous state)
    return prevState
}

ReactDOM.render(<App />, document.getElementById('root'));