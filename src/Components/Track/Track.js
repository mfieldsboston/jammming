import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRemoval: false};
  }
  addTrack() {
    console.log('add');
  }

  removeTrack() {
    console.log('remove');
  }

  renderAction() {
    if (this.state.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>;
    }
    else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
  }

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
