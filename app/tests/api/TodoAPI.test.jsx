
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

});
