const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: []
    };
  },

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, {id: uuid(), text}]
    });
  },
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo submit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp
