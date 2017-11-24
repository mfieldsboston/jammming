import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {
             this.props.tracks.map((track, i) => {
               return <Track isRemoval={this.props.removalValue} key={track.id} track={track}
               onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>;
             })
          }
      </div>
    );
  }
}

export default Tracklist;
