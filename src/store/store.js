

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import defaultState from './state';
import reducers from '../reducers';

const store = createStore(reducers, defaultState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;