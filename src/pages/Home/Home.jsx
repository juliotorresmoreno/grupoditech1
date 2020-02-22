

import React, { Fragment } from 'react';
import Products from '../../components/Products';
import Carousel from '../../components/Carousel'

/**
 * @type {React.FC}
 */
const Home = () =>
    <Fragment>
        <Carousel />
        <br />

        <Products />
        <br/>
        
    </Fragment>

export default Home;