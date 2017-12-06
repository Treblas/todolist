import React, { Component } from 'react';
import request from 'superagent';
import '../App.css';
 
 class Todoform extends Component {
  const {details, todos} = this.props
  const todoList = todos
 .filter((todoList) => {
    return details.id == todoList.id 
    })
 console.log(todoList)
   render() {
    return (
      <div className="Todoform">
        <input
          className="Inputbox"
          type="text"
          placeholder="Text here..."
          onChange={this.props.handleChange}
          value={this.props.todo_empty}>
        </input>
      <button 
          className="ButtonAdd"
           onClick={this.props.handleSave}>
           + Add Note
      </button>
      {
        todoList.map(item,index) =>{
        return <h2 key={index}>{item.todos}</h2>
        })
       }
      </div>

    );
  }
} 


export default Todoform;
