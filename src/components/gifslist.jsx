import React, { Component } from 'react';

class GifsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ['toto', 'tata']
    };
  }

  render() {
    return (
      <div className="gifslist">
        {this.state.gifs}
      </div>
    );
  }
}

export default GifsList;
