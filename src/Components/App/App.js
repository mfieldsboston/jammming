import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchResults:
        [
          {name: 'I Think to Myself', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Push It Past Red', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Sing A Hymn', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Peace of Mind', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
          {name: 'Eye of the Cyclone', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'}
        ],
        playlistTracks:
          [
            {name: 'Turmoil In The Land (vox version)', artist: 'FORCEFEELD', album: 'N/A'},
            {name: 'Noble Knight', artist: 'FORCEFEELD (Force the Sorcerer)', album: 'Noble Knights EP'},
            {name: 'Growing Pains', artist: 'FORCEFEELD', album: 'N/A'}
          ],
          playlistName: 'FORCEFEELD Playlist'
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let inPlaylist = false;
      this.state.playlistTracks.forEach(trackObj => {
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

  removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    let trackURIs = [];
    this.state.playlistTracks.forEach(track => {
      trackURIs.push(track.uri);
    });
  }

  search(term) {
    //console.log(term);
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  //1st alternate version  / Save Playlist
  /*savePlaylist() {
  let trackURIs = [];
  this.state.playlistTracks.forEach(track => {
    trackURIs.push(track.uri);
  });
  Spotify.savePlaylist(this.state.playlistName, trackURIs);
  this.setState({
    playlistName: 'New Playlist',
    searchResults: []
  });
}*/

//2nd alternate version / Save Playlist
/*savePlaylist(){
  const trackUris = this.state.playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
    this.setState({playlistName: 'New Playlist',playlistTracks: []});
  });
}*/

//3rd alternate version / Save Playlist
/*savePlaylist() {
  const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
  Spotify.savePlaylist(this.state.playlistName, trackUris);
  // Once the playlist is save set the state back to empty
  this.setState({
    playlistName: "Force's Playlist",
    searchResults: [],
    playlistTracks: []
  });
} */

  // Alternate Add Track Approach
  /*addTrack(track) {
      if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
        this.setState(prevState => ({
          playlistTracks: [...prevState.playlistTracks, track]
        }));
      }
    }

// Alternate Remove Track Approach
removeTrack(track) {
  this.setState({
    playlistTracks: this.state.playlistTracks.filter(
    playlistTrack => playlistTrack.id !== track.id)
  });
}*/

  render() {
    console.log(this.state, 'state');
    console.log(this.state.playlistName, 'playlistName');
    console.log(this.state.playlistTracks, 'playlistTracks');
    console.log(this.state.searchResults, 'searchResults');
    console.log(this.state.playtestObject, 'playtestObject');
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
