import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  selectId = (event) => {
    this.props.selectGif(this.props.id)
  }

  render() {
    const imageID = `https://media.giphy.com/media/${this.props.id}/200.gif`
    return (
      <div className="gif">
        <img src={imageID} className="gif" onClick={this.selectId}/>
      </div>
    );
  }
}

export default Gif;
