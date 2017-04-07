const React = require('react');

const AddTodo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let inputText = this.refs.newTodoInput.value;
    let {submit} = this.props;
    if(inputText.length > 0) {
      this.refs.newTodoInput.value = '';
      submit(inputText);
    } else {
      this.refs.newTodoInput.focus();
    }
  },

  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='add a todo' ref='newTodoInput'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo
