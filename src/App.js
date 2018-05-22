import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  buttonOneClicked = () => {
    const action = {type: 'BUTTON_ONE', someProp: 'hi'};
    this.props.dispatch(action);
  };
  buttonMinusClicked = () => {
    const action = {type: 'REMOVE', someProp: 'hi'};
    this.props.dispatch(action);
  };
  handleElementChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
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
        <input onChange={this.handleElementChange} />
        <button onClick={() => this.props.dispatch({type: 'SUBMIT', val: this.state.input})}>Submit</button>
      </div>
    );
  }
}

export default connect()(App);
