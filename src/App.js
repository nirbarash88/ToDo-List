import React from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo-list';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { tasks: [], completed: 0 };
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} completed={this.state.completed} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Form onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr, completed: this.state.completed + 1 });
  }

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

}

const Header = ({ numTodos, completed, shouldShow }) => {
  return (
    <div className='card-header'>
      <h1 className='card-header-title header'>
        todos amount: {numTodos}
      </h1>
      {shouldShow && <h2>completed todos: {completed}</h2>}
    </div>
  )
}

export default App;
