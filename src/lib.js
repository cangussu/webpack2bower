import {createStore} from 'redux';
import {Map} from 'immutable';

const INITIAL_STATE = new Map();

function reducer(state, action) {}

const store = createStore(reducer);

class Lib42 {
  constructor(secret = 42) {
    this.store = INITIAL_STATE.set('secret', secret);
  }
  
  about() {
    console.log("This is all about libraries! secret:", this.store.get('secret'));
  }   
}

// API exported by this module
var api = {
  Lib42: Lib42,
  INITIAL_STATE: INITIAL_STATE
};
export default api; 