import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  search(term){
    this.props.onSearch(term);
  }
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist isRemoval={false} tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
