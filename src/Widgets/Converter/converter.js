import React, { Component } from 'react';
import './converter.css';
import InputTextBox    from '../../Elements/InputTextBox.js'
import { Col, Row, Grid } from 'react-bootstrap'

class Converter extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={5} md={5} className="converter-input">
                        <InputTextBox />
                    </Col>
                    <Col sm={2} md={2}>
                        <div className="H3">=</div>
                    </Col>
                    <Col sm={5} md={5} className="converter-input">
                        <InputTextBox />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Converter;
