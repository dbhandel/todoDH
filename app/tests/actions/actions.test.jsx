const expect = require('expect');
const actions = require('actions');
//const import actions from 'actions'

describe('actions', () => {
  it('should generate the search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'test search'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate the add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'walk the dog'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate the toggle show completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate the toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 3
    };
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
