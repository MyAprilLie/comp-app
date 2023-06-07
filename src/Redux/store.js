import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import competitionsReducer from './reducers';

const store = createStore(competitionsReducer, applyMiddleware(thunkMiddleware));

export default store;
