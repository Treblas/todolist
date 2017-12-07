import React, { Component } from 'react';
import Todoform from './Components/Todoform'

import './App.css';

class App extends Component {
   state = {
      search: '',
      details: {},
      notes: [],
      note: '',
      todoid: 1,
      status: 'Active',
      counter: 0,
      countAll: 0

  }
   handleChange(prop, e){
    this.setState({[prop]: e.target.value })
  }
  
  removeTodo(name, i){
    this.setState({
      counter: this.state.counter - 1
    })
    let notes = this.state.notes.slice();
    notes.splice(i, 1);
    this.setState({
      notes
    })
  }
  handleSave(){
      var obj ={
       //id:   this.state.details.id,
        note: this.state.note,
        todoid: this.state.todoid,
        status: this.state.status,
        counter: this.state.counter + 1

      }
      this.setState({
       notes: this.state.notes.concat(obj),
       note: '',
       todoid: this.state.todoid + 1,
       status: this.state.status,
       counter:  this.state.counter + 1 
     })
     //const {details, note, notes} = this.state

  }

  handleCompleted(){
    
     var complete = 'Completed'
     var completeobj ={
      counter: this.state.counter ,
      status: this.state.status
    }
    this.setState({
       counter:  this.state.counter - 1 ,
      notes: this.state.notes = 'Completed'
      // status: ({this.state.status: , 'Completed'})


     })
  }
  handleRemove(){
    var todolist = this.state.notes;
    var removeobj ={
      counter: this.state.counter 

    }
    this.setState({
       counter:  this.state.counter - 1 
     })
  }
  render() {
      console.log('Todo List :', this.state.notes)
      console.log('Counter :', this.state.counter)


    return (
      <div className="App">
        <header className="App-header">
           <Todoform
               handleChange={this.handleChange.bind(this, 'note')}
               handleSave={this.handleSave.bind(this)}
               notes={this.state.notes}
               details={this.state.details}
               note={this.state.note}
               counter={this.state.counter}
               handleRemove={this.handleRemove.bind(this, 'counter')}
               handleCompleted={this.handleCompleted.bind(this)}
               removeTodo={this.removeTodo.bind(this, 'counter')}
               id={this.state.todoid}
           />

        </header> 
      </div>
    );
  }
}

export default App;
