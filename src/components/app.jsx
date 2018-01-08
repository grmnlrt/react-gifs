import React, { Component } from 'react';
import giphy from 'giphy-api'
import SearchBar from './searchbar';
import GifsList from './gifslist';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsList: ["l0HlDgg6jypfnVejC", "l3vRmJTAIKdu54EYE"],
      gifId: "l0HlDgg6jypfnVejC"
    }

    this.search('toto')
  }

  search = (query) => {
    giphy('r00I8R9kBrlNQCddZn9MLMhJh6fROPYl').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
        const ids = res.data.map( id => {
          return id.id
        });
        this.setState({
          gifsList: ids
        })
    });
  }

  selectGif = (key) => {
    this.setState({
      gifId: key
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.gifId} selectGif={this.selectGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifsList} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
