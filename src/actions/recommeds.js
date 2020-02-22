
import { action_recommends } from './actionTypes';

// eslint-disable-next-line
import { IGetRecommendsAction, IRecommends } from '../types';
// eslint-disable-next-line
import { Dispatch } from 'redux';
// eslint-disable-next-line
import { ThunkAction } from 'redux-thunk';

/**
 * @type {() => Promise<IGetRecommendsAction>}
 */
export const get = () => {
    return async (dispatch) => {

        /**
         * @type {IRecommends}
         */
        const data = await (await fetch("/api/recommends.json")).json();

        /**
         * @type {IGetRecommendsAction}
         */
        const action = {
            type: action_recommends.set_recommends,
            recommeds: data
        }
        return dispatch(action);
    }
}
