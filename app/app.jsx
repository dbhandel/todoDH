var React = require('react');
var ReactDOM = require('react-dom');
const {Provider} = require('react-redux'); //permits access to the store directly by any children without having to pass down through props the parents methods and properties and also lets the children dispatch actions

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();
store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

console.log('current state---->  ', store.getState());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}><TodoApp /></Provider>,
  document.getElementById('app')
);
