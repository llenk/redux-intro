import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import ElementForm from './ElementForm';
import ElementList from './ElementList';

class App extends Component {
  buttonOneClicked = () => {
    const action = {type: 'BUTTON_ONE', someProp: 'hi'};
    this.props.dispatch(action);
  };
  buttonMinusClicked = () => {
    const action = {type: 'REMOVE', someProp: 'hi'};
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.buttonOneClicked}>hi</button>
        <button onClick={this.buttonMinusClicked}>minus</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>hix2</button>
        <button onClick={() => this.props.dispatch({type: 'EAT_OREOS'})}>Eat All Oreos</button>
        <ElementForm />
        <ElementList />
      </div>
    );
  }
}

export default connect()(App);
