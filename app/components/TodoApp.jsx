const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'walk the dog',
        },
        {
          id: 2,
          text: 'feed the cat'
        },
        {
          id: 3,
          text: 'wash the car',
        },
        {
          id: 4,
          text: 'sweep the floor',
        }
      ]
    };
  },

  handleAddTodo(text) {
    alert(text);
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
