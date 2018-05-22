import React, { Component } from 'react';
import { connect } from 'react-redux';

class ElementForm extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
        };
    }

    handleElementChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    };
    handleSubmit = () => {
        this.props.dispatch({ type: 'SUBMIT', val: this.state.input });
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <div>
                <h3>Input stuff</h3>
                <input onChange={this.handleElementChange} value={this.state.input}/>
                <button onClick={this.handleSubmit}>Submit</button>

            </div>
        );
    }
}

export default connect()(ElementForm);