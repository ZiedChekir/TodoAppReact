import React, { Component } from 'react';
import Project from './components/project';
import AddProject from './components/addProject';
import './App.css';
import firebase from 'firebase/app';

class App extends Component {
    constructor(){
    super();
    this.state = {
      todos : [],
      number: 1
    };
    var config = {
   apiKey: "AIzaSyBLMTpzzYc4UGbtEo8J_XTiQBrn_G0WDJs",
   authDomain: "todos-f82c7.firebaseapp.com",
   databaseURL: "https://todos-f82c7.firebaseio.com",
   storageBucket: "todos-f82c7.appspot.com",
   messagingSenderId: "1386766790"
 };
 firebase.initializeApp(config);
  }

  handleAddTodo(todo){
 let Todos = this.state.todos;
 Todos.push(todo);
this.setState({todos:Todos});


  }

  handleDelete(id){
    let Todos = this.state.todos;
    let index = Todos.findIndex(x => x.id === id);
    Todos.splice(index,1);
    this.setState({todos:Todos});
  }
  componentDidMount(){
  const rootRef = firebase.database().ref().child('text');
  const numberRef= rootRef;
  numberRef.on('value', snap =>{
    this.setState({
      number:snap.val()
    });
 });
}




  render() {
    return (
      <div >
          {this.state.number}
        <AddProject  addTodo={this.handleAddTodo.bind(this)} todos={this.state.todos}  />
        <Project onDelete={this.handleDelete.bind(this)} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
