import React, { Component } from 'react';
import Factory from './Factory';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';




export class Factories extends Component {
    render() {
        return this.props.factories.map( (factory) => (

            <div className="container">
                <ExpansionPanel className="expansionPanel">
                    <Factory key= {factory.id} factory={factory} delFactory={this.props.delFactory} />
                </ExpansionPanel>
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
