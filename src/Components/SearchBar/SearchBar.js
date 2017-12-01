import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(searchTerm) {
    this.props.onSearch(searchTerm);
    this.setState({
      searchTerm: searchTerm
    });
  }

  handleTermChange(e) {
    let searchTerm = e.target.value;
    this.search(searchTerm);
  }

render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
        onChange={this.handleTermChange}/>
      </div>
    );
  }
}

export default SearchBar;

/* Older code

search(searchTerm) {
  this.props.onSearch(this.state.searchTerm);
}

handleTermChange(e) {
  let newTerm = e.target.value;
  this.setState({
    searchTerm: newTerm
  });
}

<a onClick={this.search}>SEARCH</a>
 */
