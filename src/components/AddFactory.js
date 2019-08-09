import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ExpansionPanel, Button, TextField } from '@material-ui/core';

export class AddFactory extends Component {
    state = {
        name: '',
        upperBound: '',
        lowerBound: '',
        childNodes: '',
        numberOfNodes: ''
    }



    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addFactory( {name: this.state.name });
        
        //this.props.AddFactory( {name: this.state.name /*, upperBound:this.state.upperBound, lowerBound: this.state.lowerBound, childNodes: [1,2,3]*/});
        this.setState({ name: '' } /*, { upperBound: ''}, { lowerBound: ''} */ );
    }



    

    render() {
        return (
            <ExpansionPanel>
            <form onSubmit={this.onSubmit} >
                <TextField 
                    type="text" 
                    name="name" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Factory Name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <TextField
                    type="text" 
                    name="lowerBound" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Lower Bound"
                    value={this.state.lowerBound}
                    onChange={this.onChange}
                />
                <TextField
                    type="text" 
                    name="upperBound" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Upper Bound"
                    value={this.state.upperBound}
                    onChange={this.onChange}
                />
                <TextField
                    type="number" 
                    name="numOfNodes" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Number of Nodes"
                    value={this.state.numberOfNodes}
                    onChange={this.onChange}
                />
                <Button
                    type="submit"
                    value="submit"
                    className="btn">
                        Add Factory
                    </Button>
                
                
                {/* <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex: 1}}
                /> */}

{/*

                <input 
                    type="text" 
                    name="name" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Factory Name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input 
                    type="number" 
                    name="lowerBound" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Lower Bound"
                    value={this.state.lowerBound}
                    onChange={this.onChange}
                />
                <input 
                    type="number" 
                    name="upperBound" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Upper Bound"
                    value={this.state.upperBound}
                    onChange={this.onChange}
                />
                <input
                    type="number" 
                    name="upperBound" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Upper Bound"
                    value={this.state.upperBound}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex: 1}}
                />

*/}


            </form>
            </ExpansionPanel>
        )
    }
}

// PropTypes
AddFactory.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddFactory
