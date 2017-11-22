import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action">-</a>;
    }
    else {
      return <a className="Track-action">+</a>;
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3></h3>
          <p></p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
