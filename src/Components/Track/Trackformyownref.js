import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {isRemoval: false};
    +*/
  }

  /*addTrack() {
    this.setState({isRemoval: true});
  }

  removeTrack() {
    this.setState({isRemoval: false});
  }*/

  renderAction() {
    /*const isRemoval = this.state.isRemoval;*/
    const isRemoval = this.props.isRemoval;

    if (isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>;
    }
    else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
  }

  render() {
    console.log(this.props.isRemoval, 'Props.isRemoval');
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
