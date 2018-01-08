import React, { Component } from 'react'
import Gif from './gif'

class GifsList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.props.gifs.map( gif => {
      return <Gif id={gif} key={gif} selectGif={this.props.selectGif}/>
    })
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifsList;
