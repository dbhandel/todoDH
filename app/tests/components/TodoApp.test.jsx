const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add a new todo when handleAddTodo is invoked', () => {
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: []});
    todoApp.handleAddTodo('test text');

    expect(todoApp.state.todos[0].text).toBe('test text');

    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed for a todo when handleToggle is called for that todo', () => {
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    let id = 1234;
    todoApp.setState({todos: [{
      id: id,
      text: 'test',
      completed: false,
      createdAt: 0,
      completedAt: null
    }]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(true);

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(false);

    //expect completedAt to be a number
    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  //test that when toggle from true to false, completedAt gets removed
  it('should toggle completedAt from true to null when completed is removed', () => {
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    let id = 1234;
    todoApp.setState({todos: [{
      id: id,
      text: 'test',
      completed: true,
      createdAt: 0,
      completedAt: 1
    }]});

    //expect completedAt to be a number
    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completedAt).toEqual(null);
  });
});
