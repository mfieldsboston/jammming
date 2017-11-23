import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = { searchResults:
        [
          {name: 'Movin on up'},
          {artist: 'George Jefferson'},
          {album: 'The Jefferson Album'}
        ],
        isRemoval: false
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} isRemoval={this.state.isRemoval}/>
          <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
