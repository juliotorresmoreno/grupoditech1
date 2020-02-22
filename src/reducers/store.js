
// eslint-disable-next-line
import { Action, Reducer } from 'redux';
// eslint-disable-next-line
import { IStoreState, IBuyStoreAction } from '../types'

import { action_store } from '../actions/actionTypes';

/**
 * @type {IStoreState}
 */
const defaultState = {
    buy: null
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
        case action_store.buy:

            /**
             * @type {IBuyStoreAction}
             */
            let _action = action;
            return {
                ...state,
                buy: _action.product
            }
        default:
            return state
    }
}

export default reducer;