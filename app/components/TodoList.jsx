const React = require('react');
const {connect} = require('react-redux'); //connect is the other side of the Provider
// const Todo = require('Todo');
import Todo from 'Todo';

export const TodoList = React.createClass({

  render() {
    //const {todos} = this.props;
    let renderTodos = () => {
      const {todos} = this.props;
      if(todos.length === 0) {
        return (
          <p className='container__message'>Nothing To Do!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect((state) => {
  return {
    todos: state.todos
  };
})(TodoList);
