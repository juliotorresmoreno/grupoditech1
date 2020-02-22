
import { action_products } from './actionTypes';

// eslint-disable-next-line
import { IGetProductsAction, IProducts } from '../types';
// eslint-disable-next-line
import { Dispatch } from 'redux';
// eslint-disable-next-line
import { ThunkAction } from 'redux-thunk';

/**
 * @type {() => ThunkAction}
 */
export const getValues = () => {
    
    return async (dispatch) => {

        /**
         * @type {IProducts}
         */
        const data = await (await fetch("/api/products.json")).json();

        /**
         * @type {IGetProductsAction}
         */
        const action = {
            type: action_products.set_products,
            products: data
        }
        return dispatch(action);
    }
}