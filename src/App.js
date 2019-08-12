import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Factories from './components/Factories';
import axios from 'axios';
import AddFactory from './components/AddFactory';
import ButtonAppBar from './layout/Header';
import AdjustFactory from './components/AdjustFactory';
import DummyExpansionFunction from './components/DummyExpansionFunction';
import DummyExpansionPanel from './components/DummyExpansionPanel';

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
                  
          name: newFactory.name,
          lowerBound: newFactory.lowerBound,
          upperBound: newFactory.upperBound,
          childNodes: [1,2,3]
          })

          .then(res => { 
            //res.data.id = uuid.v4();
            console.log(res.data);
            this.setState({ factories:[...this.state.factories, res.data.createdFactory] })
          });
        
  }


  // Delete Factory
  delFactory = (_id) => {
    axios
      .delete(`http://localhost:3004/factories/${_id}`)
      .then(res =>
         this.setState({ 
           factories: [...this.state.factories.filter(factory => factory._id !== _id)]
          })
      );
  };

/*
  updateFactory = (_id) => {
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
        <h1 className="headerLabel">Factories</h1>
        <Factories factories = { this.state.factories } delFactory={ this.delFactory}/>

        
      </div>
    );

  }
  

}

export default App;
