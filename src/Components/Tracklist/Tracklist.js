import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {
             this.props.tracks.map((track, i) => {
               return <Track key={track.id} track={track} isRemoval={this.props.isRemoval} />;
             })
          }
      </div>
    );
  }
}

export default Tracklist;
