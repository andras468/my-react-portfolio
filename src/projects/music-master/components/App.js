import React, { Component } from 'react';

import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artist: null, topTracks: [] };

  componentDidMount() {
    this.searchArtist('ACDC');
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist: artist });

          fetch(`${API_ADDRESS}/artist/${artist .id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ topTracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist}/>
        <Artist artist={this.state.artist}/>
        <Tracks tracks={this.state.topTracks} />
      </div>
    )
  }
}

export default App;