import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Converter from '../Widgets/Converter/converter'

class App extends Component {
  render() {
    return (
        <Converter/>
    );
  }
}

export default App;