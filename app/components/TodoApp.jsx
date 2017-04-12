const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

//const TodoList = require('TodoList');
import TodoList from 'TodoList';

import AddTodo from 'AddTodo';

const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos(),
      createdAt: moment().unix(),
      completedAt: null
    };
  },

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: uuid(),
        text,
        completed: false,
        createdAt:
         moment().unix()}]
    });
  },
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>

        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <h1 className='page-title'>Todo App</h1>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo submit={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp
