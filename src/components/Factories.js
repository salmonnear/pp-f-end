import React, { Component } from 'react';
import Factory from './Factory';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export class Factories extends Component {

    
    render() {
{/* 

        return this.props.factories.map( (factory) => (

            <div className="container">
                    <Factory key = {factory._id} factory={factory} delFactory={this.props.delFactory}   />
            </div>
        ));

*/}
        return this.props.factories.map( (factory) => (

            <div className="container">
                    <Factory key = {factory._id} factory={factory} delFactory={this.props.delFactory}   />
            </div>
        ));


    }
}

// PropTypes
Factories.propTypes = {
    factories: PropTypes.array.isRequired,
    delFactory: PropTypes.func.isRequired,
}


export default Factories
