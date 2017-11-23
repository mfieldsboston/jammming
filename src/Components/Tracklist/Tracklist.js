import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    console.log(this.props.tracks, 'Props.TRACKS');
    return (
      <div className="TrackList">
          {
             this.props.tracks.map((track, i) => {
               return <Track key={track.id} track={track} />;
             })
          }
      </div>
    );
  }
}

export default Tracklist;
