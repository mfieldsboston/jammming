import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

handleNameChange(e) {
    let newName = e.target.value;
    this.props.onNameChange(newName);
  }

render() {
    return (
      <div className="Playlist">
        <input value={this.props.name} onChange={this.handleNameChange}/>
        <Tracklist isRemoval={true} tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
