const React = require('react');

const TodoSearch = React.createClass({
  handleSearch() {
    let searchText = this.refs.searchText.value;
    let showCompleted = this.refs.showCompleted.checked;
    this.props.onSearch(showCompleted, searchText);
  },

  render() {
    return (
      <div>
        <div>
          <input type="search" ref='searchText' placeholder='Search todos' onChange={this.handleSearch}/>
        </div>
        <div>
          <label >
            <input type="checkbox" ref='showCompleted' onChange={this.handleSearch}/>
            show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch
