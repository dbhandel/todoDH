const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
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

  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : null
      }
      return todo
    });
    this.setState({ todos: updatedTodos});
  },

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, {id: uuid(), text, completed: false,
        createdAt: moment().unix()}]
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
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo submit={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp
