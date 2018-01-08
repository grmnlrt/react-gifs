import React, { Component } from 'react';
import SearchBar from './searchbar';
import GifsList from './gifslist';
import SelectedGif from './selected_gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsList: ["toto", "tata"]
    }
  }

  render() {
    return (
      <div id="app">
        <div className="left-content">
          <SearchBar/>
          <SelectedGif/>
        </div>
        <div className="right-content">
          <GifsList gifs={this.state.gifsList}/>
        </div>
      </div>
    );
  }
}

export default App;
