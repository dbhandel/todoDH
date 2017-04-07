
const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
  localStorage.removeItem('todos');
  })

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set todos in localstorage when a valid todos array is passed', () => {
      let todos = [{id: 101, text: 'hi', completed: false}];
      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos);
    });
    it('should not set todos in localstorage when a non- array is passed', () => {
      let badTodos = {id: 991234, text: 'bye', completed: true};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      expect(TodoAPI.getTodos('todos')).toEqual([]);
    });

    it('should return array of todos for good localstorage data', () => {
      let todos = [{id: 101, text: 'hi', completed: false}];
      localStorage.setItem('todos', JSON.stringify([{id: 101, text: 'hi', completed: false}]));
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    let todos = [
      {id: 1, text: 'dog', completed: true},
      {id: 2, text: 'cat', completed: false},
      {id: 3, text: 'mouse', completed: true}
    ];

    it('should return all items if showCompleted is true', () => {
      let actual = TodoAPI.filterTodos(todos, true, '');
      expect(actual.length).toEqual(todos.length);
    });
    it('should return only completed items if showCompleted is false', () => {
      let actual = TodoAPI.filterTodos(todos, false, '');
      //let expected = [{id: 2, text: 'cat', completed: false}];
      let filtered = TodoAPI.filterTodos(todos, false, '');
      //alternative expectation compared to test above
      expect(filtered.length).toEqual(1);
    });

    it('should return only todos whose text contain the searchText', () => {
      let actual = TodoAPI.filterTodos(todos, true, 'do');
      let expected = [{id: 1, text: 'dog', completed: true}];
      expect(actual).toEqual(expected);
    });

    it('should return no todos when none have text that contains the searchText', () => {
      let actual = TodoAPI.filterTodos(todos, true, 'xyz');
      let expected = [{id: 1, text: 'dog', completed: true}];
      expect(actual).toEqual([]);
    });

    it('results to be sorted with noncompleted first', () => {
      let actual = TodoAPI.filterTodos(todos, true, '');
      let expected = [
        {id: 2, text: 'cat', completed: false},
        {id: 1, text: 'dog', completed: true},
        {id: 3, text: 'mouse', completed: true}
      ];
      expect(actual).toEqual(expected);
    });
  });
});
