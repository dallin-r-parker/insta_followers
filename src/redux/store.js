import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';

const middleware = applyMiddleware();

function combine() {
  return {
    loginReducer
  };
}

export default createStore(combineReducers(combine()), middleware);
