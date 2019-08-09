import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Factories from './components/Factories';
import axios from 'axios';
import AddFactory from './components/AddFactory';
import ButtonAppBar from './layout/Header';

class App extends Component {
  state = {
    factories: []
  };

  
  componentDidMount() {
    axios
        .get('http://localhost:3004/factories')
        .then(res => this.setState({ factories: res.data.factories }));
  };

  addFactory = (title) => {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false,
          })
          .then(res => { 
            //res.data.id = uuid.v4();
            this.setState({ todos:[...this.state.todos, res.data] })
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

  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <AddFactory />
        <h2 className="headerLabel">Factories</h2>
        <Factories factories = { this.state.factories } delFactory={ this.delFactory}/>
      
      </div>
    );

  }
  

}

export default App;
