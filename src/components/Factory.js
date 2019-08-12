import React, { Component } from 'react';
import AdjustFactory from './AdjustFactory';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



export class Factory extends Component {
    
    render() {
        //const _id = Math.round(Math.random() *100000000, 0);
        const {  _id, name, childNodes, upperBound, lowerBound } = this.props.factory;
        //console.log(childNodes);
        return (
            <React.Fragment>
<ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography >{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            childnodes {childNodes.map((num) => {
                return <p>{num}</p>;
            })}
            <p>Upper Limit : {upperBound}</p>
            <p>Lower Limit : {lowerBound}</p>
            {_id}
            <IconButton onClick={this.props.delFactory.bind(this, _id)} aria-label="delete" style={btnStyle} size="small"><DeleteIcon fontSize="medium" /></IconButton>
          </Typography>

          <AdjustFactory />
        </ExpansionPanelDetails>
        </ExpansionPanel>
        </React.Fragment>
        )
    }
}

const btnStyle = {
    float: 'right'
}

export default Factory
