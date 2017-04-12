const uuid = require('uuid');
const moment = require('moment');

export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export const showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};



export const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
          ...state, {
            id: uuid(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: moment().unix()
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(todo.id === action.id) {
          var newCompleted = !newCompleted;
          var newCompletedAt;
          newCompleted ? newCompletedAt = moment().unix() : newCompletedAt = null;
        } else {
          return todo;
        }
        return {
          ...todo, completed: newCompleted, completedAt: newCompletedAt
        };
      });
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ]
    default:
      return state;
  }
};
