const expect = require('expect');
const  reducers =require('reducers');
const df = require('deep-freeze-strict'); //recursively Object.freeze() on objects and functions to ensure that our reducers are pure functions. Only useful for testing.

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
})
