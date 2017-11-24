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
          {name: 'I Think to Myself', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Push It Past Red', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Sing A Hymn', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'}
        ],
        playlistName: 'testing',
        playlistTracks:
          [
            {name: 'Turmoil In The Land (vox version)', artist: 'FORCEFEELD', album: 'N/A'},
            {name: 'Noble Knight', artist: 'FORCEFEELD (Force the Sorcerer)', album: 'Noble Knights EP'},
            {name: 'Growing Pains', artist: 'FORCEFEELD', album: 'N/A'}
          ]
    };
  }

  // Lung
  // If the track is not already in the playlist, add it
  addTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.push(track);

    this.setState({playlistTracks: tracks});
  }

  // Roy
  // If the track is not already in the playlist, add it
  addTrack(track) {
    let inPlaylist = false;
      this.state.playlistTracks.forEach(trackObj=> {
        if (trackObj.id === track.id ) {
          inPlaylist = true;
        }
      });
        if (!inPlaylist) {
          let tracks = this.state.playlistTracks;
          tracks.push(track);
          this.setState({playlistTracks: tracks});
        }
      }

  // Kincaid
  // If the track is not already in the playlist, add it
  addTrack(track) {
      if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
        this.setState(prevState => ({
          playlistTracks: [...prevState.playlistTracks, track]
        }));
      }
    }

// Lung
// Find a track by the id and remove it from the playlistTracks array
  removeTrack(track){
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(
      currentTrack => currentTrack.id !== track.id
    );
    this.setState({playlistTracks: tracks});
  }

// Roy
// Find a track by the id and remove it from the playlistTracks array
  removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

      this.setState({playlistTracks: tracks});
  }

// Kincaid
// Find a track by the id and remove it from the playlistTracks array
removeTrack(track) {
  this.setState({
    playlistTracks: this.state.playlistTracks.filter(
    playlistTrack => playlistTrack.id !== track.id)
  });
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
