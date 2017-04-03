const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should invoke the function passed into onToggle when the checkbox is clicked', () => {
    let todoData = {
      id: 199,
      text: 'test',
      completed: false
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)

    //or these alternatives work
    //let todo = TestUtils.renderIntoDocument(<Todo  onToggle={spy}/>)
    //todo.setState(todoData);
    //todo.props.todoData = todoData;
    
    let $el = $(React.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  })
});
