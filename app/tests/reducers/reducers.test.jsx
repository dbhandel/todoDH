const expect = require('expect');
const moment = require('moment');
const df = require('deep-freeze-strict'); //recursively Object.freeze() on objects and functions to ensure that our reducers are pure functions. Only useful for testing.

const  reducers =require('reducers');


describe('reducers', () => {
  describe('searchTextReducer', () => {
    it('should return the search text', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'apricot'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip the show completed', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add a new todo with the new text', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should flip the completion of a todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      let todos = [
        {
          id: 1,
          text: 'hello world',
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        },
        {
          id: 2,
          text: 'goodbye world',
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ];

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should add existing todos', () => {
      let todos = [
        {
          id: 1,
          text: 'huh',
          completed: false,
          completedAt: null,
          createdAt: 33000
        }
      ];
      let action = {
        type: 'ADD_TODOS',
        todos
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    })
  });
});
