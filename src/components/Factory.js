import React, { Component } from 'react';
import AdjustFactory from './AdjustFactory';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export class Factory extends Component {
    
    render() {
        const { id, name, childNodes, upperBound, lowerBound } = this.props.factory;
        console.log(childNodes);
        return (
            <div>


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
          </Typography>
          <AdjustFactory />
        </ExpansionPanelDetails>




            </div>
        )
    }
}

export default Factory
