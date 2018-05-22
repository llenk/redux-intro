import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class ElementList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Element List</h4>
                <ul>{this.props.reduxState.thirdReducer.map(item=><li key={item}>{item}</li>)}</ul>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(ElementList);