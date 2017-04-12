const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

//const TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({

  render() {
    return (
      <div>

        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <h1 className='page-title'>Todo App</h1>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp
