const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState() {
    return {
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
  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp
