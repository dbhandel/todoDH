const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('submit prop should use the passed down fn and be called with valid text', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo submit={spy}/>);
    let $el = $(React.findDOMNode(addTodo));
    addTodo.refs.newTodoInput.value = 'feed cat';

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('feed cat');
  });
  it('submit prop should use the passed down fn but not be called with invalid text', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo submit={spy}/>);
    let $el = $(React.findDOMNode(addTodo));
    addTodo.refs.newTodoInput.value = '';

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
