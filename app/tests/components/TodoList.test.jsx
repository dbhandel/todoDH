const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo item in the list for each Todo in the array', () => {
    let todoArray = [{id: 1}, {id: 2}, {id: 3}];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todoArray}/>)
    let $el = $(React.findDOMNode(todoList));
    let $todos = $el.children().length;

    //or do this way
    let expected = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect($todos).toBe(3);
    expect(expected.length).toBe(todoArray.length);
  });
});
