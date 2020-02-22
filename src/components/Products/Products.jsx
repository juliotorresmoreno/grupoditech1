

import React, { Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Product from './Product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { IProduct, IProductsProps, IGlobalState } from '../../types';

import * as products from '../../actions/products'


/**
 * 
 * @param {IProduct} product 
 */
const renderElemnt = (product, key) => {
    return (
        <Col key={key} md={4}>
            <Product {...product} />
        </Col>
    );
}

/**
 * 
 * @param {IGlobalState} state 
 */
const mapState = (state) => ({
    items: state.products.products
});

/**
 * 
 * @type {React.FC<IProductsProps>}
 */
const Products = (props) => {
    if (props.items.length === 0) {
        props.dispatch(products.getValues());
    }
    return (
        <Fragment>
            <Container>
                <Row>
                    {props.items.map(renderElemnt)}
                </Row>
            </Container>
        </Fragment>
    )
}

Product.propTypes = {
    items: PropTypes.arrayOf(IProduct).isRequired
};

export default connect(mapState)(Products);