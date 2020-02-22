

import { combineReducers } from 'redux';
import products from './products';
import recommeds from './recommeds';
import store from './store';

export default combineReducers({
    products, recommeds, store
});