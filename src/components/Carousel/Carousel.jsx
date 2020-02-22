// @flow

import React, { Fragment } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { ICarouselProps, IGlobalState, IProduct } from '../../types'

import * as recommeds from '../../actions/recommeds';

/**
 * 
 * @param {IGlobalState} state 
 */
const mapProps = (state) => ({
    items: state.recommeds.recommeds
});

 /**
 * 
 * @type {React.FC<ICarouselProps>}
 */
const Carousel = (props) => {    
    const items = props.items;
    if (items.length === 0) {
        props.dispatch(recommeds.get());
        return <Fragment />;
    }
    return <UncontrolledCarousel items={items} />;
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(IProduct)
}

export default connect(mapProps)(Carousel);
