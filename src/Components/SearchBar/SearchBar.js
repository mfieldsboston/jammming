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
  search(term){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(e) {
    let newTerm = e.target.value;
    this.setState({
      searchTerm: newTerm
    });
}
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
        onChange={this.handleTermChange}/>
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
