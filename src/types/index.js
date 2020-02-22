
// @flow

// eslint-disable-next-line
import { ThunkDispatch } from 'redux-thunk';

export const IProduct = {
    id: 0,
    name: '',
    description: '',
    img: '',
}

export const IProductProps = {
    ...IProduct,

    /**
     * @type {ThunkDispatch}
     */
    dispatch: () => {}
}

/**
 * @type {IProduct[]}
 */
export const IProducts = [];

export const IProductsState = {
    /**
     * @type {Array<IProduct>}
     */
    products: []
}

export const IStoreState = {
    /**
     * @type {IProduct | null}
     */
    buy: null
}

export const IProductsProps = {
    
    /**
     * @type {ThunkDispatch}
     */
    dispatch: () => {},

    /**
     * @type {IProduct[] }
     */
    items: []
}

export const IRecommedsState = {
    /**
     * @type {Array<IRecommend>}
     */
    recommeds: []
}

export const IGlobalState = {
    products: IProductsState,
    recommeds: IRecommedsState,
    store: IStoreState
}

export const ICarouselProps = {
    /**
     * @type {products[]}
     */
    items: [],

    /**
     * @type {ThunkDispatch}
     */
    dispatch: () => void (0)
}

export const IRecommend = {
    src: "",
    altText: "",
    header: "",
    caption: "",
    key: ""
}

/**
 * @type {Array<IRecommend>}
 */
export const IRecommends = [];

export const IGetRecommendsAction = {

    type: '',

    /**
     * @type {IRecommend[]}
     */
    recommeds: []
}

export const IBuyStoreAction = {

    type: '',

    /**
     * @type {IProduct | null}
     */
    product: null
}

export const IGetProductsAction = {

    type: '',

    /**
     * @type {IProduct[]}
     */
    products: []
} 

export const IContactProps = {

    /**
     * @type {IProduct | null}
     */
    buy: null,

    /**
     * @type {ThunkDispatch}
     */
    dispatch: () => {}
}