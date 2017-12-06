import React, { Component } from 'react';
import Todoform from './Components/Todoform'

import logo from './logo.svg';
import './App.css';

class App extends Component {
   state = {
     todo_empty: '',
     todos: [],
     details: {}
  }
  handleChange(prop, e){
    this.setState({[prop]: e.target.value })
  }
  handleSave(){
      var obj ={
        id:   this.state.details.id,
        todos: this.state.todo_empty
      }
      this.setState({
       todos: this.state.todos.concat(obj),
       todo_empty: ''})
  }

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Todo List</h1>
           <Todoform
             handleChange={this.handleChange.bind(this, 'todo_empty')}
             handleSave={this.handleSave.bind(this)} 
             todos={this.state.todos}
             details={this.state.details}
             todo_empty={this.state.todo_empty} />
        </header>
       
      </div>
    );
  }
}

export default App;
