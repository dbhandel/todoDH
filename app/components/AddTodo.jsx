const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props; //connect gives us access to dispatch
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },

  render() {
    return (
      <div className='container__footer'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='What do you want to do?' ref='todoText'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
