import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <AddTodo />
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
