const React = require('react');
const moment = require('moment');

const Todo = React.createClass({

  render() {
    const {text, id, completed, createdAt, completedAt} = this.props;
    const renderDate = () => {
      let message = completedAt ? 'Completed ' : 'Created ';
      let timestamp = completedAt || createdAt;

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };
    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo
