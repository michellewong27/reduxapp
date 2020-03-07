import { createStore } from 'redux';
import reducer from './reducer';

//store controls the state
//it has methods for controlling what goes in & out of state
    //getState -> returns the state
    //dispatch -> changes the state

//createStore requires the reducer function as its argument
const store = createStore(reducer)

//shows the state as obj -> console.log(store.getState())

export default store;