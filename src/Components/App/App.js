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
          {name: 'Sing A Hymn', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Peace of Mind', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Eye of the Cyclone', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'}
        ],
        playlistName: 'FORCEFEELD Playlist',
        playlistTracks:
          [
            {name: 'Turmoil In The Land (vox version)', artist: 'FORCEFEELD', album: 'N/A'},
            {name: 'Noble Knight', artist: 'FORCEFEELD (Force the Sorcerer)', album: 'Noble Knights EP'},
            {name: 'Growing Pains', artist: 'FORCEFEELD', album: 'N/A'}
          ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

// Roy => If the track is not already in the playlist, add it
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

// Roy => Find a track by the id and remove it from the playlistTracks array
  removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({playlistTracks: tracks});
  }

  //Roy, Lung, Kincaid => Set the state of playlistName to a new value
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  // Kincaid => If the track is not already in the playlist, add it
  /*addTrack(track) {
      if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
        this.setState(prevState => ({
          playlistTracks: [...prevState.playlistTracks, track]
        }));
      }
    }

// Kincaid => Find a track by the id and remove it from the playlistTracks array
removeTrack(track) {
  this.setState({
    playlistTracks: this.state.playlistTracks.filter(
    playlistTrack => playlistTrack.id !== track.id)
  });
}*/

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
