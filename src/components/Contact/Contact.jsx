



import React, { Fragment } from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

// eslint-disable-next-line
import { IGlobalState, IContactProps } from '../../types';

/**
 * 
 * @param {IGlobalState} state
 */
const mapProps = (state) => ({
    buy: state.store.buy
})

/**
 * @type {React.FC<IContactProps>}
 */
const Contact = (props) => {
    let subject, description
    if (props.buy !== null) {
        subject = `I am interested in buying [${props.buy.id} - ${props.buy.name}]`;
        description = `This product is of my interest\n\n${props.buy.description}`;
    }
    return (
        <Fragment>
            <Container id="contact">
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" name="name" id="name" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" name="email" id="email" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="Subject">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    defaultValue={subject} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="Description">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="description"
                                    defaultValue={description} />
                            </FormGroup>

                            <Button color='primary'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default connect(mapProps)(Contact);