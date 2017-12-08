import React, { Component } from 'react';
import Todoform from './Components/Todoform'

import './App.css';

class App extends Component {
   state = {  
      details: {},
      notes: [],
      note: '',
      todoid: 1,
      status: '',
      counter: 0,
      completed:0,

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
        note: this.state.note,
        todoid: this.state.todoid,
        status: this.state.status,
        counter: this.state.counter + 1,   
      }
      this.setState({
       notes: this.state.notes.concat(obj),
       note: '',
       todoid: this.state.todoid + 1,
       status: false,
       counter:  this.state.counter + 1 ,      
     })
  }
  handleCompleted(msg){
   //var counts = this.state.counter > 1 ? 0 : this.state.counter == 0 ? 0 : -1; 
    var newList = this.state.notes.map(item => {
    const itemSelected = item.todoid  === msg.todoid
    if(itemSelected) item.status = !item.status
     // var counts = this.state.status ? this.state.counter - 1 : this.state.counter + 1 
    return item
      })
    this.setState({
      counter:  this.state.counter - 1 ,
      completed: ("Completed:", this.state.completed + 1)
     //status: !this.state.status ? this.state.counter + 1 : this.state.counter - 1 
    })
     console.log(msg)
  }
  render() {
      console.log('Todo List :', this.state.notes)
      console.log('Counter :', this.state.counter)
      console.log('Completed Tasks :', this.state.completed)
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
               handleCompleted={this.handleCompleted.bind(this)}
               removeTodo={this.removeTodo.bind(this, 'counter')}
               id={this.state.todoid}
               complete={this.state.complete}
           />
        </header> 
      </div>
    );
  }
}

export default App;