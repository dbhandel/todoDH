const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call the fn passed to onSearch when the search string changes', () => {
    let text = 'Dog'
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let $el = $(React.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = text;
    TestUtils.Simulate.change($el.find('input')[0]);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  //jQuery free variant
  it('should call the fn passed to onSearch when the search string changes V2', () => {

    let text = 'Dog'
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = text;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call the fn passed to onSearch when show completed TodoSearch changes', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
