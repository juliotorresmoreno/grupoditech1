
// @flow

// eslint-disable-next-line
import { IProduct, IBuyStoreAction } from '../types';
import { action_store } from './actionTypes';

/**
 * 
 * @param {IProduct} element 
 * @returns {IBuyStoreAction}
 */
export const buy = (element /* : typeof IProduct */) => {

    return {
        type: action_store.buy,
        product: element
    }
}