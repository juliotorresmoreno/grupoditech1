
// eslint-disable-next-line
import { Action, Reducer } from 'redux';
// eslint-disable-next-line
import { IProductsState, IGetRecommendsAction } from '../types'

import { action_recommends } from '../actions/actionTypes';

/**
 * @type {IProductsState}
 */
const defaultState = {
    recommeds: []
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
        case action_recommends.set_recommends:

            /**
             * @type {IGetRecommendsAction}
             */
            let _action = action;
            return {
                ...state,
                recommeds: _action.recommeds
            }
        default:
            return state
    }
}

export default reducer;