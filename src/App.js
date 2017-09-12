import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return <h2>howdy</h2>;
  }
}

function mapStateToProps(state) {
  console.log('mapstateToProps: ', state);
  return state;
}

export default connect(mapStateToProps, {})(App);
