
// eslint-disable-next-line
import { Action, Reducer } from 'redux';
// eslint-disable-next-line
import { IProductsState, IGetProductsAction } from '../types'

import { action_products } from '../actions/actionTypes';

/**
 * @type {IProductsState}
 */
const defaultState = {
    products: [

    ]
}

/**
 * @type {Reducer}
 * 
 * @param {defaultState} state 
 * @param {Action} action 
 * 
 * @return {defaultState}
 */
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case action_products.set_products:
            
            /**
             * @type {IGetProductsAction}
             */
            let _action = action;
            return { ...state, products: _action.products }
        default:
            return state
    }
}

export default reducer;