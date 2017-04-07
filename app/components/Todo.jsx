const React = require('react');
const moment = require('moment');

const Todo = React.createClass({

  render() {
    const {text, id, completed, createdAt, completedAt} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = completedAt ? 'Completed ' : 'Created ';
      let timestamp = completedAt || createdAt;

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id)
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo
