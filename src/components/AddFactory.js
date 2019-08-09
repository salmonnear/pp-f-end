import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddFactory extends Component {
    state = {
        name: '',
        upperBound: '',
        lowerBound: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value },
            { [e.target.upperBound]: e.target.value },
            { [e.target.lowerBound]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddFactory(this.state.name);
        this.setState({ name: '' }, { upperBound: ''}, { lowerBound: ''});
    }

    render() {
        return (
            <div>
                add factory here
            </div>
        )
    }
}

export default AddFactory
