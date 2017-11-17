import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
