

import React from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

// eslint-disable-next-line
import { IGlobalState, IProductProps } from '../../types';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as store from '../../actions/store'


/**
 * 
 * @param {IGlobalState} state 
 */
const mapProps = (state) => ({

})

/**
 * @param {IProductProps} props
 * 
 * @type {React.FC<IProductProps>}
 */
const Product = (props) => {

    const onClick = () => {
        props.dispatch(store.buy({
            id: props.id,
            name: props.name,
            img: props.img,
            description: props.description
        }));
    }

    return (
        <Card>
            <CardImg top width="100%" src={props.img} />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
                <a
                    onClick={onClick}
                    className="btn btn-primary"
                    href="#contact">Buy</a>
            </CardBody>
        </Card>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default connect(mapProps)(Product);