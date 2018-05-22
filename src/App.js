import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  buttonOneClicked = () => {
    const action = {type: 'BUTTON_ONE', someProp: 'hi'};
    this.props.dispatch(action);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.buttonOneClicked}>hi</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>hix2</button>
        
      </div>
    );
  }
}

export default connect()(App);
