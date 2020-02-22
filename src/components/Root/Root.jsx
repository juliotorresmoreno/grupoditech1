// @flow

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
//import Header from '../Header';
import Footer from '../Footer';
import About from '../About';
import Contact from '../Contact';
import Home from '../../pages/Home';

/**
 * @type {React.FC}
 */
const Router = () => {

    return (
        <Fragment>
            
            { /* <Header />*/ }

            <Switch>
                <Route path="/" component={Home} />
            </Switch>

            <About />
            <br />
            <br />

            <Contact />
            <br />

            <Footer />

        </Fragment>
    )
}

export default Router;