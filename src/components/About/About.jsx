

import React, { Fragment } from 'react';
import { Row, Col, Container } from 'reactstrap';

/**
 * @type {React.FC}
 */
const About = () => {
    return (
        <Fragment>
            <div className="aboutus-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="aboutus">
                                <h2 className="aboutus-title">About Us</h2>
                                <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                                <a className="aboutus-more" href="#more">read more</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="aboutus-banner">
                                <img className="about-img" src="/img/style-1104862_960_720.png" alt="" />
                            </div>
                        </Col>
                        <Col>
                            <div className="feature">
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Work with heart</h4>
                                            <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Reliable services</h4>
                                            <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Great support</h4>
                                            <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default About;