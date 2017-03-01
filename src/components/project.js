import React, { Component } from 'react';
 


class Project extends Component {
 
deleteTodo(id){
  this.props.onDelete(id);
}
  render() {
    
   let Todos;
    if(this.props.todos)
    {
      Todos = this.props.todos.map(todo => { 
         return (
        
            <li key={todo.name} value={ todo.name} ><strong>  { todo.name} :</strong> { todo.type} <button className="btn btn-danger" onClick={this.deleteTodo.bind(this, todo.id)} >X</button> </li>
            
        
         );
      });
    }
    
    return (
    
    	<div className="todo-list">
      <h1>Tasks remaining:</h1>
     <ul>
     {Todos}
	</ul>
  <hr size="30"/>
   </div>
    );
  }
}

export default Project;
