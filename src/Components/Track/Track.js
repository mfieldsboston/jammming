import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    /*this.handleClickAddTrack = this.handleClickAddTrack.bind(this);
    this.handleClickRemoveTrack = this.handleClickRemoveTrack.bind(this);*/
  }

  /*handleClickAddTrack(e) {
  const name = e.target.value;
  this.props.addTrack(name);
}*/

/*handleClickRemoveTrack(e) {
const name = e.target.value;
this.props.removeTrack(name);
}*/

  renderAction() {
    const isRemoval = this.props.isRemoval;

    if (isRemoval) {
      return <a className="Track-action">-</a>;
    }
    else {
      return <a className="Track-action">+</a>;
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
