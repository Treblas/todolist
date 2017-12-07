import React, { Component } from 'react';
import '../App.css';
 
 class Todoform extends Component {
   render() {
    const { details, notes , counter, todoid} = this.props
    console.log(details)
    const note = notes
    .filter((note) => {
      return details.id === note.id })
    .map((msg) => <div className="todoitem" 
                       /*key="note"*/
                       id={msg.todoid}>
                       <input className="checkbox"
                       type="checkbox">
                       </input>
                       <div className="noteitem">
                         {msg.note}</div>
                       <button className="Completebtn"
                                onClick={this.props.handleCompleted.bind(this, msg)}
                               >Completed </button>
                       <button className="Removebtn"
                              onClick={this.props.removeTodo}
                              >Remove
                        </button>
                  </div>)
    return (
      <div className="Todoform">
      <div className="MainHeader">
            <h2 className="MainTitle">TO DO LIST  </h2>
         </div>
        <div className="FormContainer">
         <input
           className="Inputbox"
           type="text"
           placeholder="Text here..."
           onChange={this.props.handleChange}>
         </input>
         <button 
           className="ButtonAdd"
           onClick={this.props.handleSave}> + Add Note
         </button>
        </div>
        <br/>
        

        <div className="NoteContainer">
          <div className="todonote">{note}</div>
        </div>
        <div className="StatusContainer">
         <label className="Stat">{this.props.counter} todo/s left</label>
         <label className="allStat">All</label>
         <label className="activeStat">Active</label>
         <label className="completedStat">Completed</label>


        </div>
         <br/>
      </div>
    );
  }
} 


export default Todoform;
