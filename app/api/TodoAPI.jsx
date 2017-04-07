const $ = require('jQuery');

module.exports = {
  setTodos: (todos) => {
    if($.isArray(todos)) {
      //localstorage caan only store strings
      if($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
      return todos //so we don't return undefined if setTodos fails
    }
  },
  getTodos: () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }
    return $.isArray(todos) ? todos : []; //parse(stringTodos) could theoret return an object
  },

  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed || showCompleted;
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      if(searchText && searchText.length > 1) {
        return todo.text.includes(searchText.toLowerCase());
      } else {
        return true;
      }
    });

    //sort to place noncompleted first
    // let compareFn = (todoA, todoB) => {
    //   if(((todoA.completed === false) && (todoB.completed === false)) ||
    //     ((todoA.completed === true) && (todoB.completed === true))) {
    //     return 0;
    //   } else if((todoA.completed === false) && (todoB.completed === true)) {
    //     return -1;
    //   } else {
    //     return 1;
    //   }
    // };
    // filteredTodos = filteredTodos.sort(compareFn)

    filteredTodos.sort((a, b) => {
      return a.completed === b.completed ? 0 : (a.completed < b.completed) ? -1 : 1
    })

    return filteredTodos;
  }
}
