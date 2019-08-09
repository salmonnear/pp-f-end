import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Factories from './components/Factories';
import axios from 'axios';
import AddFactory from './components/AddFactory';
import ButtonAppBar from './layout/Header';
import AdjustFactory from './components/AdjustFactory';

class App extends Component {
  state = {
    factories: []
  };

  
  componentDidMount() {
    axios
        .get('http://localhost:3004/factories')
        .then(res => this.setState({ factories: res.data.factories }));
  };

  addFactory = (newFactory) => {
    axios
        .post('http://localhost:3004/factories', {
            
            name: 'samM',
            lowerBound: '1',
            upperBound: '5',
            childNodes: [1,2,3]

/*
            name: newFactory.name,
            lowerBound: newFactory.lowerBound,
            upperBound: newFactory.lowerBound,
            childNodes: [1,2,3]
*/

          })

          .then(res => { 
            //res.data.id = uuid.v4();
            this.setState({ factories:[...this.state.factories, res.createdFactories] })
          });
        
  }


  // Delete Factory
  delFactory = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
         this.setState({ 
           factories: [...this.state.factories.filter(factory => factory.id !== id)]
          })
      );
  };

/*
  updateFactory = (id) => {
    axios 
      .patch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => 
        this.setState({
          factories:
        })  )
  }
  */



  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <AddFactory addFactory={this.addFactory}/>
        <h2 className="headerLabel">Factories</h2>
        <Factories factories = { this.state.factories } delFactory={ this.delFactory}/>
        
      </div>
    );

  }
  

}

export default App;
