import React, { Component } from 'react';
import SearchBar from './searchbar.jsx';
import GifsList from './gifslist.jsx';
import SelectedGif from './selected_gif.jsx';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="app">
        <div className="left-content">
          <SearchBar/>
          <SelectedGif/>
        </div>
        <div className="right-content">
          <GifsList/>
        </div>
      </div>
    );
  }
}

export default App;
