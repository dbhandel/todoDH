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
  }
}
