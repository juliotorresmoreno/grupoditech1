
// @flow

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Root from '../Root';
import store from '../../store';

/**
 * @type {React.FC}
 */
const App = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <Root />
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
}

export default App;