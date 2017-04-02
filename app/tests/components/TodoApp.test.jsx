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
  })
});
