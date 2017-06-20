import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Col, Row, Grid } from 'react-bootstrap'
import Converter from '../Widgets/Converter/converter'

class App extends Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col sm={3}>
              <div className="App">
                <Converter/>
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;