import React, { Component } from 'react';
import '../App.css';
 
 class Todoform extends Component {
   render() {
      const { details, notes/*,counter,todoid*/,chk} = this.props
      console.log(details)
      const note = notes
      .filter((note) => {
       return details.id === note.id })
       .map((msg,item) => <div className="todoitem" /*key="note"*/>
                       <div className="noteitem">
                       <label style={{ textDecorationLine: msg.status ? 'line-through' : 'none', 
                                       color: msg.status ? 'maroon' : 'black' }}>
                       {msg.note}</label></div>
                       <button 
                          className="Completebtn"
                          onClick={this.props.handleCompleted.bind(this, msg)}
                          type="button">Completed 
                        </button>
                       <button 
                          className="Removebtn"
                          onClick={this.props.removeTodo.bind(this, item)}>Remove
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
                     placeholder="What do you need to do?"
                     onChange={this.props.handleChange}
                     value={this.props.note}>
                  </input>
                  <button 
                     className="ButtonAdd"
                     onClick={this.props.handleSave}> + Add Note
                  </button>
                </div>
                 <br/>
                 <div className="NoteContainer">
                   <div className="todonote"><label>{note}</label></div>
                </div>
                <div className="StatusContainer">
                   <label 
                      className="Stat">{this.props.counter} todo/s left
                   </label>
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
