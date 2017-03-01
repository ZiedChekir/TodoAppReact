import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {
constructor(){
    super();
this.state ={
    newTodo:{}
}


    this.handleSubmit = this.handleSubmit.bind(this);
}
    

handleSubmit(e){
     e.preventDefault();
    if(!this.refs.todo.value)
    {
        alert("title required");
    } else{
        for(var i=0; i < this.props.todos.length ; i++)
        {
            if(this.refs.todo.value === this.props.todos[i].name){
                return alert("this sport exist already");
            }
        }
        
        this.setState({
            newTodo:{
                id:uuid.v4(),
                name: this.refs.todo.value
                
                
            }
        },function(){
           this.props.addTodo(this.state.newTodo);
           
        });
        
        this.refs.todo.value= '';
}

}
  render() {
  
    
    
    return (
     <div className="addProject well">
     <h3>Add Todo: </h3>
     <form  onSubmit={this.handleSubmit}>
       
            <div >
                <label>Todo task: </label><br/>
                <input type="text" className="form-control input-todo"  key="todo" ref="todo" placeholder="Add todo" />
            </div>
           
        <br/>
        <input className="btn btn-primary" type='submit' value='Submit' />
        
        </form>
     </div>
    );
  }
}

export default AddProject;
