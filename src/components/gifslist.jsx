import React, { Component } from 'react'

class GifsList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.gifs.map( gif => {
      return <p key={gif}>{gif}</p>
    })
  }

  render() {
    return (
      <div className="gifslist">
        {this.renderList()}
      </div>
    );
  }
}

export default GifsList;
