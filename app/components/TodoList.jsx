const React = require('react');
const Todo =require('Todo');

const TodoList = React.createClass({

  render() {
    //const {todos} = this.props;
    let renderTodos = () => {
      const {todos} = this.props;
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
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

module.exports = TodoList
